import { GraphQLClient } from 'graphql-request'
import { Product, ShopifyProduct, BathtubType } from '@/types/product'

const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/${process.env.NEXT_PUBLIC_SHOPIFY_API_VERSION || '2024-07'}/graphql.json`

const client = new GraphQLClient(endpoint, {
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN || '',
    'Content-Type': 'application/json',
  },
})

// Helper function to parse bathtub type from tags
function parseBathtubType(tags: string[]): BathtubType | undefined {
  const typeTag = tags.find(tag =>
    tag.toLowerCase().includes('freestanding') ||
    tag.toLowerCase().includes('alcove') ||
    tag.toLowerCase().includes('drop-in') ||
    tag.toLowerCase().includes('undermount')
  )

  if (!typeTag) return undefined

  const lowerTag = typeTag.toLowerCase()
  if (lowerTag.includes('freestanding')) return 'freestanding'
  if (lowerTag.includes('alcove')) return 'alcove'
  if (lowerTag.includes('drop-in')) return 'drop-in'
  if (lowerTag.includes('undermount')) return 'undermount'

  return undefined
}

// Helper function to parse therapies from tags
function parseTherapies(tags: string[]): string[] {
  const therapyKeywords = ['air', 'hydro', 'thermo', 'chroma', 'massage']
  return tags.filter(tag =>
    therapyKeywords.some(keyword => tag.toLowerCase().includes(keyword))
  )
}

// Transform Shopify product to our Product type
function transformProduct(shopifyProduct: ShopifyProduct): Product {
  return {
    id: shopifyProduct.id,
    handle: shopifyProduct.handle,
    title: shopifyProduct.title,
    description: shopifyProduct.description,
    descriptionHtml: shopifyProduct.descriptionHtml,
    images: shopifyProduct.images.edges.map(edge => ({
      url: edge.node.url,
      altText: edge.node.altText || shopifyProduct.title,
      width: edge.node.width,
      height: edge.node.height,
    })),
    variants: shopifyProduct.variants.edges.map(edge => ({
      id: edge.node.id,
      title: edge.node.title,
      price: {
        amount: edge.node.priceV2.amount,
        currencyCode: edge.node.priceV2.currencyCode,
      },
      availableForSale: edge.node.availableForSale,
    })),
    tags: shopifyProduct.tags,
    productType: shopifyProduct.productType,
    bathtubType: parseBathtubType(shopifyProduct.tags),
    therapies: parseTherapies(shopifyProduct.tags),
    priceRange: shopifyProduct.priceRange,
  }
}

// GraphQL query for products
const PRODUCTS_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          handle
          title
          description
          descriptionHtml
          productType
          tags
          images(first: 10) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                priceV2 {
                  amount
                  currencyCode
                }
                availableForSale
              }
            }
          }
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
            maxVariantPrice {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    product(handle: $handle) {
      id
      handle
      title
      description
      descriptionHtml
      productType
      tags
      images(first: 10) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            priceV2 {
              amount
              currencyCode
            }
            availableForSale
          }
        }
      }
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
        maxVariantPrice {
          amount
          currencyCode
        }
      }
    }
  }
`

export async function getProducts(limit: number = 50, searchQuery?: string): Promise<Product[]> {
  try {
    const variables = {
      first: limit,
      query: searchQuery || undefined,
    }

    const data: any = await client.request(PRODUCTS_QUERY, variables)

    return data.products.edges.map((edge: any) => transformProduct(edge.node))
  } catch (error) {
    console.error('Error fetching products from Shopify:', error)
    return []
  }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
  try {
    const data: any = await client.request(PRODUCT_BY_HANDLE_QUERY, { handle })

    if (!data.product) return null

    return transformProduct(data.product)
  } catch (error) {
    console.error(`Error fetching product ${handle} from Shopify:`, error)
    return null
  }
}

export async function getProductsByBathtubType(type: BathtubType, limit: number = 50): Promise<Product[]> {
  const products = await getProducts(limit)
  return products.filter(product => product.bathtubType === type)
}

export async function searchProducts(searchTerm: string, limit: number = 50): Promise<Product[]> {
  return getProducts(limit, searchTerm)
}

