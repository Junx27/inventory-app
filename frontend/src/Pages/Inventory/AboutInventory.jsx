import PrimaryText from "../../Components/PrimaryText";
import NavbarGuestInventory from "./NavbarGuestInventory";

function AboutInventory() {
  return (
    <div className="bg-[#F5F6FE] h-screen overflow-hidden">
      <NavbarGuestInventory />
      <div className="">
        <img src="assets/square.png" alt="" className="w-[500px]" />
        <h1 className="inset-0 absolute top-32 mt-10 z-50 font-bold text-center text-3xl">
          Sistem Informasi Manufacturing
        </h1>
      </div>
      <div className="absolute right-72 mr-10 top-64 bg-white w-[550px] p-10 rounded-xl shadow-lg">
        <div className="relative">
          <PrimaryText name={"Tentang Website"} />
          <p className="mt-5">
            Ini adalah situs web yang khusus dibuat untuk mendukung operasi
            internal kami, memungkinkan kolaborasi antara tim untuk memastikan
            bahwa proses produksi berjalan dengan baik dan lancar. Dengan
            integrasi sistem, setiap tim memiliki akses ke fitur dan fungsi yang
            dapat disesuaikan sesuai kebutuhan, yang memungkinkan berbagi
            informasi real-time dan integrasi kerja yang lebih mudah.
          </p>
          <img
            src="/assets/logo.png"
            alt=""
            className="absolute -top-[100px] -right-20 w-[150px] h-[150px] shadow-lg rounded-full p-10 bg-white"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <img
          src="assets/white-arrow.png"
          alt=""
          className="bg-[#B5BDFA] w-[300px] h-[300px] rounded-full relative -mt-[347px] -mr-10 p-20"
        />
      </div>
    </div>
  );
}

export default AboutInventory;
