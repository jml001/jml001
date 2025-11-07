'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import ProductFilters from '@/components/ProductFilters'
import ProductGrid from '@/components/ProductGrid'
import { getMockProducts } from '@/lib/shopify'
import { Product, BathtubType } from '@/types/product'

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filters, setFilters] = useState({
    bathtubType: [] as BathtubType[],
    therapies: [] as string[],
    search: '',
  })

  // Load products
  useEffect(() => {
    const products = getMockProducts()
    setAllProducts(products)
    setFilteredProducts(products)
  }, [])

  // Initialize filters from URL
  useEffect(() => {
    const typeParam = searchParams.get('type')
    const therapyParam = searchParams.get('therapy')

    if (typeParam) {
      setFilters(prev => ({
        ...prev,
        bathtubType: [typeParam as BathtubType],
      }))
    }

    if (therapyParam) {
      setFilters(prev => ({
        ...prev,
        therapies: [therapyParam],
      }))
    }
  }, [searchParams])

  // Apply filters
  useEffect(() => {
    let filtered = [...allProducts]

    // Filter by bathtub type
    if (filters.bathtubType.length > 0) {
      filtered = filtered.filter(product =>
        product.bathtubType && filters.bathtubType.includes(product.bathtubType)
      )
    }

    // Filter by therapies
    if (filters.therapies.length > 0) {
      filtered = filtered.filter(product =>
        product.therapies &&
        filters.therapies.some(therapy =>
          product.therapies?.some(pt => pt.toLowerCase().includes(therapy.toLowerCase()))
        )
      )
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase()
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    setFilteredProducts(filtered)
  }, [filters, allProducts])

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bainultra-primary to-bainultra-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-6">
            Our Product Collection
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the perfect therapeutic bathtub for your home. Filter by type, therapy,
            and features to find your ideal wellness solution.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-bainultra-light min-h-screen">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <aside className="lg:col-span-1">
              <ProductFilters onFilterChange={handleFilterChange} />
            </aside>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-gray-700">
                  <span className="font-semibold">{filteredProducts.length}</span> products found
                </p>
                <select className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bainultra-primary focus:border-transparent">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Name: A to Z</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                <ProductGrid products={filteredProducts} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bainultra-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of wellness experts is here to help you find the perfect bathtub
            for your needs and space.
          </p>
          <button className="btn-primary bg-white text-bainultra-primary hover:bg-gray-100">
            Contact Our Experts
          </button>
        </div>
      </section>
    </div>
  )
}
