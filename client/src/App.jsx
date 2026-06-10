import { useState } from 'react'
import Loader from './components/ui/Loader'
import ScrollProgress from './components/layout/ScrollProgress'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './pages/Home'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}

      {!isLoading && (
        <>
          <ScrollProgress />
          <Navbar />
          <Home />
          <Footer />
        </>
      )}
    </>
  )
}

export default App