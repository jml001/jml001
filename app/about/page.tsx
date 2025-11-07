import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bainultra-primary to-bainultra-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-6">
            About BainUltra
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Pioneers in therapeutic bathing since 1963
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <p className="text-lg text-gray-700 mb-4">
                For over six decades, BainUltra has been at the forefront of innovation in
                therapeutic bathing. What began as a vision to transform the ordinary bath
                into an extraordinary wellness experience has evolved into a commitment to
                enhancing lives through therapeutic technologies.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Founded in 1963, we've continuously pushed the boundaries of what's possible
                in home wellness. Our therapeutic bathtubs combine cutting-edge technology
                with elegant design, bringing spa-quality experiences into homes worldwide.
              </p>
              <p className="text-lg text-gray-700">
                Today, BainUltra stands as a leader in the industry, recognized for our
                innovation, quality, and dedication to improving wellbeing through the power
                of therapeutic bathing.
              </p>
            </div>
            <div className="bg-bainultra-light rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-lg">[ Company History Image ]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-bainultra-light">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-bainultra-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-bainultra-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Quality</h3>
              <p className="text-gray-700">
                We're committed to excellence in every detail, from materials to manufacturing,
                ensuring products that stand the test of time.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-bainultra-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-bainultra-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-gray-700">
                Continuous research and development drive us to create groundbreaking
                therapeutic technologies that enhance wellbeing.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <div className="w-16 h-16 bg-bainultra-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-bainultra-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Wellness</h3>
              <p className="text-gray-700">
                Your health and wellbeing are at the heart of everything we do, inspiring
                products that truly make a difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">BainUltra By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-bainultra-primary mb-2">60+</div>
              <p className="text-gray-700 font-semibold">Years of Excellence</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-bainultra-primary mb-2">4</div>
              <p className="text-gray-700 font-semibold">Therapeutic Technologies</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-bainultra-primary mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Product Models</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-bainultra-primary mb-2">50+</div>
              <p className="text-gray-700 font-semibold">Countries Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment to Sustainability */}
      <section className="py-20 bg-bainultra-light">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-lg">[ Sustainability Image ]</p>
            </div>
            <div>
              <h2 className="heading-2 mb-6">Committed to Sustainability</h2>
              <p className="text-lg text-gray-700 mb-4">
                We believe in creating products that are not only good for you, but also
                good for the planet. Our commitment to sustainability drives our choices
                in materials, manufacturing processes, and energy efficiency.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From eco-friendly materials to energy-efficient technologies, every
                BainUltra product is designed with environmental responsibility in mind.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-bainultra-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Energy-efficient heating systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-bainultra-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Sustainable manufacturing practices</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-bainultra-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Recyclable and eco-friendly materials</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-bainultra-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Long-lasting, durable products</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-bainultra-primary text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-6">
            Experience the BainUltra Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Discover how our therapeutic bathtubs can transform your daily routine into
            a wellness ritual.
          </p>
          <Link href="/products" className="btn-primary bg-white text-bainultra-primary hover:bg-gray-100">
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  )
}