// Mock data for development (when Shopify is not configured)
export function getMockProducts(): Product[] {
  return [
    {
      id: '1',
      handle: 'thermalift-freestanding',
      title: 'ThermaLift Freestanding Tub',
      description: 'Experience ultimate relaxation with our signature ThermaLift therapy in a stunning freestanding design.',
      descriptionHtml: '<p>Experience ultimate relaxation with our signature ThermaLift therapy in a stunning freestanding design.</p>',
      images: [
        {
          url: '/images/placeholder-tub.jpg',
          altText: 'ThermaLift Freestanding Tub',
          width: 800,
          height: 600,
        }
      ],
      variants: [
        {
          id: 'v1',
          title: 'Default',
          price: { amount: '8999.00', currencyCode: 'USD' },
          availableForSale: true,
        }
      ],
      tags: ['freestanding', 'thermalift', 'air-therapy', 'chromatherapy'],
      productType: 'Bathtub',
      bathtubType: 'freestanding',
      therapies: ['air-therapy', 'chromatherapy'],
      priceRange: {
        minVariantPrice: { amount: '8999.00', currencyCode: 'USD' },
        maxVariantPrice: { amount: '8999.00', currencyCode: 'USD' },
      },
      features: ['Air massage therapy', 'LED chromatherapy', 'Heated backrest', 'Premium acrylic'],
    },
    {
      id: '2',
      handle: 'hydro-alcove',
      title: 'Hydro Therapeutic Alcove',
      description: 'Perfect for standard bathroom installations with powerful hydro therapy jets.',
      descriptionHtml: '<p>Perfect for standard bathroom installations with powerful hydro therapy jets.</p>',
      images: [
        {
          url: '/images/placeholder-tub.jpg',
          altText: 'Hydro Therapeutic Alcove',
          width: 800,
          height: 600,
        }
      ],
      variants: [
        {
          id: 'v2',
          title: 'Default',
          price: { amount: '5999.00', currencyCode: 'USD' },
          availableForSale: true,
        }
      ],
      tags: ['alcove', 'hydro-therapy', 'massage'],
      productType: 'Bathtub',
      bathtubType: 'alcove',
      therapies: ['hydro-therapy', 'massage'],
      priceRange: {
        minVariantPrice: { amount: '5999.00', currencyCode: 'USD' },
        maxVariantPrice: { amount: '5999.00', currencyCode: 'USD' },
      },
      features: ['Hydro massage jets', 'Ergonomic design', 'Easy installation'],
    },
    {
      id: '3',
      handle: 'essence-drop-in',
      title: 'Essence Drop-In Collection',
      description: 'Elegant drop-in design with customizable therapy options.',
      descriptionHtml: '<p>Elegant drop-in design with customizable therapy options.</p>',
      images: [
        {
          url: '/images/placeholder-tub.jpg',
          altText: 'Essence Drop-In Collection',
          width: 800,
          height: 600,
        }
      ],
      variants: [
        {
          id: 'v3',
          title: 'Default',
          price: { amount: '7499.00', currencyCode: 'USD' },
          availableForSale: true,
        }
      ],
      tags: ['drop-in', 'air-therapy', 'hydro-therapy'],
      productType: 'Bathtub',
      bathtubType: 'drop-in',
      therapies: ['air-therapy', 'hydro-therapy'],
      priceRange: {
        minVariantPrice: { amount: '7499.00', currencyCode: 'USD' },
        maxVariantPrice: { amount: '7499.00', currencyCode: 'USD' },
      },
      features: ['Combined air and hydro therapy', 'Flexible installation', 'Modern design'],
    },
    {
      id: '4',
      handle: 'pure-undermount',
      title: 'Pure Undermount Series',
      description: 'Sleek undermount installation for a seamless bathroom aesthetic.',
      descriptionHtml: '<p>Sleek undermount installation for a seamless bathroom aesthetic.</p>',
      images: [
        {
          url: '/images/placeholder-tub.jpg',
          altText: 'Pure Undermount Series',
          width: 800,
          height: 600,
        }
      ],
      variants: [
        {
          id: 'v4',
          title: 'Default',
          price: { amount: '6799.00', currencyCode: 'USD' },
          availableForSale: true,
        }
      ],
      tags: ['undermount', 'chromatherapy', 'air-therapy'],
      productType: 'Bathtub',
      bathtubType: 'undermount',
      therapies: ['chromatherapy', 'air-therapy'],
      priceRange: {
        minVariantPrice: { amount: '6799.00', currencyCode: 'USD' },
        maxVariantPrice: { amount: '6799.00', currencyCode: 'USD' },
      },
      features: ['Undermount design', 'Chromatherapy lighting', 'Air massage system'],
    },
  ]
}
