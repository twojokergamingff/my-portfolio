import './App.css'
import Navbar from './components/Navbar'
import PlayerProfile from './components/PlayerProfile'
import AbilitiesStats from './components/AbilitiesStats'
import BuildGallery from './components/BuildGallery'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <PlayerProfile />
      <AbilitiesStats />
      <BuildGallery />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
