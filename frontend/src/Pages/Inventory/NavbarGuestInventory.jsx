import { NavLink } from "react-router-dom";
import SecondaryText from "../../Components/SecondaryText";
import NavbarText from "../../Components/NavbarText";

function NavbarGuestInventory() {
  const data = [
    { nama: "Tentang Kami", link: "/sistem-inventory" },
    { nama: "Tentang Website ini", link: "/inventory-tentang-website" },
    { nama: "Fitur Website", link: "/inventory-fitur-webiste" },
  ];
  return (
    <div className="sticky top-0 z-50">
      <div className="flex gap-64 py-5 px-20 items-center bg-white relative z-50">
        <div className="flex items-center gap-5">
          <img src="assets/logo.png" alt="" className="w-20 h-20" />
          <SecondaryText name={"Telkom University"} />
        </div>
        <div className="flex gap-5">
          {data.map((i) => (
            <NavLink
              key={i.nama}
              to={i.link}
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "transition-all duration-500 bg-blue-500 p-4 rounded-full w-56 text-center text-white shadow-lg shadow-blue-500/50 hover:bg-blue-600"
                  : "transition-all duration-500 p-4 w-56 text-center hover:text-blue-500"
              }
            >
              <NavbarText name={i.nama} />
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavbarGuestInventory;
