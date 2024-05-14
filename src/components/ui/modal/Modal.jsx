/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, onClose }) => {
  return (
    <div
      className="h-screen w-full fixed top-0 left-0 bg-black/70 z-40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-gray-400 rounded-3xl shadow-3xl p-10 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <IoMdClose
          className="absolute top-3 right-3 cursor-pointer"
          size={25}
          onClick={onClose}
        />
        {children}
      </div>
    </div>
  );
};

export default Modal;
