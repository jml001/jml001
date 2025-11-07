'use client'

import Link from 'next/link'
import { Product } from '@/types/product'

interface ProductGridProps {
  products: Product[]
}

export default function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="col-span-full text-center py-20">
        <svg
          className="w-24 h-24 mx-auto text-gray-400 mb-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-2xl font-bold text-gray-700 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters or search term</p>
      </div>
    )
  }

  return (
    <>
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/products/${product.handle}`}
          className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
        >
          <div className="relative">
            <div className="bg-gray-200 h-64 flex items-center justify-center">
              <p className="text-gray-500">[ Product Image ]</p>
            </div>
            {product.bathtubType && (
              <div className="absolute top-4 left-4 bg-bainultra-primary text-white px-3 py-1 rounded-full text-sm font-semibold capitalize">
                {product.bathtubType.replace('-', ' ')}
              </div>
            )}
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-bainultra-primary transition-colors">
              {product.title}
            </h3>

            <p className="text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>

            {product.therapies && product.therapies.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {product.therapies.slice(0, 3).map((therapy) => (
                  <span
                    key={therapy}
                    className="text-xs bg-bainultra-light text-bainultra-primary px-2 py-1 rounded"
                  >
                    {therapy.replace('-', ' ')}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-gray-200">
              <div>
                <span className="text-sm text-gray-500">Starting at</span>
                <div className="text-2xl font-bold text-bainultra-primary">
                  ${parseFloat(product.priceRange.minVariantPrice.amount).toLocaleString()}
                </div>
              </div>
              <span className="text-bainultra-primary font-semibold group-hover:underline">
                View Details →
              </span>
            </div>
          </div>
        </Link>
      ))}
    </>
  )
}
