import { Outlet } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"

function DefoultLayout() {
  return (
    <>
      <header>
        <HeaderNav />
      </header>
      <main className="bg-black">
        <Outlet />
      </main>
      <footer>
        <h5>ciao</h5>
      </footer>
    </>
  )
}

export default DefoultLayout