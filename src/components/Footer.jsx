import facebook from "../assets/Facebook.png";
import instagram from "../assets/Instagram.png";
import X from "../assets/X.png";

function Footer() {
  return (
    <div className="bg-[#C83737] text-white py-10 rounded-t-[50px] flex flex-col gap-5 w-full">

      <div className="flex w-full justify-around my-8">
        <div className="w-[40%] space-y-4">
          <h3 className="text-3xl font-semibold tracking-widest">Our Contact</h3>
          <div className="text-white/90 space-y-2 tracking-widest leading-8">
            <p>
              Global Pathway Alliance<br />
              Moscow, Street Khabarova, 2 Russia
            </p>
            <p>
              Mittar Immigration<br />
              Near Bus Stand, Moga, Punjab, India
            </p>
            <p>
              (+91) 9780153819, 8 (968) 822-00-60<br />
              support@pathawayglobalalliance.org
            </p>
          </div>
        </div>

        <div className="w-[40%] space-y-4">
          <h3 className="text-3xl font-semibold tracking-widest">Our Newsletter</h3>
          <p className="text-white/90 tracking-widest leading-8">
            Subscribe to our newsletter to<br />
            get the latest updates on our<br />
            services and job openings.
          </p>
          <div className="flex flex-col w-72 gap-y-5">
            <input
              type="email"
              placeholder="Enter your EMAIL here"
              className="px-4 py-2 focus:outline-none w-full border-b-2 bg-transparent text-white placeholder:text-white/70"
            />
            <button className="bg-gray-300 opacity-75 text-gray-800 py-2 rounded-md font-semibold w-28 hover:opacity-100 transition">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>

      <hr className="mx-16 border-white/40" />

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mx-16 text-sm">
        <p>© Pathway Global 2025. All rights reserved.</p>
        <div className="flex gap-4 items-center">
          <a href="#"><img src={facebook} alt="Facebook" /></a>
          <a href="#"><img src={instagram} alt="Instagram"/></a>
          <a href="#"><img src={X} alt="X"/></a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
