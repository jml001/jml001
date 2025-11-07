# BainUltra Product Showcase Website

A modern, responsive website showcasing BainUltra's luxury therapeutic bathtubs with Shopify integration. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

### 🏠 Company Showcase
- Beautiful homepage highlighting BainUltra's heritage and values
- Company information and sustainability commitment
- About page with detailed history and mission

### 💆 Therapeutic Technologies
- Dedicated therapies page showcasing:
  - Air Therapy
  - Hydro Therapy
  - Thermo Therapy
  - Chromatherapy
- Detailed benefits and features for each therapy

### 🛁 Product Catalog with Advanced Filtering
- **Primary Filter: Bathtub Type**
  - Freestanding
  - Alcove
  - Drop-In
  - Undermount
- Additional filters:
  - Therapy types
  - Search functionality
- Responsive product grid
- Individual product detail pages
- Related products suggestions

### 🛒 Shopify Integration
- Connected to Shopify Storefront API
- Real-time product data
- Mock data for development
- GraphQL queries for optimal performance

### 📱 Responsive Design
- Mobile-first approach
- Beautiful UI with custom BainUltra color scheme
- Smooth animations and transitions
- Accessible navigation

## Technology Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **E-commerce:** Shopify Storefront API
- **GraphQL Client:** graphql-request
- **Fonts:** Google Fonts (Inter, Playfair Display)

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- A Shopify store with Storefront API access (optional for development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jml001
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure environment variables**

   Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add your Shopify credentials:
   ```env
   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token
   NEXT_PUBLIC_SHOPIFY_API_VERSION=2024-07
   ```

   **Note:** The site works with mock data if Shopify credentials are not configured.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
jml001/
├── app/                      # Next.js app directory
│   ├── about/               # About page
│   ├── products/            # Products listing & detail pages
│   │   └── [handle]/       # Dynamic product routes
│   ├── therapies/          # Therapies information page
│   ├── layout.tsx          # Root layout with nav & footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── ProductFilters.tsx  # Product filtering component
│   └── ProductGrid.tsx     # Product grid display
├── lib/                     # Utilities and API
│   └── shopify.ts          # Shopify API integration
├── types/                   # TypeScript type definitions
│   └── product.ts          # Product types
├── public/                  # Static assets
├── .env.example            # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Shopify Setup

### Getting Your Storefront API Credentials

1. **Log in to your Shopify Admin**

2. **Create a Custom App**
   - Go to Settings → Apps and sales channels
   - Click "Develop apps"
   - Click "Create an app"
   - Name it (e.g., "BainUltra Website")

3. **Configure Storefront API Access**
   - Click "Configure Storefront API scopes"
   - Enable the following scopes:
     - `unauthenticated_read_product_listings`
     - `unauthenticated_read_product_inventory`
     - `unauthenticated_read_products`
   - Save

4. **Get Your Credentials**
   - Go to "API credentials" tab
   - Copy the "Storefront API access token"
   - Your store domain is `your-store.myshopify.com`

### Product Tagging for Filters

To enable proper filtering, tag your Shopify products:

**Bathtub Type Tags:**
- `freestanding`
- `alcove`
- `drop-in`
- `undermount`

**Therapy Tags:**
- `air-therapy`
- `hydro-therapy`
- `thermalift`
- `chromatherapy`

Example: A freestanding tub with air and chromatherapy would have tags: `freestanding`, `air-therapy`, `chromatherapy`

## Development Features

### Mock Data
The site includes mock product data for development without Shopify. See `lib/shopify.ts` → `getMockProducts()`

### Type Safety
Full TypeScript support with defined interfaces for products, filters, and Shopify responses.

### Responsive Design
Mobile-first design with breakpoints:
- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended) - Zero configuration
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

### Deploy to Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

## Customization

### Colors
Edit `tailwind.config.ts` to customize the BainUltra color scheme:
```typescript
colors: {
  bainultra: {
    primary: '#2C5F8D',    // Main blue
    secondary: '#8B9EB7',  // Light blue
    accent: '#D4AF37',     // Gold
    dark: '#1A1A1A',       // Dark text
    light: '#F5F5F5',      // Light background
  },
}
```

### Fonts
Modify `app/layout.tsx` to change fonts.

### Mock Products
Update `lib/shopify.ts` → `getMockProducts()` to add/modify demo products.

## Key Features Implemented

✅ Modern Next.js 14 with App Router
✅ TypeScript for type safety
✅ Shopify Storefront API integration
✅ Advanced product filtering system
✅ **Primary filter: Bathtub type** (freestanding, alcove, drop-in, undermount)
✅ Therapy filters
✅ Search functionality
✅ Responsive design
✅ Individual product pages
✅ Related products
✅ Company showcase
✅ Therapies information
✅ SEO-friendly
✅ Mock data for development

## Support

For questions or issues:
- Create an issue in the repository
- Contact the development team

## License

Copyright © 2025 BainUltra. All rights reserved.

---

Built with ❤️ for BainUltra
