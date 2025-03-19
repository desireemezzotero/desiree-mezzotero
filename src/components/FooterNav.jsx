import { Link } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.css';


function FooterNav() {
  return (
    <>
      <div className="mx-auto w-full max-w-screen-xl text-white text-center text-2xl border-t-2 border-neutral-900 p-4">
        <ul className="flex items-center justify-center">
          <li>
            <Link to="https://www.linkedin.com/in/desiree-mezzotero-a836a9351/">
              <i className="fa-brands fa-linkedin mr-5"></i>
            </Link>
          </li>
          <li>
            <Link to="https://gist.github.com/desireemezzotero">
              <i className="fa-brands fa-github mr-5"></i>
            </Link>
          </li>
          <li>
            <Link to="mailto:desireemezzotero1@gmail.com">
              <i className="fa-solid fa-envelope mr-5"></i>
            </Link>
          </li>
          <li>
            <Link to="tel:+393931443365">
              <i className="fa-solid fa-phone mr-5"></i>
            </Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default FooterNav