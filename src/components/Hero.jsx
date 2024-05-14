import spanImg from "../assets/img/textImg.jpg";
import heroImg from "../assets/img/heroImg.jpg";

import { useEffect, useState } from "react";

const Hero = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const trainingPrograms = [
    "cycling",
    "calisthenics",
    "rowing",
    "aerobics",
    "stretching",
    "walking",
    "swimming",
    "running",
    "aerobics",
    "gymnastics",
    "hiking",
  ];

  const formatDate = () => {
    const newDate = new Date();
    const day = `${newDate.getDate()}`.padStart(2, "0");
    const month = `${newDate.getMonth() + 1}`.padStart(2, "0");
    const year = newDate.getFullYear();
    const displayDate = `${day}/${month}/${year}`;
    return displayDate;
  };
  const formatTime = () => {
    const newDate = new Date();
    const hour = `${newDate.getHours()}`.padStart(2, "0");
    const minutes = `${newDate.getMinutes()}`.padStart(2, "0");
    const displayTime = `${hour}:${minutes}`;
    return displayTime;
  };

  useEffect(() => {
    const date = formatDate();
    setDate(date);
    const time = formatTime();
    setTime(time);
    // getExercisesData("cardio");
    // getCaloriesBurnedData("run");
    // getCaloriesBurnedActivitiesData();
  }, []);

  const imageNav = ["breakfasts", "lunches", "dinners", "Snacks"];

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
      {/* TEXT */}
      <h1 className="uppercase text-[50px] text-justify text-full leading-[4rem] py-10">
        Start your sports path right now: choose your pers
        <span className="relative">
          <img
            src={spanImg}
            alt=""
            className="inline-block object-cover h-[55px] w-[200px] rounded-full"
          />
          <div className="bg-black/20 absolute left-0 top-0 w-full h-full rounded-full z-10" />
        </span>
        nal training program!
      </h1>
      <div className="flex flex-row gap-5">
        {/* LEFT SECTION */}
        <div className="w-2/3 relative cursor-pointer group">
          <img src={heroImg} alt="healthy food" className="rounded-3xl" />
          {/* image nav */}
          <div className="absolute top-0 left-5 z-20 py-4 flex justify-around items-center w-full">
            <ul className="flex flex-row text-white gap-x-10 list-disc text-sm">
              {imageNav.map((text, i) => (
                <li
                  key={i}
                  className="uppercase underline underline-offset-[5px] decoration-white/80"
                >
                  {text}
                </li>
              ))}
            </ul>
            <p className="uppercase bg-white text-black rounded-3xl py-1 px-2 font-medium">
              start eating right
            </p>
          </div>
          <h2 className="absolute top-[50%] left-[50%] text-5xl text-white m-auto translate-y-[-50%] translate-x-[-50%] font-semibold z-20">
            Healthy eating
          </h2>
          <div className="bg-black/10 absolute left-0 top-0 w-full h-full rounded-3xl z-10 group-hover:bg-black/30 transition-all duration-200" />
        </div>
        {/* RIGHT SECTION */}
        <div className="w-1/3 flex flex-col">
          <div className="h-1/2 w-full">
            <div className="flex flex-col ">
              <h2 className="pb-5 uppercase text-2xl text-center">
                Last trainig
              </h2>
              <div className="w-full h-full rounded-full relative flex items-center justify-center ">
                <div className="rounded-full border-[3px] border-black h-64 w-64 flex items-center justify-center text-center">
                  <div className="flex flex-col gap-y-2 ">
                    <p className="text-black/80 text-lg">{date}</p>
                    <p className="font-semibold text-4xl">1200 Cal</p>
                    <p className="text-black/80 text-lg">{time}</p>
                  </div>
                  <div className="text-white bg-black rounded-3xl absolute -top-2 px-5 py-2 text-lg">
                    Running
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-1/2 w-full">
            <h3 className="uppercase text-2xl text-left py-3">
              Best Calories Burned Activities:
            </h3>
            <ul className="flex flex-wrap  gap-3 border-t-2 border-black pt-5">
              {trainingPrograms.map((activity, index) => (
                <li
                  key={index}
                  className="capitalize text-base p-2 rounded-3xl border border-black hover:bg-black hover:text-white transition-all duration-200 cursor-pointer"
                >
                  {activity}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
