function HotSearch() {
  return (
    <div className="bg-dark p-[20px] my-[20px]">
      <h2 className="text-white text-[20px] mb-[20px]">Top tim kiem</h2>
      <div className="flex flex-wrap gap-[10px]">
        {[...Array(30)].map((item, index) => {
          return (
            <div
              className="px-[10px] text-grey bg-silver rounded-[8px] hover:bg-blue hover:text-white cursor-pointer"
              key={index}
            >
              Action
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HotSearch;
