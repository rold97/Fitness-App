import { useEffect, useState } from "react";
import { getCaloriesBurnedActivitiesData } from "../../../requests";

// eslint-disable-next-line react/prop-types
const DropDownInput = ({ label, id, register }) => {
  const [activities, setActivities] = useState(null);

  const getActivitiesData = async () => {
    const { activities } = await getCaloriesBurnedActivitiesData();
    setActivities(activities);
    // console.log(activities);
    // const data = await getCaloriesBurnedData("running");
    // console.log(data);
  };

  useEffect(() => {
    getActivitiesData();
  }, []);

  return (
    <div className="flex flex-row gap-x-5 items-center ">
      <label
        htmlFor="activityInput"
        className="text-lg font-semibold text-center"
      >
        {label}
      </label>
      <input
        list="activity"
        id={id}
        className="rounded-2xl px-4 py-1 focus:outline-none focus:bg-white hover:bg-white transition-all duration-200 bg-gray-300 w-full"
        placeholder="running..."
        required
        {...register("activity")}
      />
      <datalist id="activity">
        {activities?.map((activity, i) => (
          <option key={i}>{activity}</option>
        ))}
      </datalist>
    </div>
  );
};

export default DropDownInput;
