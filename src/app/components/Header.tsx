"use client";

import Link from "next/link";
import { DarkModeToggle } from "./DarkModeToggle";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="max-w-6xl mx-auto px-4 py-10 md:py-20">
      <div className="flex md:flex-row justify-between items-end">
        <div className="flex flex-col">
          <Link href="/">
            <h1 className="font-semibold text-xl dark:text-gray-100">
              Hajar Hamza
            </h1>
            <p className="text-base font-light text-gray-500 dark:text-gray-300">
              Software Developer, Mother, and Wife
            </p>
          </Link>
        </div>

        <nav>
          <ul className="list-none flex space-x-8 hidden md:flex">
            <li>
              <Link
                href="#whoami"
                // className={`link ${pathname === "/" ? "active" : ""}`}
                className={`text-base  ${
                  pathname === "/about"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
              >
                Who Am I
                {pathname === "/about" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                className={`text-base  ${
                  pathname === "/projects"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
              >
                Experience
                {pathname === "/experience" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className={`text-base  ${
                  pathname === "/experience"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
              >
                Projects
                {pathname === "/projects" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="#latestcode"
                className={`text-base  ${
                  pathname === "/contact"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
              >
                Latest Code
                {pathname === "/latest-code" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </Link>
            </li>
            <li>
              <Link
                href="#reachout"
                className={`text-base  ${
                  pathname === "/contact"
                    ? "text-gray-800 font-bold dark:text-gray-400"
                    : "text-gray-600 dark:text-gray-300 font-normal "
                }`}
              >
                Get in Touch!
                {pathname === "/reachout" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-arrow-down inline-block h-3 w-3"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                    />
                  </svg>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        <DarkModeToggle />
      </div>
    </header>
  );
};
