import json from "../data/data.json"

function Project() {
  return (
    <>
      {/* linea */}
      <div className="container border-t-2 border-neutral-900 mx-auto max-w-screen-xl w-52 mt-5">
      </div>

      {/* titolo */}
      <div className="max-w-screen-xl container mx-auto p-6">
        <h2 className="mt-10 mb-6 text-5xl font-semibold text-black text-center">
          Progetti
        </h2>

        {/* card */}
        <div className="grid-cols-2 md:grid-cols-4 gap-3 grid">

          {
            json.map((json) =>
              <div key={json.id} className="block max-w-sm p-6 bg-dark border border-gray-200 rounded-lg shadow-sm bg-black hover:scale-110 duration-300">
                <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">{json.title}</h5>
              </div>)
          }


        </div>
      </div>
    </>
  )
}

export default Project