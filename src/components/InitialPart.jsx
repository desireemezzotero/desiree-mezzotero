function InitialPart() {
  return (
    <>
      <div className="container mx-auto text-white grid grid-cols-1 md:grid-cols-2 items-center justify-center md:h-screen">
        <div className="flex justify-center">
          <img src="../dm.png" alt="immagine" className="h-[400px] w-[370px]" />
        </div>

        <div className="text-center text-black">
          <h1 className="mt-4 text-5xl font-extrabold">Hello, I'm Desiree</h1>
          <h4 className="mt-2 text-2xl font-extrabold">Jr. Full Stack Web Developer</h4>

          <div className="container-animation mx-auto text-neutral-500 hidden md:block  mt-5">
            <div className="stage_animation ">
              <h4 className="mt-2 text-6xl font-extrabold h4-animation mr-8" >Jr. Full Stack Web Developer</h4>
              <h4 className="mt-2 text-6xl font-extrabold h4-animation">Jr. Full Stack Web Developer</h4>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default InitialPart