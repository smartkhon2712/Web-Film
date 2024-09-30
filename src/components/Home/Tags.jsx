function Tags() {
  return (
    <>
      <h2 className="text-white text-[20px] mb-[20px]">Top tim kiem</h2>
      <div className="flex flex-wrap gap-[15px]">
        {[...Array(20)].map((item, index) => {
          return (
            <div
              className="px-[10px] py-[5px] text-grey bg-silver rounded-[12px] hover:bg-blue hover:text-white cursor-pointer"
              key={index}
            >
              Drama
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tags;
