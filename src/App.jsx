import './App.css'
import Home from './home'
import Navbar from './navbar'
import Page from './page'

function App() {
  return (
    <>
      {/* Desktop/Tablet Message */}
      <div className="hidden md:flex flex-col items-center justify-center h-screen text-center text-white bg-black">
        <h1 className="text-2xl font-bold text-orange-500">Best viewed on mobile</h1>
        <p className="text-gray-400 mt-2">Please open this site on your smartphone</p>
      </div>

      {/* Mobile Content */}
      <div className="block md:hidden">
        <Home />
        <Navbar />
        <Page />
      </div>
    </>
  )
}

export default App
