// eslint-disable-next-line react/prop-types
function FormaterRupiah({ number, label }) {
  const formatRupiah = (value) => {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 2,
    });
    return formatter.format(value);
  };
  return (
    <div>
      <span className="mr-2">{label}</span>
      {formatRupiah(number)}
    </div>
  );
}

export default FormaterRupiah;
