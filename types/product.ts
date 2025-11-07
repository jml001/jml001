export type BathtubType = 'freestanding' | 'alcove' | 'drop-in' | 'undermount'

export interface ProductImage {
  url: string
  altText: string
  width: number
  height: number
}

export interface ProductVariant {
  id: string
  title: string
  price: {
    amount: string
    currencyCode: string
  }
  availableForSale: boolean
}

export interface Product {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  images: ProductImage[]
  variants: ProductVariant[]
  tags: string[]
  productType: string
  bathtubType?: BathtubType
  therapies?: string[]
  dimensions?: {
    length?: string
    width?: string
    depth?: string
  }
  features?: string[]
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
    maxVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
}

export interface ProductFilter {
  bathtubType?: BathtubType[]
  therapies?: string[]
  priceRange?: {
    min?: number
    max?: number
  }
  search?: string
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  images: {
    edges: Array<{
      node: {
        url: string
        altText: string
        width: number
        height: number
      }
    }>
  }
  variants: {
    edges: Array<{
      node: {
        id: string
        title: string
        priceV2: {
          amount: string
          currencyCode: string
        }
        availableForSale: boolean
      }
    }>
  }
  tags: string[]
  productType: string
  priceRange: {
    minVariantPrice: {
      amount: string
      currencyCode: string
    }
    maxVariantPrice: {
      amount: string
      currencyCode: string
    }
  }
}
