function Keyword() {
  return (
    <div className="pb-[50px]">
      <h2 className="text-white text-[20px] mb-[20px]">Tu khoa noi bat</h2>
      <div className="flex flex-wrap gap-[15px]">
        {[...Array(20)].map((item, index) => {
          return (
            <div
              className="px-[10px] py-[5px] text-grey bg-silver rounded-[12px] hover:bg-blue hover:text-white cursor-pointer"
              key={index}
            >
              Comedy
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Keyword;
