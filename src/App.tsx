import React from 'react'
import NavBar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import { useAuth0 } from '@auth0/auth0-react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Product from './pages/Product/Product'
import Profile from './pages/Profile/Profile'

const App: React.FC<unknown> = () => {
  const { isAuthenticated } = useAuth0()

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {!isAuthenticated ? (
          <Route path="/" element={<Login />} />
        ) : (
          <Route path="/" element={<Home />} />
        )}
        <Route
          path="/product"
          element={
            <Product
              img="https://upload.wikimedia.org/wikipedia/commons/6/64/Garden_roses_%28yellow-red%29.jpg"
              title="Rose 7"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem
              Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum."
              rate={2.3}
              price={999}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
