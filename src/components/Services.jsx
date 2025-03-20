import CarouselServices from "./CarouselServices"
function Services() {
  return (
    <>
      <div className="container border-t-2 border-neutral-900 mx-auto max-w-screen-xl w-52 mt-5">
      </div>
      <div className="max-w-screen-xl container mx-auto p-6">
        <h2 className="mb-6 text-6xl text-neutral-500 dancing-script ">Services</h2>
      </div>

      <div className="text-white">
        <CarouselServices />
      </div>
    </>
  )
}

export default Services