import Wave from "../Components/Wave";

function LandingPage() {
  return (
    <div className="">
      <Wave />
      <div className="flex justify-between">
        <img
          src="assets/logo.png"
          alt=""
          className="w-[300px] h-[400px] object-cover m-32"
        />
        <div className="w-full h-screen shadow-lg bg-white relative z-20 p-10">
          <h1 className="font-bold text-2xl">Layanan Kami</h1>
          <div className="grid grid-cols-3 gap-10 mt-10">
            <div className="relative transition-all duration-500 cursor-pointer border rounded-lg shadow-md hover:shadow-lg h-56 overflow-hidden">
              <img
                src="https://rojaapp.com/wp-content/uploads/2022/04/unnamed__10_-1.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="bg-white w-full h-20 font-bold text-xs mt-3 absolute z-50 bottom-0 p-2 pt-3">
                <h1 className="capitalize">Sistem Inventory Management</h1>
                <a
                  href="/sistem-inventory"
                  className="flex justify-end mt-4 mr-2"
                >
                  <img
                    src="assets/right-arrow.png"
                    alt=""
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
            <div className="relative transition-all duration-500 cursor-pointer border rounded-lg shadow-md hover:shadow-lg h-56 overflow-hidden">
              <img
                src="https://play-lh.googleusercontent.com/byRzfKVkGztZybDVNP93GlyiPKpNVQ_MCzqD6OSz7qJxriCM0oUWbDyIbULAwuwwng=w526-h296-rw"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="bg-white w-full h-20 font-bold text-xs mt-3 absolute z-50 bottom-0 p-2 pt-3">
                <h1 className="capitalize">sistem informasi manufacturing</h1>
                <a
                  href="/sistem-manufacture"
                  className="flex justify-end mt-4 mr-2"
                >
                  <img
                    src="assets/right-arrow.png"
                    alt=""
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
            <div className="relative transition-all duration-500 cursor-pointer border rounded-lg shadow-md hover:shadow-lg h-56 overflow-hidden">
              <img
                src="https://xtremedroid.com/wp-content/uploads/2020/04/6.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="bg-white w-full h-20 font-bold text-xs mt-3 absolute z-50 bottom-0 p-2 pt-3">
                <h1 className="capitalize">Sistem Informasi Purchase</h1>
                <a
                  href="/sistem-purchase"
                  className="flex justify-end mt-4 mr-2"
                >
                  <img
                    src="assets/right-arrow.png"
                    alt=""
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
            <div className="relative transition-all duration-500 cursor-pointer border rounded-lg shadow-md hover:shadow-lg h-56 overflow-hidden">
              <img
                src="https://cdn.dribbble.com/userupload/9303166/file/original-a2ebdca6b3d0082c61ca7a3680b3c081.jpg?resize=400x0"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="bg-white w-full h-20 font-bold text-xs mt-3 absolute z-50 bottom-0 p-2 pt-3">
                <h1 className="capitalize">sistem informasi Modul Sales</h1>
                <a href="/sistem-sales" className="flex justify-end mt-4 mr-2">
                  <img
                    src="assets/right-arrow.png"
                    alt=""
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
            <div className="relative transition-all duration-500 cursor-pointer border rounded-lg shadow-md hover:shadow-lg h-56 overflow-hidden">
              <img
                src="https://mir-s3-cdn-cf.behance.net/projects/404/3f5f9b175166119.Y3JvcCwyNjg0LDIxMDAsNTksMA.jpg"
                alt=""
                className="w-full h-full object-cover"
              />
              <div className="bg-white w-full h-20 font-bold text-xs mt-3 absolute z-50 bottom-0 p-2 pt-3">
                <h1 className="capitalize">Sistem Informasi Layanan</h1>
                <a
                  href="/sistem-layanan"
                  className="flex justify-end mt-4 mr-2"
                >
                  <img
                    src="assets/right-arrow.png"
                    alt=""
                    className="w-5 h-5"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed z-50 bottom-5">
        <p className="text-center mx-56">
          Sistem manajemen inventori produk adalah alat atau perangkat lunak
          yang digunakan untuk mengelola dan mengawasi persediaan barang dalam
          suatu organisasi. Sistem ini membantu perusahaan dalam berbagai aspek{" "}
          <br />
          <br />
          <span className="font-normal text-xs text-gray-500">
            &copy; Copy Right Universitas Telkom Reserved
          </span>
        </p>
      </div>
    </div>
  );
}

export default LandingPage;
