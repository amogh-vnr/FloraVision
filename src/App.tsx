import Header from '@/components/header'
import Hero from '@/components/hero'
import TrendyPlants from '@/components/trendy-plants'
import TopSellingPlants from '@/components/top-selling-plants'
import CustomerReview from '@/components/customer-review'
import BestCollection from '@/components/best-collection'
import Footer from '@/components/footer'

export default function App() {
  return (
    <main className="min-h-screen">
      <div
        className="relative isolate"
        style={{
          backgroundImage: "url('/images/backgrounds/topiary.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="relative">
          <Header />
          <Hero />
          <TrendyPlants />
        </div>
      </div>
      <TopSellingPlants />
      <CustomerReview />
      <BestCollection />
      <Footer />
    </main>
  )
}
