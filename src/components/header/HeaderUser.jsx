import React, { useState, useContext } from "react";
import { DestinationsContext } from "../../context/DestinationsContext";
import Logo from "../../../public/assets/Logo.svg";
import Home from "../../../public/assets/Home-icon.svg";
import Logout from "../../../public/assets/Logout-icon.svg";
import CommonInput from "../inputs/CommonInput";
import Glass from "../../../public/assets/Glass-icon.svg";
import Create from "../../../public/assets/Create-icon.svg";
import Avatar from "../../../public/assets/Avatar-icon.svg";
import { AuthContext } from '../../auth/AuthWrapper';
import { useNavigate } from "react-router-dom";

function HeaderUser() {
  const navigate = useNavigate();
  const { authToken, logout } = useContext(AuthContext);
  const { filterDestinations } = useContext(DestinationsContext);
  const [searchQuery, setSearchQuery] = useState("");

  const isAuthenticated = authToken !== null;

  const gotToHome = () => navigate('/');
  const goToCreate = () => navigate('/create');
  const goToLogout = () => {
    logout();
    navigate('/login');
  };
  const goToSignIn = () => navigate('/signin');

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    filterDestinations(query); 
  };

  return (
    <div className="py-10 px-16">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex-grow"></div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <CommonInput
              id="search"
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search..."
              imgSrc={Glass}
              imgClassName="absolute right-3 h-5 w-5"
            />
          </div>
          <img src={Home} alt="Home" className="h-8 w-8 cursor-pointer" onClick={gotToHome} />

          <div className="flex items-center space-x-2">
            {isAuthenticated && (
              <>
                <img src={Create} alt="Create" className="h-8 w-8 cursor-pointer" onClick={goToCreate} />
                <img src={Logout} alt="Logout" className="h-8 w-8 cursor-pointer" onClick={goToLogout} />
              </>
            )}

            {!isAuthenticated && (
              <img src={Avatar} alt="Avatar" className="h-8 w-8 cursor-pointer" onClick={goToSignIn} />
            )}
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[color:var(--col-blue)] mt-2 mb-4"></div>
    </div>
  );
}

export default HeaderUser;
