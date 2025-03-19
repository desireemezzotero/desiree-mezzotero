import { Outlet } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"
import FooterNav from "../components/FooterNav"

function DefoultLayout() {
  return (
    <>
      <header className="bg-black">
        <HeaderNav />
      </header>
      <main className="bg-black">
        <Outlet />
      </main>
      <footer className="bg-black">
        <FooterNav />
      </footer>
    </>
  )
}

export default DefoultLayout