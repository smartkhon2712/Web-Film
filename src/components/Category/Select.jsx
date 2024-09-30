function Select() {
  return (
    <div>
      <h2 className="text-white text-[20px] mb-[20px]">Loc phim</h2>
      <div className="flex flex-col gap-[10px]">
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Sap xep</option>
          <option>456</option>
          <option>789</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Dinh dang</option>
          <option>456</option>
          <option>789</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Tinh trang</option>
          <option>456</option>
          <option>789</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>Quoc gia</option>
          <option>456</option>
          <option>789</option>
        </select>
        <select className="block bg-dark text-white p-[5px] border border-grey rounded-[20px]">
          <option>The loai</option>
          <option>456</option>
          <option>789</option>
        </select>
      </div>
    </div>
  );
}

export default Select;
