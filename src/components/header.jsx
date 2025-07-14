import logo from "../assets/logo.png";
import transLogo from "../assets/translator.png";
function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex items-center justify-center py-4">
      <div className="flex items-center gap-x-40 shadow-xl w-fit px-5 rounded-4xl h-fit bg-white/30 backdrop-blur-md">
        <img src={logo} alt="logo" className="cursor-pointer" />
        <nav>
          <ul className="flex items-center gap-x-7 [&_*]:cursor-pointer">
            <li>Home</li>
            <li>
              <select name="About us" id="About us" className="outline-none">
                <option value="Services" defaultChecked>
                  About us
                </option>
                <option value="Services">Services</option>
                <option value="Policy">Policy</option>
                <option value="Team">Team</option>
              </select>
            </li>
            <li>Events</li>
            <li>Recruitments</li>
            <li>Collaborators</li>
          </ul>
        </nav>

        <div className="flex gap-x-7 items-center">
          <img
            src={transLogo}
            alt="translator"
            className="cursor-pointer h-7 w-7"
          />
          <button className="text-white bg-[#EE6F57] p-2 rounded-2xl cursor-pointer w-24">
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
