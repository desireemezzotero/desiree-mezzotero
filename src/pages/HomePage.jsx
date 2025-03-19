import { NavLink } from "react-router-dom"

function HomePage() {
  return (
    <div className="container mx-auto text-white min-h-[calc(100vh-130px)] flex items-center justify-center">
      <div className="text-center">
        <div className="flex justify-center">
          <img src="../dmImg.jpg" alt="immagine" className="rounded-full h-[308px] w-[231px]" />
        </div>
        <h1 className="mt-4 text-4xl font-extrabold">Hello, I'm Desiree</h1>
        <h4 className="mt-2 font-extrabold">Jr. Full Stack Web Developer</h4>

        <div className="container-animation w-[900px] mx-auto text-neutral-400 mt-5">
          <div className="stage_animation">
            <h4 className="mt-2 text-6xl font-extrabold h4-animation mr-8">Jr. Full Stack Web Developer</h4>
            <h4 className="mt-2 text-6xl font-extrabold h4-animation">Jr. Full Stack Web Developer</h4>
          </div>
        </div>
      </div>
    </div>

  )
}

export default HomePage