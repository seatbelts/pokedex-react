/**
 * This component renders a loading icon for http calls.
 *
 * @function Loader A react component
 * * @returns {ReactNode} A React element that renders loading icon.
 */
const Loader = () => {
  return (
    <div className="items-center justify-center flex p-1">
      <h2 className=" text-9xl animate-spin">🌀</h2>
    </div>
  );
};

export default Loader;
