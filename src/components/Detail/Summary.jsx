function Summary({ data }) {
  const { overview } = data || {};
  return (
    <div>
      <div className="bg-silver text-white mt-[60px]">
        <p>- Hiện tại JavHD hoạt động với tên miền JavHDz.win</p>
        <p>
          - Hãy xem hướng dẫn truy cập JavHD để thay đổi DNS nếu bạn không thể
          vào được JavHDz.win | JavHD.pro
        </p>
      </div>
      <div className="text-white mt-[30px]">{overview}</div>
    </div>
  );
}

export default Summary;
