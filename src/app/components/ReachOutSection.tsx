export const ReachOutSection = () => (
  <section className="rounded-xl w-full max-w-6xl mx-auto px-4 py-10 md:pt-20 mb-10 bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
    <div className="max-w-6xl mx-auto h-24 text-gray-200 dark:text-gray-800">
      <h2
        id="reachout"
        className="text-5xl md:text-8xl font-bold text-left -mt-20 md:-mt-40"
      >
        Get in Touch!
      </h2>
    </div>
    <form action="#" className="space-y-8 max-w-2xl mx-auto pt-10">
      <p className="mb-8 lg:mb-8 font-light text-center text-gray-500 dark:text-gray-400">
        Have questions or want to discuss a potential project? Feel free to
        contact me through this form or via social media. I&apos;m excited to
        connect with you!
      </p>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="name@example.com"
          required
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block mb-2 font-medium text-gray-900 dark:text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          id="subject"
          className="block p-3 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Let us know how we can help you"
          required
        />
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block mb-2 font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows={6}
          className="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="py-3 px-5  font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
      >
        Send message
      </button>
    </form>
  </section>
);
