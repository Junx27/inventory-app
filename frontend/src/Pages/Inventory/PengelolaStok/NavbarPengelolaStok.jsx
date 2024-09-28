import { useState } from "react";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function NavbarPengelolaStok({ children }) {
  const [open, setOpen] = useState(true);
  const data = [
    {
      id: 1,
      nama: "Dashboard",
      link: "/inventory/pengelola-stok/dashboard",
      gambar: "/assets/dashboard.png",
    },
    {
      id: 2,
      nama: "Barang Masuk",
      link: "/inventory/pengelola-stok/stok-masuk",
      gambar: "/assets/cart-in.png",
    },
    {
      id: 3,
      nama: "Barang Keluar",
      link: "/inventory/pengelola-stok/stok-keluar",
      gambar: "/assets/cart-out.png",
    },
    {
      id: 4,
      nama: "Stok Minimum",
      link: "/inventory/pengelola-stok/stok-minimum",
      gambar: "/assets/stock.png",
    },
    {
      id: 5,
      nama: "Barang Rusak",
      link: "/inventory/pengelola-stok/stok-rusak",
      gambar: "/assets/bad-stock.png",
    },
    {
      id: 6,
      nama: "Warehouse",
      link: "/inventory/pengelola-stok/warehouse",
      gambar: "/assets/warehouse.png",
    },
    {
      id: 7,
      nama: "Laporan Stok",
      link: "/inventory/pengelola-stok/laporan-stok",
      gambar: "/assets/list.png",
    },
    {
      id: 7,
      nama: "Logout",
      link: "/",
      gambar: "/assets/logout.png",
    },
  ];
  return (
    <div className="">
      <div className="fixed top-0 bg-white border-b w-full py-2 left-0 px-7 z-50">
        <div className="flex gap-10 justify-between items-center">
          <div className="flex gap-3 items-center">
            <img
              src="/assets/logo.png"
              alt=""
              className="w-12 h-12 object-cover"
            />
            <h1 className="font-bold text-md">Telkom University</h1>
          </div>
          <div className="flex gap-5 text-[8px]">
            <div className="flex flex-col items-center gap-2">
              <h1>All inventory price:</h1>
              <p className="text-green-500">Rp.170.000.000,00</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1>All inventory stock:</h1>
              <p className="text-purple-500">488799</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1>Inventory In:</h1>
              <p className="text-blue-500">488799</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <h1>Inventory Out:</h1>
              <p className="text-red-500">488799</p>
            </div>
          </div>
          <div className="flex gap-10 text-[8px]">
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/search.png" alt="" className="w-4 h-4" />
              <h1>Cari</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/check.png" alt="" className="w-4 h-4" />
              <h1>Status</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/stock.png" alt="" className="w-4 h-4" />
              <h1>Stok</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/printer.png" alt="" className="w-4 h-4" />
              <h1>Cetak</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/settings.png" alt="" className="w-4 h-4" />
              <h1>Pengaturan</h1>
            </div>
            <div className="flex flex-col items-center gap-1">
              <img src="/assets/alert.png" alt="" className="w-4 h-4" />
              <h1>Notifikasi</h1>
            </div>
          </div>

          <div className="flex gap-5 items-center text-xs">
            <h1 className="text-sm font-bold">Ardiansyah</h1>
            <img
              src="https://web.rupa.ai/wp-content/uploads/2023/06/GVS_A_simple_background_for_a_LinkedIn_profile_picture_perhaps__75435bbf-9b8f-4815-8e9e-d5194e92061d.png"
              alt=""
              className="w-8 h-8 rounded-full"
            />
          </div>
        </div>
      </div>
      <div
        className={`transition-all duration-700 fixed z-40 bg-white border-r h-screen pt-20 ${
          open ? " w-[100px]" : " w-[250px]"
        }`}
      >
        <div className={`flex justify-end  ${!open ? "pr-2" : " pr-[43px]"}`}>
          <div
            className={`flex flex-col cursor-pointer space-y-1`}
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-1 w-5 rounded-full bg-black transition-transform duration-300 ${
                !open ? "rotate-45 translate-y-2" : "rotate-0"
              }`}
            ></span>
            <span
              className={`h-1 w-5 rounded-full bg-black transition-transform duration-300 ${
                !open ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-1 w-5 rounded-full bg-black transition-transform duration-300 ${
                !open ? "-rotate-45 -translate-y-2" : "rotate-0"
              }`}
            ></span>
          </div>
        </div>
        <div className="flex flex-col mt-3 text-[10px]">
          {data.map((i) => (
            <NavLink
              key={i.nama}
              to={i.link}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "flex item-center gap-8 border-r-8 border-blue-500 p-3 pl-12 text-blue-500 bg-blue-50"
                  : "flex item-center gap-8 p-3 hover:bg-blue-50 pl-12"
              }
            >
              <img
                src={i.gambar}
                alt=""
                className={`transition-all duration-1000 w-5 h-5 ${
                  open ? "-ml-3" : "ml-0"
                }`}
              />
              <p className={`truncate ${open ? "hidden" : "block"}`}>
                {i.nama}
              </p>
            </NavLink>
          ))}
        </div>
      </div>
      <div
        className={`transition-all duration-700 pt-[60px] ${
          open ? "ml-[95px]" : "ml-[245px]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default NavbarPengelolaStok;
