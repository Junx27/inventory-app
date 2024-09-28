import { useState } from "react";
import Pagination from "../../../../Components/Pagination";
import { dataStok } from "../../../../Data/data";
function TabelLaporan() {
  const data = dataStok;

  const ITEMS_PER_PAGE = 10;

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIds, setSelectedIds] = useState([]);

  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCheckboxChange = (e, id) => {
    if (e.target.checked) {
      setSelectedIds([...selectedIds, id]);
    } else {
      setSelectedIds(selectedIds.filter((selectedId) => selectedId !== id));
    }
  };

  const getCurrentPageData = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    let filteredData = data;

    return filteredData.slice(startIndex, endIndex);
  };

  const isSelected = (id) => {
    return selectedIds.includes(id);
  };
  return (
    <div>
      <div>
        <div className="relative">
          {selectedIds.length > 0 && (
            <div className="fixed bottom-12 right-10 z-50 cursor-pointer">
              <img src="/assets/remove.png" alt="" className="w-10 h-10" />
            </div>
          )}
          {selectedIds.length == 1 && (
            <div className="fixed bottom-32 right-10 z-50 cursor-pointer">
              <img src="/assets/edit-button.png" alt="" className="w-10 h-10" />
            </div>
          )}
          <div className="fixed top-20 right-10 z-50 cursor-pointer">
            <img src="/assets/detail.png" alt="" className="w-10 h-10" />
          </div>
          <table className="relative table-auto w-full p-5 bg-white">
            <thead className="text-sm">
              <tr className="border">
                <th colSpan={"2"} className="border px-3 py-5">
                  <div className="grid grid-cols-5 gap-5 mt-5 mx-12">
                    <p className="text-center">Nama Barang</p>
                    <p className="text-end">Stok Awal</p>
                    <p className="text-end">Stok Masuk</p>
                    <p className="text-end">Stok Keluar</p>
                    <p className="text-center">Stok Akhir</p>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="relative text-sm">
              {getCurrentPageData().map((item, index) => (
                <tr key={index} className="hover:bg-blue-50 cursor-pointer">
                  <td className="px-3 py-2 w-10">
                    <input
                      type="checkbox"
                      id={`select-${item.id}`}
                      className="rounded outline-0"
                      checked={isSelected(item.id)}
                      onChange={(e) => handleCheckboxChange(e, item.id)}
                    />
                  </td>
                  <td className="border px-3 py-4">
                    <div className="grid grid-cols-5 gap-5">
                      <div className="w-full">
                        <h1 className="font-bold capitalize">
                          {item.nama_barang}
                          <span
                            className={`relative ml-3 rounded-full text-center p-1 text-[10px] font-normal pl-5 pr-3 ${
                              item.status_barang === "diterima"
                                ? "bg-blue-500/20 text-blue-600"
                                : item.status_barang === "ditolak"
                                ? "bg-red-500/20 text-red-600"
                                : "bg-green-500/20 text-green-600"
                            }`}
                          >
                            {(
                              ((item.stok_awal -
                                (item.stok_awal +
                                  item.stok_masuk -
                                  item.stok_keluar)) /
                                item.stok_awal) *
                              100
                            ).toFixed(1)}{" "}
                            %
                            <span
                              className={`inset-0 absolute w-2 h-2 top-[6px] left-1 rounded-full animate-pulse ${
                                item.status_barang === "diterima"
                                  ? "bg-blue-500"
                                  : item.status_barang === "ditolak"
                                  ? "bg-red-500"
                                  : "bg-green-500"
                              }`}
                            ></span>
                          </span>
                        </h1>
                        <p className="mt-2 text-xs text-gray-500">
                          <span className="font-bold text-black mr-2">
                            SKU:
                          </span>
                          {item.nama_sku}
                        </p>
                      </div>
                      <div className="w-full text-end text-xs font-bold">
                        <p>{item.stok_awal}</p>
                      </div>
                      <div className="w-full text-xs text-end text-green-500">
                        <p>+{item.stok_masuk}</p>
                      </div>
                      <div className="w-full text-xs text-end text-red-500">
                        <p>-{item.stok_keluar}</p>
                      </div>
                      <div className="w-full text-xs text-center font-bold pr-5">
                        <p>
                          {item.stok_awal + item.stok_masuk - item.stok_keluar}
                        </p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mb-5">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
            data={data}
          />
        </div>
      </div>
    </div>
  );
}

export default TabelLaporan;
