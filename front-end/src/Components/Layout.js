import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"
import Footer from "../Components/Footer"

const Layout = () => {
  return (
    <main className="App w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  )
}

export default Layout