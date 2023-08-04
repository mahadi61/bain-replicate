import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar fixed z-10 bg-base-100 shadow-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <Link to="/" className=" ">
            <img
              src="https://mobirise.com/extensions/partneramp/corporateconsulting/assets/images/corporate-logo1.png"
              alt=""
              className="w-40"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            <li>
              <Link>Home</Link>
            </li>
            <li tabIndex={0}>
              <details>
                <summary>Industries</summary>
                <ul className="p-2">
                  <li>
                    <Link>Real Estate</Link>
                  </li>
                  <li>
                    <Link>Metals</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Digital</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-outline hover:bg-[#05afec] hover:border-none">
            Order Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
