import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Search from './Components/Search/Search'
import Home from './Components/Home/Home'
import Support from './Components/Support/Support'
import Info from './Components/Info/Info'
import Travelers from './Components/Travelers/Travelers'
import Subscriber from './Components/Subscribers/Subscriber'
import Footer from './Components/Footer/Footer'
import Lounge from './Components/Lounge/Lounge'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Search />
      <Support/>
      <Info />
      <Lounge />
     <Travelers />
      <Subscriber />
      <Footer />
    </div>
  )
}

export default App
