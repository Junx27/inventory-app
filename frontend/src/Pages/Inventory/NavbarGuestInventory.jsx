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
    <div className="flex gap-64 py-5 px-10 items-center bg-[#F5F6FE] relative z-50">
      <div className="flex items-center gap-5">
        <img src="assets/logo.png" alt="" className="w-10 h-10" />
        <SecondaryText name={"Telkom University"} />
      </div>
      <div className="flex gap-20">
        {data.map((i) => (
          <NavLink
            key={i.nama}
            to={i.link}
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "text-[#8795FE]" : ""
            }
          >
            <NavbarText name={i.nama} />
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default NavbarGuestInventory;
