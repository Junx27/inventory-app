import NavbarGuestInventory from "./NavbarGuestInventory";

function FeatureInventory() {
  const dataTim = [
    {
      id: 1,
      nama: "Pengelolaan Stok",
      link: "/inventory/pengelola-stok/dashboard",
    },
    {
      id: 2,
      nama: "Pembelian",
      link: "/",
    },
    {
      id: 3,
      nama: "Penjualan",
      link: "/",
    },
    {
      id: 4,
      nama: "Keuangan",
      link: "/",
    },
    {
      id: 5,
      nama: "Pengiriman",
      link: "/",
    },
  ];
  return (
    <div className="overflow-x-hidden">
      <NavbarGuestInventory />
      <p className="font-bold mt-32 text-6xl text-center">Fitur Kami</p>
      <p className="font-bold mt-2 text-5xl text-center">
        Manajemen Inventory{" "}
        <span className="w-5 h-5 bg-yellow-500 z-50">_</span>
      </p>
      <div className="grid grid-cols-4 gap-10 mx-20 mt-20">
        <div className="relative transition-all duration-500 cursor-pointer border rounded-2xl shadow-md hover:shadow-lg h-72 overflow-hidden bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3429/3429139.png"
            alt=""
            className="w-20 h-20 mx-auto mt-5"
          />
          <div className="p-5">
            <h1 className="font-bold capitalize">Pengelolaan Data Produksi </h1>
            <p className="mt-5 text-xs">
              Tim Produksi dapat membuat rencana produksi dan juga dapat
              merencanakan bahan baku, memantau proses produksi.{" "}
            </p>
          </div>
        </div>
        <div className="relative transition-all duration-500 cursor-pointer border rounded-2xl shadow-md hover:shadow-lg h-72 overflow-hidden bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3429/3429139.png"
            alt=""
            className="w-20 h-20 mx-auto mt-5"
          />
          <div className="p-5">
            <h1 className="font-bold capitalize">Pengelolaan Stok Barang </h1>
            <p className="mt-5 text-xs">
              Tim pengelolaan stok bertanggung jawab untuk memastikan persediaan
              barang selalu tersedia dan dikelola dengan baik.
            </p>
          </div>
        </div>
        <div className="relative transition-all duration-500 cursor-pointer border rounded-2xl shadow-md hover:shadow-lg h-72 overflow-hidden bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3429/3429139.png"
            alt=""
            className="w-20 h-20 mx-auto mt-5"
          />
          <div className="p-5">
            <h1 className="font-bold capitalize">Efektivitas Penjualan</h1>
            <p className="mt-5 text-xs">
              Tim penjualan bertanggung jawab untuk mengelola seluruh aktivitas
              terkait penjualan produk dari pemesanan hingga pengiriman ke
              pelanggan.
            </p>
          </div>
        </div>
        <div className="relative transition-all duration-500 cursor-pointer border rounded-2xl shadow-md hover:shadow-lg h-72 overflow-hidden bg-white">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3429/3429139.png"
            alt=""
            className="w-20 h-20 mx-auto mt-5"
          />
          <div className="p-5">
            <h1 className="font-bold capitalize">Pengawasan Pengiriman</h1>
            <p className="mt-5 text-xs">
              Tim pengiriman bertanggung jawab untuk memastikan barang yang
              keluar dari gudang sampai tepat waktu ke pelangganatau lokasi
              distribusi lainnya.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-full h-[1000px] -mt-32 px-32">
        <h1 className="font-bold text-white pt-56 text-7xl">
          Menu Dashboard <br />
          yang interaktif
        </h1>
        <div className="bg-white w-screen shadow-lg rounded-3xl mt-20 pt-20 pl-10 pr-64 ml-32 pb-32">
          <p className="font-bold text-4xl text-end mr-32 mb-5">
            Satu kesatuan dengan <br /> yang lainnya{" "}
            <span className="w-5 h-5 bg-yellow-500 z-50">_</span>
          </p>
          <div className="grid grid-cols-3 gap-12 pt-10 mx-10">
            <div className="bg-blue-500 shadow-lg shadow-blue-500/50 rounded-2xl p-10 py-20">
              <h1 className="font-bold text-3xl h-32 text-white">
                Menu <br />
                Integritas <br />
                Web Inventory
              </h1>
            </div>
            {dataTim.map((i) => (
              <div
                key={i.id}
                className="transition-all duration-700 w-full p-10 rounded-2xl shadow-lg hover:shadow-xl"
              >
                <h1 className="font-bold text-3xl h-32 border-b pb-5">
                  Tim <br />
                  {i.nama}
                </h1>
                <div className="flex justify-center mt-5">
                  <a
                    href={i.link}
                    className="bg-blue-500 p-2 px-10 text-xl rounded-full text-white shadow-md hover:shadow-lg hover:bg-blue-600"
                  >
                    Login
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-20">
            <p className="">
              Jika belum mempunyai akun silahkan melakukan pendaftaran terlebih
              dahulu pada menu dibawah ini{" "}
              <span className="font-bold text-blue-500">
                <a href="#register">disini.</a>
              </span>
            </p>
          </div>
        </div>
        <h1 className="font-bold text-end pt-20 text-7xl">
          Mudah digunakan
          <br />
          dan informatif
        </h1>
        <div className="flex justify-between items-center">
          <div>
            <p className="font-bold mt-0 text-5xl text-start pt-32">
              Mendaftar <br />
              Sistem Manjemen <br />
              Inventory <span className="w-5 h-5 bg-yellow-500 z-50">_</span>
            </p>
            <div className="pb-64 mt-20">
              <a
                href="/register-inventory"
                id="register"
                className="border border-blue-500 p-5 px-20 hover:bg-blue-500 hover:text-white rounded-full text-3xl uppercase font-bold shadow-lg shadow-blue-500/50"
              >
                Sign Up Now
              </a>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src="/assets/logo.png"
              alt=""
              className="w-96 h-96 object-cover "
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureInventory;
