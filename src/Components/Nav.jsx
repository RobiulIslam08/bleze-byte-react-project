import { useEffect } from "react";
import { useState } from "react";
import {  NavLink } from "react-router-dom";

const Nav = () => {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localThem = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localThem);
  }, [theme]);

  function hadleToggle(e) {
    console.log(e.target.checked);
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className="navbar bg-base-100 shadow-lg fixed z-10 px-6">
      <div className="flex-1">
        <a className=" text-2xl font-bold normal-case gap-0 text-secondary ">
          Byte<span className="text-primary">Blaze</span>
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-8 mr-4   px-1">
          <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-bold'}  to="/">
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold text-primary" : "font-bold"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>

          <NavLink className={({ isActive }) => isActive ? 'font-bold text-primary' : 'font-bold'} to="/bookmarks">
            Bookmark
          </NavLink>
        </ul>
        <label className="cursor-pointer grid place-items-center">
          <input
            onChange={hadleToggle}
            type="checkbox"
            value="synthwave"
            className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
          />
          <svg
            className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <svg
            className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </div>
    </div>
  );
};

export default Nav;
