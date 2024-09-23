import NavbarGuestInventory from "./NavbarGuestInventory";

function HomeInventory() {
  return (
    <div className="h-screen overflow-hidden">
      <NavbarGuestInventory />
      <div className="bg-[#1230AE] w-full h-screen -rotate-45 fixed -right-96 top-56"></div>
      <div className="fixed right-96 top-32">
        <img
          src="/assets/logo.png"
          alt=""
          className="w-56 h-56 shadow-lg rounded-full p-10 bg-white"
        />
      </div>
      <div className="relative p-10 mt-32 ml-96 w-[450px] h-[450px] rounded-full bg-[#F5F6FE] shadow-lg">
        <p className="text-md w-64 absolute top-[90px] left-[100px]">
          <span className="font-bold">Telkom University</span> atau sering
          disingkat <span className="font-bold">Tel-U</span> adalah sebuah
          perguruan tinggi swasta yang didirikan oleh Yayasan Pendidikan Telkom,
          Tel-U juga merupakan salah satu Perguruan Tinggi Swasta Terbaik di
          Indonesia yang telah terakreditasi Unggul dari BAN-PT terdiri dari 7
          Fakultas dan 82 Program Studi, Kampus kami berada di Bandu (Kampus
          Utama), Surabaya, Jakarta dan Purwokerto
        </p>
      </div>
      <div className="flex justify-end">
        <img
          src="assets/white-arrow.png"
          alt=""
          className="bg-[#B5BDFA] w-[300px] h-[300px] rounded-full relative -mt-32 -mr-10 p-20"
        />
      </div>
    </div>
  );
}

export default HomeInventory;
