import Logo from "../../../public/assets/Logo.svg";
import Home from "../../../public/assets/Home-icon.svg";
import Logout from "../../../public/assets/Logout-icon.svg";
import CommonInput from "../inputs/CommonInput";
import Glass from "../../../public/assets/Glass-icon.svg";
import Create from "../../../public/assets/Create-icon.svg"
import Avatar from "../../../public/assets/Avatar-icon.svg";
function HeaderUser() {
  return (
    <>
      <div className="py-10 px-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img src={Logo} />
          </div>
          <div className="flex-grow"></div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <CommonInput
                id="name"
                type="text"
                placeholder="Search..."
                imgSrc={Glass}
                imgClassName="absolute right-3 h-5 w-5"
              />
            </div>
            <div className="flex items-center space-x-2">
              <img src={Create} alt="Añadir" className="h-8 w-8"/>
              <img src={Logout} alt="Avatar" className="h-8 w-8" />
              <img src={Home} alt="Home" className="h-8 w-8" />
              <img src={Avatar} alt="Avatar" className="h-8 w-8" />
            </div>
          </div>
        </div>
        <div className="border-t-2 border-[color:var(--col-blue)] mt-2 mb-4"></div>
      </div>
    </>
  );
}
export default HeaderUser;
