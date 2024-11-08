function Select() {
  return (
    <div>
      <h2 className="text-white text-[20px] mb-[20px]">Lọc Phim</h2>
      <div className="flex flex-col gap-[10px]">
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Sắp xếp</option>
          <option>Mới Nhất</option>
          <option>Cũ Nhất</option>
          <option>Xem Nhiều Nhất</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Định dạng</option>
          <option>456</option>
          <option>789</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Tình Trạng</option>
          <option>456</option>
          <option>789</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Quốc Gia</option>
          <option>456</option>
          <option>789</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Thể Loại</option>
          <option>456</option>
          <option>789</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
