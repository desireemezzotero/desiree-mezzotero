import json from "../data/data.json"
import { useState } from "react"

function Project() {
  const [open, setOpen] = useState(false)

  const HandlerOpen = () => {
    setOpen(true)
  }

  const HandlerClose = () => {
    setOpen(false)
  }

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
        <div className="grid-cols-2 md:grid-cols-4 gap-3 grid" onClick={HandlerOpen}>
          {
            json.map((json) =>
              <div key={json.id} className="block max-w-sm p-6 bg-dark border border-gray-200 rounded-lg shadow-sm bg-black hover:scale-110 duration-300">
                <h5 className="mb-2 tracking-tight text-gray-900 dark:text-white">{json.title}</h5>
              </div>)
          }
        </div>

        {/* popup card */}

        {open &&
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-8 w-full max-w-md relative shadow-lg">
              <button onClick={HandlerClose}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-2xl font-bold mb-4">Dettagli</h2>
              <p className="text-gray-700">Questo è il contenuto del popup con i dettagli della card.</p>
            </div>
          </div>

        }
      </div >
    </>
  )
}

export default Project