import Link from 'next/link'

export default function TherapiesPage() {
  const therapies = [
    {
      id: 'air',
      name: 'Air Therapy',
      tagline: 'The Gentlest Massage',
      description: 'Experience the soothing power of millions of heated air microbubbles that create a gentle, effervescent massage throughout your entire body.',
      benefits: [
        'Promotes deep relaxation and stress relief',
        'Improves blood circulation',
        'Gentle on sensitive skin',
        'Creates a soft, cocoon-like sensation',
        'Helps reduce muscle tension',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
    },
    {
      id: 'hydro',
      name: 'Hydro Therapy',
      tagline: 'Targeted Muscle Relief',
      description: 'Powerful water jets strategically placed to target specific muscle groups, providing deep tissue massage and therapeutic relief.',
      benefits: [
        'Relieves chronic pain and muscle tension',
        'Enhances athletic recovery',
        'Improves joint flexibility',
        'Stimulates circulation',
        'Reduces inflammation',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      ),
    },
    {
      id: 'thermo',
      name: 'Thermo Therapy',
      tagline: 'Constant Warmth & Comfort',
      description: 'Heated surfaces throughout the bathtub maintain optimal water temperature, ensuring consistent warmth and enhancing the therapeutic benefits of your bath.',
      benefits: [
        'Maintains consistent water temperature',
        'Enhances relaxation response',
        'Improves therapy effectiveness',
        'Reduces heat loss during longer baths',
        'Provides comfortable backrest warmth',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
    },
    {
      id: 'chromatherapy',
      name: 'Chromatherapy',
      tagline: 'Color Light Therapy',
      description: 'LED lighting therapy that uses specific colors to influence mood, promote relaxation, and enhance your mental wellbeing.',
      benefits: [
        'Promotes emotional balance',
        'Reduces stress and anxiety',
        'Enhances mood and energy',
        'Supports better sleep patterns',
        'Creates a spa-like ambiance',
      ],
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-bainultra-primary to-bainultra-secondary text-white">
        <div className="container-custom text-center">
          <h1 className="heading-1 text-white mb-6">
            Therapeutic Technologies
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            BainUltra's innovative therapies work in harmony to provide comprehensive wellness benefits
            that nurture both body and mind.
          </p>
        </div>
      </section>

      {/* Therapies Detail Sections */}
      {therapies.map((therapy, index) => (
        <section
          key={therapy.id}
          id={therapy.id}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-bainultra-light'}`}
        >
          <div className="container-custom">
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                <div className="text-bainultra-primary mb-4">
                  {therapy.icon}
                </div>
                <h2 className="heading-2 mb-4">
                  {therapy.name}
                </h2>
                <p className="text-xl text-bainultra-accent font-semibold mb-4">
                  {therapy.tagline}
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  {therapy.description}
                </p>
                <h3 className="text-xl font-bold mb-4">Key Benefits:</h3>
                <ul className="space-y-2 mb-6">
                  {therapy.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-bainultra-primary mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/products?therapy=${therapy.id}`}
                  className="text-bainultra-primary font-semibold hover:underline"
                >
                  View Products with {therapy.name} →
                </Link>
              </div>
              <div className={`bg-gray-200 rounded-lg h-96 flex items-center justify-center ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <p className="text-gray-500 text-lg">[ {therapy.name} Visual ]</p>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Combination Therapy Section */}
      <section className="py-20 bg-bainultra-primary text-white">
        <div className="container-custom">
          <h2 className="heading-2 text-white text-center mb-8">
            The Power of Combined Therapies
          </h2>
          <p className="text-xl text-center max-w-3xl mx-auto mb-12">
            Many BainUltra bathtubs feature multiple therapeutic technologies working together,
            providing a comprehensive wellness experience that addresses physical, mental, and
            emotional wellbeing.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">4</div>
              <p className="text-lg">Therapeutic Technologies</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">60+</div>
              <p className="text-lg">Years of Innovation</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100%</div>
              <p className="text-lg">Wellness Focused</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">
            Experience the Difference
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Find the perfect combination of therapies for your wellness needs.
          </p>
          <Link href="/products" className="btn-primary">
            Explore Our Products
          </Link>
        </div>
      </section>
    </div>
  )
}
