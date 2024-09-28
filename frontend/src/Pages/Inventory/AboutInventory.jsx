import PrimaryText from "../../Components/PrimaryText";
import Wave from "../../Components/Wave";
import NavbarGuestInventory from "./NavbarGuestInventory";

function AboutInventory() {
  return (
    <div className="">
      <NavbarGuestInventory />
      <Wave />
      <div className="flex gap-32 mt-20 mx-32">
        <h1 className="font-bold text-7xl w-full">
          Sistem <br />
          Informasi <br />
          Manufacturing.
          <span className="w-5 h-5 bg-yellow-500 z-50">_</span>
        </h1>
        <div>
          <PrimaryText name={"Tentang Kami."} />
          <p className="mt-5 w-full">
            Ini adalah situs web yang khusus dibuat untuk mendukung operasi
            internal kami, memungkinkan kolaborasi antara tim untuk memastikan
            bahwa proses produksi berjalan dengan baik dan lancar. Dengan
            integrasi sistem, setiap tim memiliki akses ke fitur dan fungsi yang
            dapat disesuaikan sesuai kebutuhan, yang memungkinkan berbagi
            informasi real-time dan integrasi kerja yang lebih mudah.
          </p>
          <div className="flex justify-end mt-20">
            <img
              src="/assets/logo.png"
              alt=""
              className="w-56 h-56 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutInventory;
