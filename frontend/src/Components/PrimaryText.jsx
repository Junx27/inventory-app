// eslint-disable-next-line react/prop-types
function PrimaryText({ name }) {
  return (
    <h1 className="font-bold text-2xl text-blue-500">
      {name}
      <span className="text-black ml-1">.</span>
    </h1>
  );
}

export default PrimaryText;
