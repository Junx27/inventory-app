import { useState } from "react";
import Wave from "../Components/Wave";

function Login() {
  const [nama, setNama] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/inventory/pengelola-stok/dashboard";
  };
  return (
    <div className="">
      <Wave />
      <div className="flex justify-between">
        <img
          src="assets/logo.png"
          alt=""
          className="w-[300px] h-[400px] object-cover mx-auto mt-32"
        />
        <div className="w-[700px] h-screen shadow-lg bg-white relative z-20 px-20 p-10 pt-32">
          <h1 className="font-bold text-2xl text-center mt-5">
            Login tim pengelolaan Stok
          </h1>

          <form
            action=""
            className="mt-12 flex flex-col gap-8"
            onSubmit={handleSubmit}
          >
            <div className="relative">
              <label
                htmlFor=""
                className={`absolute text-xs left-5 bg-white rounded-full px-2 -top-2 ${
                  nama !== null ? "text-black" : "text-blue-500"
                }`}
              >
                Masukan email
              </label>
              <input
                type="text"
                className="border border-blue-500 p-3 w-full rounded-2xl px-4"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div className="relative">
              <label
                htmlFor=""
                className={`absolute text-xs left-5 bg-white rounded-full px-2 -top-2 ${
                  nama !== null ? "text-black" : "text-blue-500"
                }`}
              >
                Masukan password
              </label>
              <input
                type="text"
                className="border border-blue-500 p-3 w-full rounded-2xl px-4"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
            </div>

            <div className="">
              <a href="/register-inventory" className="text-xs text-blue-500">
                Apakah belum punya akun, lakukan pendaftaran disini?
              </a>
            </div>
            <div className="">
              <button
                type="submit"
                className="bg-blue-500 uppercase p-2 w-full px-10 text-xl rounded-full text-white shadow-md hover:shadow-lg hover:bg-blue-600"
              >
                login
              </button>
            </div>
          </form>
          <div className="mt-32">
            <p className=" text-center font-normal text-xs text-gray-500">
              &copy; Copy Right Universitas Telkom Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
