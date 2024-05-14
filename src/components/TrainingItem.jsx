/* eslint-disable react/prop-types */
import { IoClose } from "react-icons/io5";
import { useStore } from "../store/store";

const TrainingItem = ({ duration, training, date, id }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const removeItem = useStore((state) => state.removeItem);

  const numberDate = new Date(date).getDate();
  const formattedDate = numberDate.toString().padStart(2, "0");
  const month = new Date(date).getMonth();
  const year = new Date(date).getFullYear();

  return (
    <div className="flex flex-row items-center gap-5" id={id}>
      <div className="bg-white rounded-xl py-5 px-9 shadow-xl border-l-[5px] border-[#3A7B52] w-[500px]">
        <h2 className="text-xl">
          {training} on {formattedDate} {monthNames[month]} {year}
        </h2>
        <div className="workout__details">
          <span className="text-xl mr-1">🏃‍♂️</span>
          <span className="text-lg">{duration}</span>
          <span className="text-lg text-black/80 ml-1">min</span>
        </div>
      </div>
      <div
        className="bg-white rounded-full shadow-xl p-2 cursor-pointer hover:-translate-y-2 transition-all duration-200"
        onClick={() => removeItem(id)}
      >
        <IoClose size={30} />
      </div>
    </div>
  );
};

export default TrainingItem;
