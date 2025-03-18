import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefoultLayout from "./layouts/DefoultLayout"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={DefoultLayout}>
            <Route path="/" Component={HomePage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App