import logo from "../assets/logo.png";
import Dropdown from "./Dropdown";
import DropdownLang from "./DropdownLang";

function Header() {
  const options = ["About us", "Services", "Policy", "Team"];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center py-4">
      <div className="flex items-center gap-x-40 shadow-xl w-fit px-5 rounded-4xl h-fit bg-white/30 backdrop-blur-md">
        <img src={logo} alt="logo" className="cursor-pointer" />
        <nav>
          <ul className="flex items-center gap-x-7 [&_*]:cursor-pointer">
            <li>Home</li>
            <li>
              <Dropdown options={options} defaultValue="About us" />
            </li>
            <li>Events</li>
            <li>Recruitments</li>
            <li>Collaborators</li>
          </ul>
        </nav>

        <div className="flex gap-x-7 items-center">
          <DropdownLang />
          <button className="text-white bg-[#EE6F57] p-2 rounded-2xl cursor-pointer w-24">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
