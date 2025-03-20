import CarouselServices from "./CarouselServices"
function Services() {
  return (
    <>
      <div className="container border-t-2 border-neutral-900 mx-auto max-w-screen-xl w-52 mt-5">
      </div>
      <div className="max-w-screen-xl container mx-auto p-6">
        <h2 className="mb-6 text-2xl font-semibold text-neutral-500 uppercase">Services</h2>
        <p className="text-white">
          Look at all the services I offer
        </p>
      </div>

      <div className="text-white">
        <CarouselServices />
      </div>
    </>
  )
}

export default Services