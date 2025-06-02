import { Outlet } from "react-router-dom"
import HeaderNav from "../components/HeaderNav"
import FooterNav from "../components/FooterNav"

function DefoultLayout() {
  return (
    <>
      {/*  <header className="bg-black font-serif">
        <HeaderNav />
      </header> */}
      <main className="bg-[rgb(236,236,236)] min-h-screen font-serif scroll-smooth ">
        <Outlet />
      </main>
      <footer className="bg-[rgb(236,236,236)] pt-8">
        <FooterNav />
      </footer>
    </>
  )
}

export default DefoultLayout