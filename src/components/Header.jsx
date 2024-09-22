
import SearchBox from "./SearchBox";
import TempConversionBtn from "./TempConversionBtn";

const Header = () => {
  
  return (
    <header className="bg-gray-800 text-white p-4 shadow-slate-900 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <TempConversionBtn />
      <div className="flex-grow max-w-xl mx-4">
        <SearchBox />
        </div>
    </div>
  </header>
  );
};

export default Header;
