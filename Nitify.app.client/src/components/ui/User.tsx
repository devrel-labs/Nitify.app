import { ChevronUp } from "lucide-react";

export const User = ({username, id} : {username?: string, id?: string}) => {
  return (
    <div className="flex flex-row sm:flex-wrap items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-gray-700/20 dark:hover:bg-gray-700/50 px-2 py-2 cursor-pointer rounded-xl mr-3 fixed bottom-4 w-max">
      <img
        src="https://fastly.picsum.photos/id/194/536/354.jpg?hmac=CO31DENK8jYfIY_poSjETaFl8haeeNTqQbC9Afw_0xo"
        className="h-10 w-10 rounded-full mr-2"
        alt=""
      />
      <div className="flex flex-col text-sm">
        <span className="text-md text-gray-900 dark:text-white">
          {username || Math.floor(Math.random()*10000000000000)}
          <ChevronUp className="inline-block ml-1" />
        </span>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex flex-wrap">
           {"" + id}
        </span>
      </div>
    </div>
  );
};
