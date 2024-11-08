function Pagination() {
  return (
    <div className="flex justify-center items-center mt-[50px]">
      <button className="p-2">
        <svg className="h-6 w-6 fill-grey" viewBox="0 0 20 20">
          <path d="M10 18l-8-8 8-8 1.414 1.414L4.828 10l6.586 6.586L10 18z" />
        </svg>
      </button>
      <div className="flex mx-4 gap-2">
        <button className="text-grey font-semibold min-w-[40px] border border-grey rounded-md px-2 py-1 focus:outline-none">
          1
        </button>
        <button className="text-grey font-semibold min-w-[40px] border border-grey rounded-md px-2 py-1 focus:outline-none">
          2
        </button>
        <button className="text-grey font-semibold min-w-[40px] border border-grey rounded-md px-2 py-1 focus:outline-none">
          3
        </button>
      </div>
      <button className="p-2">
        <svg className="h-6 w-6 fill-grey" viewBox="0 0 20 20">
          <path d="M10 2l8 8-8 8-1.414-1.414L15.172 10l-6.586-6.586L10 2z" />
        </svg>
      </button>
      <span className="mx-4 text-grey">Page</span>
      <select className="border border-grey rounded-md px-2 py-1 focus:outline-none">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  );
}

export default Pagination;
