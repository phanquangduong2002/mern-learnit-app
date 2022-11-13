import React, { useContext } from "react";
import { Link } from "react-router-dom";
import learnItLogo from "../../assets/logo.svg";
import logoutIcon from "../../assets/logout.svg";
import { AuthContext } from "../../contexts/AuthContext";

import { motion } from "framer-motion";

const NavMenu = () => {
  const {
    authState: {
      user: { username },
    },
    logoutUser,
  } = useContext(AuthContext);

  const logout = () => logoutUser();

  return (
    <nav className="w-screen py-2 px-4 flex items-center bg-[#78c2ad]">
      <span className="py-1 pr-4 text-2xl font-semibold text-white flex items-center">
        <img src={learnItLogo} className="w-8 h-8 mr-2" alt="" />
        <p className="tracking-wide">LearnIt</p>
      </span>
      <div className="flex-1 flex items-center">
        <div className="mr-auto">
          <Link
            to="/dashboard"
            className="p-2 text-lg font-semibold text-white"
          >
            Dashboard
          </Link>
          <Link to="/about" className="p-2 text-lg font-semibold text-white">
            About
          </Link>
        </div>
        <div className="flex items-center">
          <Link disabled className="p-2 text-lg font-semibold text-white">
            Welcome {username}
          </Link>
          <motion.button
            onClick={logout}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
            className="flex items-center py-2 px-3 text-lg font-semibold text-white rounded-lg bg-[#f3969a] hover:bg-[#ef7479]"
          >
            <img src={logoutIcon} className="w-8 h-8 mr-2" alt="" />
            Logout
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
