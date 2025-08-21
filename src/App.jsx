import { Routes, Route } from 'react-router-dom'
import Favourite from './pages/favourites'
import Trending from './pages/trending'
import Navbar from './Navbar'
import "./styles/main.css"
import "./styles/dark.css"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/favourites" element={<Favourite />} />
        <Route path="/" element={<Trending />} />
      </Routes>
    </>
  )
}

export default App
