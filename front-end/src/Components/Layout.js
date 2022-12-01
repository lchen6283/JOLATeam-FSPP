import { Outlet } from "react-router-dom"
import NavBar from "../Components/NavBar"

const Layout = () => {
  return (
    <main className="App">
      <NavBar />
      <Outlet />
    </main>
  )
}

export default Layout