import Header from './components/header'
import Hero from './components/hero'
import TrendyPlants from './components/trendy-plants'
import TopSellingPlants from './components/top-selling-plants'
import CustomerReview from './components/customer-review'
import BestCollection from './components/best-collection'
import Footer from './components/footer'

// App is the root component — it puts all sections together in order
export default function App() {
  return (
    <main className="min-h-screen">

      {/* Top section uses a background image (the topiary photo) */}
      <div
        style={{
          backgroundImage: "url('/images/backgrounds/topiary.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Header />
        <Hero />
        <TrendyPlants />
      </div>

      {/* These sections use their own dark background */}
      <TopSellingPlants />
      <CustomerReview />
      <BestCollection />
      <Footer />

    </main>
  )
}
