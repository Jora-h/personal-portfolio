import Image from "next/image";

export const ProjectCard = ({
  title,
  imageURL,
  description,
  link,
  disabled,
}: {
  title: string;
  imageURL: string;
  description: string;
  link?: string;
  disabled?: boolean;
}) => {
  return (
    <div className="block rounded-lg p-6 text-white bg-black dark:bg-white dark:text-gray-700 border-1 border border-gray-700 dark:border-gray-300">
      <Image
        alt="emoji 1"
        src={imageURL}
        width={600}
        height={600}
        className="w-full p-10"
      />
      <h5 className="mb-2 text-xl font-medium leading-tight">{title}</h5>
      <p className="mb-4 text-base">{description}</p>
      {link ? (
        <a
          href={link}
          aria-disabled={!!disabled}
          className="bg-black uppercase dark:bg-white hover:bg-gray-100 text-white dark:text-black dark:hover:text-white dark:hover:bg-black hover:text-black py-3 px-5 border border-gray-800 rounded shadow flex"
        >
          {disabled && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 mr-2 justify-center"
            >
              <path
                fillRule="evenodd"
                d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                clipRule="evenodd"
              />
            </svg>
          )}
          Github Repository
        </a>
      ) : (
        <p className="mt-4 py-4">No Link</p>
      )}
    </div>
  );
};
