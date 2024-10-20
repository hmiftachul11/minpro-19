import { useSelector } from "react-redux";

const Pagination = ({ page, pages, setPage }) => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }

  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const nextPage = () => {
    if (page < pages) {
      setPage(page + 1);
    }
  };

  return (
    <nav aria-label="pagination" className="mt-6 flex justify-center">
      <ul className="inline-flex items-center space-x-2">
        {/* Previous Button */}
        <li
          className={`${
            page === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
          } bg-blue-500 text-white px-4 py-2 rounded-md transition`}
          onClick={previousPage}
        >
          <p>Previous</p>
        </li>

        {/* Page Numbers */}
        {pageNumbers.map((number) => (
          <li key={number}>
            <p
              className={`${
                page === number
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700"
              } hover:bg-blue-600 hover:text-white px-4 py-2 rounded-md transition cursor-pointer ${
                isDarkMode && "bg-gray-800 text-black hover:bg-blue-600"
              }`}
              onClick={() => setPage(number)}
            >
              {number}
            </p>
          </li>
        ))}

        {/* Next Button */}
        <li
          className={`${
            page === pages
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-blue-600"
          } bg-blue-500 text-white px-4 py-2 rounded-md transition`}
          onClick={nextPage}
        >
          <p>Next</p>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
