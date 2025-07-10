import logo from "../assets/logo.png";
import transLogo from "../assets/translator.png";
function Header() {
  return (
    <div className="h-28 flex justify-center items-center">
      <div className="flex items-center gap-x-40 shadow-xl w-fit px-5 rounded-4xl h-fit">
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
    </div>
  );
}

export default Header;
