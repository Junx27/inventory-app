import Wave2 from "../../Components/Wave2";
import NavbarGuestInventory from "./NavbarGuestInventory";

function HomeInventory() {
  return (
    <div className="h-screen overflow-hidden">
      <NavbarGuestInventory />
      <Wave2 />
      <div className="flex gap-32 items-center mx-32 mt-20">
        <div className="relative w-full ml-32">
          <h1 className="relative font-bold text-5xl">
            Telkom <br />
            University.
            <span className="w-5 h-5 bg-yellow-500 z-50">_</span>
          </h1>
          <p className="font-bold mt-10 text-xl">Profil Kami</p>
          <p className="text-md w-full mt-2 pb-12">
            <span className="font-bold text-blue-500">Telkom University</span>{" "}
            atau sering disingkat{" "}
            <span className="font-bold text-blue-500">Tel-U</span> adalah sebuah
            perguruan tinggi swasta yang didirikan oleh Yayasan Pendidikan
            Telkom, Tel-U juga merupakan salah satu Perguruan Tinggi Swasta
            Terbaik di Indonesia yang telah terakreditasi Unggul dari BAN-PT
            terdiri dari 7 Fakultas dan 82 Program Studi, Kampus kami berada di
            Bandu (Kampus Utama), Surabaya, Jakarta dan Purwokerto
          </p>
          <div className="flex justify-end items-center gap-5">
            <a
              href="/inventory-fitur-webiste"
              className="text-blue-500 text-md hover:text-blue-600"
            >
              Informasi lebih lanjut
            </a>
            <img src="assets/right-arrow.png" alt="" className="w-5 h-5" />
          </div>
        </div>
        <img src="/assets/logo.png" alt="" className="w-96 h-96 object-cover" />
      </div>
    </div>
  );
}

export default HomeInventory;
