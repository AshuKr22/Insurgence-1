import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo, logout, sun } from "../assets";
import { navlinks } from "../constants";
import logonav from "../assets/logonav.svg";

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      isActive && isActive === name && "bg-[#FFB84C]"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    <img
      src={imgUrl}
      alt="fund_logo"
      className={`w-1/2 h-1/2 ${isActive !== name && "grayscale"}`}
    />
  </div>
);

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("dashboard");

  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">
        {/* <Icon styles="w-[76px] h-[76px] bg-[#2e2f36] p-0 m-0" imgUrl={logonav} /> */}
        <div>
          <img src={logonav} className="w-[56px] h-[56px] border-2 border-gray-600 rounded-full" alt="" />
        </div>
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-[#1e1f27] rounded-[20px] w-[76px] py-4 mt-12 shadow-md shadow-[#101115]">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <Icon
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if (!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        {/* <Icon
          styles="text-orange-500 bg-orange-500 shadow-secondary"
          imgUrl={sun}
        /> */}
      </div>
    </div>
  );
};

export default Sidebar;
