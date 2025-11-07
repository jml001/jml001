import Link from 'next/link'
import { getMockProducts } from '@/lib/shopify'

export default async function Home() {
  const featuredProducts = getMockProducts().slice(0, 3)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-bainultra-primary to-bainultra-secondary">
        <div className="container-custom text-center text-white">
          <h1 className="heading-1 text-white mb-6">
            Transform Your Bathroom Into a Personal Spa Sanctuary
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the perfect blend of luxury, wellness, and innovation with BainUltra's therapeutic bathtubs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="btn-primary bg-white text-bainultra-primary hover:bg-gray-100">
              Explore Products
            </Link>
            <Link href="/therapies" className="btn-secondary border-2 border-white bg-transparent hover:bg-white hover:text-bainultra-primary">
              Discover Therapies
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">
                Over 60 Years of Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Since 1963, BainUltra has been at the forefront of therapeutic bathtub innovation.
                We combine cutting-edge technology with timeless design to create bathing experiences
                that nurture both body and mind.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our commitment to wellness goes beyond aesthetics. Each BainUltra bathtub is designed
                with multiple therapeutic technologies that work in harmony to provide a comprehensive
                wellness experience right in your home.
              </p>
              <Link href="/about" className="text-bainultra-primary font-semibold hover:underline">
                Learn More About Us →
              </Link>
            </div>
            <div className="bg-bainultra-light rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-lg">[ Company Image Placeholder ]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Therapies Section */}
      <section className="py-20 bg-bainultra-light">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Our Therapeutic Technologies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-bainultra-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-bainultra-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Air Therapy</h3>
              <p className="text-gray-600">
                Millions of heated air microbubbles create a gentle, effervescent massage that soothes and relaxes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-bainultra-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-bainultra-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Hydro Therapy</h3>
              <p className="text-gray-600">
                Powerful water jets target specific muscle groups, relieving tension and promoting circulation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-bainultra-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-bainultra-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Thermo Therapy</h3>
              <p className="text-gray-600">
                Heated surfaces maintain optimal water temperature, enhancing relaxation and therapeutic benefits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-bainultra-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-bainultra-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Chromatherapy</h3>
              <p className="text-gray-600">
                LED lighting therapy uses color to influence mood, promoting relaxation and mental wellbeing.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/therapies" className="btn-primary">
              Learn More About Our Therapies
            </Link>
          </div>
        </div>
      </section>

      {/* Bathtub Types Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Find Your Perfect Bathtub
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/products?type=freestanding" className="group">
              <div className="bg-bainultra-light rounded-lg p-8 h-64 flex flex-col items-center justify-center hover:bg-bainultra-primary hover:text-white transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Freestanding</h3>
                <p className="text-center opacity-80">Stunning centerpiece for your bathroom</p>
              </div>
            </Link>

            <Link href="/products?type=alcove" className="group">
              <div className="bg-bainultra-light rounded-lg p-8 h-64 flex flex-col items-center justify-center hover:bg-bainultra-primary hover:text-white transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Alcove</h3>
                <p className="text-center opacity-80">Perfect for standard installations</p>
              </div>
            </Link>

            <Link href="/products?type=drop-in" className="group">
              <div className="bg-bainultra-light rounded-lg p-8 h-64 flex flex-col items-center justify-center hover:bg-bainultra-primary hover:text-white transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Drop-In</h3>
                <p className="text-center opacity-80">Versatile and customizable</p>
              </div>
            </Link>

            <Link href="/products?type=undermount" className="group">
              <div className="bg-bainultra-light rounded-lg p-8 h-64 flex flex-col items-center justify-center hover:bg-bainultra-primary hover:text-white transition-all duration-300">
                <h3 className="text-2xl font-bold mb-2">Undermount</h3>
                <p className="text-center opacity-80">Sleek and seamless design</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-bainultra-light">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">
            Featured Collections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/products/${product.handle}`} className="group">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                  <div className="bg-gray-200 h-64 flex items-center justify-center">
                    <p className="text-gray-500">[ Product Image ]</p>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-bainultra-primary transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-bainultra-primary">
                        ${product.priceRange.minVariantPrice.amount}
                      </span>
                      <span className="text-bainultra-primary font-semibold group-hover:underline">
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/products" className="btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bainultra-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">
            Ready to Transform Your Bathing Experience?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how BainUltra can bring wellness and luxury to your home.
          </p>
          <Link href="/products" className="btn-primary bg-white text-bainultra-primary hover:bg-gray-100">
            Explore Our Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
