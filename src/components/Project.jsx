import json from "../data/data.json"
import { useState } from "react"

function Project() {
  const [open, setOpen] = useState(false)
  const [id, setId] = useState(null)


  const HandlerOpen = (id) => {
    setOpen(true)
    setId(id)
  }

  const HandlerClose = () => {
    setOpen(false)
  }


  const selectedProject = json.find(project => project.id === id)

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
              <div key={json.id} className="block max-w-sm p-6 bg-dark border border-gray-200 rounded-lg shadow-sm bg-black hover:scale-110 duration-300" onClick={() => HandlerOpen(json.id)}>
                <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">{json.title}</h5>
              </div>
            )
          }
        </div>

        {/* popup card */}
        {open && selectedProject &&

          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-lg">

              <button onClick={HandlerClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="px-6 py-4">

                <img className="w-full" src={selectedProject.image} alt="Sunset in the mountains"></img>
                <div className="font-bold text-xl mb-2">{selectedProject.title}</div>
                <p className="text-gray-700 text-base">
                  {selectedProject.description}
                </p>

                <p className="text-gray-700 text-base mt-3">
                  <span className="font-bold">Tecnologie utilizzate: </span>{selectedProject.technologies}
                </p>

                <div className="text-center mt-5">
                  <button type="button" class="text-gray-700 hover:text-gray-700 border border-gray-800 hover:bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    <a className="text-base font-bold" href={selectedProject.url} target="_blank">
                      Clicca qui per GitHub
                    </a>
                  </button>
                </div>

              </div>
            </div>
          </div>
        }
      </div>
    </>
  )
}

export default Project