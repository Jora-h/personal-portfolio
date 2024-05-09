"use client";

import { useState } from "react";

export const ExperienceSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="rounded-xl w-full max-w-6xl mx-auto px-4 py-10 md:pt-20 mb-10 bg-black dark:bg-white text-white dark:text-black">
      <div className="max-w-6xl mx-auto h-24 text-black dark:text-white">
        <h2
          id="experience"
          className="text-5xl md:text-8xl font-bold text-left -mt-20 md:-mt-40"
        >
          Experience
        </h2>
      </div>
      <div>
        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            1 Aug, 2023
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-white dark:text-gray-800">
              <svg
                className="flex-shrink-0 size-4 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" x2="8" y1="13" y2="13"></line>
                <line x1="16" x2="8" y1="17" y2="17"></line>
                <line x1="10" x2="8" y1="9" y2="9"></line>
              </svg>
              Created &ldquo;Preline in React&ldquo; task
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Find more detailed insctructions here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <img
                className="flex-shrink-0 size-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              James Collins
            </button>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-white dark:text-gray-800">
              Release v5.2.0 quick bug fix 🐞
            </h3>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <span className="flex flex-shrink-0 justify-center items-center size-4 bg-white border border-gray-200 text-[10px] font-semibold uppercase text-gray-600 rounded-full dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400">
                A
              </span>
              Alex Gregarov
            </button>
          </div>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-white dark:text-gray-800">
              Marked &ldquo;Install Charts&ldquo; completed
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Finally! You can check it out here.
            </p>
            <button
              type="button"
              className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700"
            >
              <img
                className="flex-shrink-0 size-4 rounded-full"
                src="https://images.unsplash.com/photo-1659482633369-9fe69af50bfb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              James Collins
            </button>
          </div>
        </div>

        <div className="ps-2 my-2 first:mt-0">
          <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
            31 Jul, 2023
          </h3>
        </div>

        <div className="flex gap-x-3">
          <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
            <div className="relative z-10 size-7 flex justify-center items-center">
              <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
            </div>
          </div>

          <div className="grow pt-0.5 pb-8">
            <h3 className="flex gap-x-1.5 font-semibold text-white dark:text-gray-800">
              Take a break ⛳️
            </h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Just chill for now... 😉
            </p>
          </div>
        </div>

        {showMore && (
          <div
            id="hs-timeline-collapse"
            className="hs-collapse w-full transition-[height] duration-300"
            aria-labelledby="hs-timeline-collapse-content"
          >
            <div className="ps-2 my-2">
              <h3 className="text-xs font-medium uppercase text-gray-500 dark:text-neutral-400">
                30 Jul, 2023
              </h3>
            </div>

            <div className="flex gap-x-3">
              <div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-7 flex justify-center items-center">
                  <div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600"></div>
                </div>
              </div>

              <div className="grow pt-0.5 pb-8">
                <h3 className="flex gap-x-1.5 font-semibold text-white dark:text-gray-800">
                  Final touch ups
                </h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                  Double check everything and make sure we&apos;re ready to go.
                </p>
              </div>
            </div>
          </div>
        )}

        {!showMore && (
          <div className="ps-[7px] flex gap-x-3">
            <button
              type="button"
              className="hs-collapse-toggle hs-collapse-open:hidden text-start inline-flex items-center gap-x-1 text-sm text-blue-600 font-medium decoration-2 hover:underline dark:text-blue-500"
              id="hs-timeline-collapse-content"
              onClick={() => setShowMore(true)}
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
              Show older
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
