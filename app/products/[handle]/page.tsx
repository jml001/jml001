import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getMockProducts } from '@/lib/shopify'

interface ProductPageProps {
  params: {
    handle: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const products = getMockProducts()
  const product = products.find(p => p.handle === params.handle)

  if (!product) {
    notFound()
  }

  const relatedProducts = products
    .filter(p => p.id !== product.id && p.bathtubType === product.bathtubType)
    .slice(0, 3)

  return (
    <div>
      {/* Breadcrumbs */}
      <div className="bg-bainultra-light py-4">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-bainultra-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-bainultra-primary">Products</Link>
            <span>/</span>
            <span className="text-bainultra-primary font-semibold">{product.title}</span>
          </div>
        </div>
      </div>

      {/* Product Details */}
      <section className="py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="bg-gray-200 rounded-lg h-96 lg:h-[600px] flex items-center justify-center mb-4">
                <p className="text-gray-500 text-lg">[ Main Product Image ]</p>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-200 rounded-lg h-24 flex items-center justify-center cursor-pointer hover:opacity-75 transition-opacity">
                    <p className="text-gray-400 text-xs">{i}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              {product.bathtubType && (
                <div className="inline-block bg-bainultra-primary text-white px-4 py-2 rounded-full text-sm font-semibold capitalize mb-4">
                  {product.bathtubType.replace('-', ' ')}
                </div>
              )}

              <h1 className="heading-2 mb-4">{product.title}</h1>

              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold text-bainultra-primary">
                  ${parseFloat(product.priceRange.minVariantPrice.amount).toLocaleString()}
                </span>
                <span className="text-gray-500 ml-2">USD</span>
              </div>

              <p className="text-lg text-gray-700 mb-8">
                {product.description}
              </p>

              {/* Therapies */}
              {product.therapies && product.therapies.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Included Therapies</h3>
                  <div className="flex flex-wrap gap-3">
                    {product.therapies.map((therapy) => (
                      <div
                        key={therapy}
                        className="bg-bainultra-light text-bainultra-primary px-4 py-2 rounded-lg font-semibold capitalize"
                      >
                        {therapy.replace('-', ' ')}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              {product.features && product.features.length > 0 && (
                <div className="mb-8">
                  <h3 className="text-lg font-bold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-6 h-6 text-bainultra-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary flex-1">
                  Contact for Quote
                </button>
                <button className="btn-secondary flex-1">
                  Find a Dealer
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Product Type</h4>
                    <p className="text-gray-600 capitalize">{product.bathtubType?.replace('-', ' ')}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Availability</h4>
                    <p className="text-green-600">In Stock</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="py-12 bg-bainultra-light">
        <div className="container-custom">
          <div className="bg-white rounded-lg p-8">
            <h2 className="heading-3 mb-6">Product Details</h2>
            <div className="prose max-w-none">
              <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />

              <h3 className="text-xl font-bold mt-8 mb-4">Specifications</h3>
              <p className="text-gray-700">
                This {product.bathtubType} bathtub is designed to provide the ultimate
                wellness experience in your home. With premium materials and cutting-edge
                therapeutic technologies, it transforms your daily routine into a spa-like retreat.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Installation</h3>
              <p className="text-gray-700">
                Professional installation is recommended. Contact our team or an authorized
                dealer for installation guidance and requirements specific to your space.
              </p>

              <h3 className="text-xl font-bold mt-8 mb-4">Warranty</h3>
              <p className="text-gray-700">
                BainUltra products come with a comprehensive warranty. Contact us for
                detailed warranty information and registration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12">
          <div className="container-custom">
            <h2 className="heading-3 mb-8">Similar Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${relatedProduct.handle}`}
                  className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <p className="text-gray-500">[ Product Image ]</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-bainultra-primary transition-colors">
                      {relatedProduct.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-bainultra-primary">
                        ${parseFloat(relatedProduct.priceRange.minVariantPrice.amount).toLocaleString()}
                      </span>
                      <span className="text-bainultra-primary font-semibold group-hover:underline">
                        View →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-bainultra-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Experience This Product?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us for a personalized quote or to find an authorized dealer near you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary bg-white text-bainultra-primary hover:bg-gray-100">
              Request a Quote
            </button>
            <button className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-bainultra-primary">
              Find a Dealer
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  const products = getMockProducts()
  return products.map((product) => ({
    handle: product.handle,
  }))
}
