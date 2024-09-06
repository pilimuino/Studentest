import Navbar from '@/components/navbar/Navbar';
import './index.css';
import Footer from './components/footer/Footer';
import Home from './components/home/HomeComponent'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>
      <main>
        <Home/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
