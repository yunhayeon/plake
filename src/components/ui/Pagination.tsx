import clsx from "clsx";

interface IPaginationProps {
  totalPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const MAX_PAGE_COUNT = 5;

const Pagination = ({
  totalPage,
  currentPage,
  onPageChange,
}: IPaginationProps) => {
  const startPage = Math.max(1, currentPage - Math.floor(MAX_PAGE_COUNT / 2));
  const endPage = Math.min(totalPage, startPage + MAX_PAGE_COUNT - 1);

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  if (totalPage === 0) return null;

  return (
    <section className="flex w-full items-center justify-center gap-2">
      {startPage > 1 && (
        <div className="flex items-center gap-2">
          <button onClick={() => onPageChange(startPage - 1)}>{"<"}</button>
          <span>{"..."}</span>
        </div>
      )}
      {pageNumbers.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={clsx(
            "rounded-md px-3 py-1",
            page === currentPage ? "bg-gray-200" : "hover:bg-gray-100",
          )}
        >
          {page}
        </button>
      ))}
      {endPage < totalPage && (
        <div className="flex items-center gap-2">
          <span>{"..."}</span>
          <button onClick={() => onPageChange(endPage + 1)}>{">"}</button>
        </div>
      )}
    </section>
  );
};

export default Pagination;
