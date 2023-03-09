import { useRef } from "react";

type PropsType = {
  onSearch: (address: string) => any;
};

export default function Search({ onSearch }: PropsType) {
  const addressRef: any = useRef(null);

  const onKeyPressed = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      search();
    }
  };

  const search = () => {
    onSearch(addressRef.current.value);
  };

  return (
    <div className="flex items-center w-full sm:w-1/2">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-100 text-gray-900 rounded-lg block w-full pl-10 p-2.5 outline-none "
          placeholder="Please enter the Wallet address."
          ref={addressRef}
          onKeyUp={onKeyPressed}
          required
        />
      </div>
      <button
        type="button"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-gray-700 rounded-lg border border-white-700 hover:bg-gray-800"
        onClick={search}
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
      </button>
    </div>
  );
}
