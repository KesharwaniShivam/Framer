import About from "./components/About"
import Landing from "./components/LandingP"
import Marqee from "./components/Marqee"
import Navbar from "./components/Navbar"


function App() {
  

  return (
    <>
    <div className="w-full min-h-screen text-white bg-zinc-900">
     
      
      <Navbar/>
      <Landing/>
      <Marqee/>
      <About/>
      </div>
    </>
  )
}

export default App
