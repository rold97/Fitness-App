import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { FiActivity } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { IoNutritionOutline } from "react-icons/io5";
import { Avatar, Popover } from "antd";
import { IoSettingsOutline } from "react-icons/io5";
import { TbLogout2 } from "react-icons/tb";
import Logo from "../assets/img/logo.png";

const Header = () => {
  const navLinks = [
    { text: "home", icon: <IoHomeOutline /> },
    { text: "activities", icon: <FiActivity /> },
    { text: "recipes", icon: <LuClipboardList /> },
    { text: "nutrition", icon: <IoNutritionOutline /> },
  ];

  return (
    <header className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 flex flex-row justify-between items-center py-5">
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="h-8" />
        <p className="font-bold text-lg">ActiveFlow</p>
      </div>
      <nav className="flex flex-row gap-14 bg-gradient-to-br from-gray-200/10 to-gray-400/20 rounded-3xl">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            to="/"
            className="capitalize hover:bg-gradient-to-br from-black/20 to-black/10 hover:text-white transition-all duration-200 rounded-3xl py-2 px-6"
          >
            <div className="flex flex-row gap-2 items-center">
              {link.icon}
              <p>{link.text}</p>
            </div>
          </Link>
        ))}
      </nav>
      <div>
        <Popover
          content={content}
          placement="bottomRight"
          trigger="click"
          overlayInnerStyle={{
            paddingLeft: 20,
            paddingRight: 20,
            background: "#F2F3F5",
            opacity: "70%",
          }}
          overlay={{ zIndex: 999 }}
        >
          <Avatar shape="circle" alt="avatar" className="cursor-pointer">
            DP
          </Avatar>
        </Popover>
      </div>
    </header>
  );
};

const content = (
  <div>
    <div className="flex items-center gap-3 mb-8">
      <IoSettingsOutline />
      <p>Settings</p>
    </div>
    <div className="flex items-center gap-3">
      <TbLogout2 />
      <p>Log Out</p>
    </div>
  </div>
);

export default Header;
