import axios from "axios";

const options = {
  method: "GET",
  headers: { "X-Api-Key": import.meta.env.VITE_API_KEY },
  contentType: "application/json",
};
export const getCaloriesBurnedData = async (activity) => {
  try {
    const { data } = await axios(
      `https://api.api-ninjas.com/v1/caloriesburned?activity=${activity}`,
      options
    );
    console.log(activity, data);
  } catch (error) {
    console.error(error);
  }
};

export const getCaloriesBurnedActivitiesData = async () => {
  try {
    const { data } = await axios(
      `https://api.api-ninjas.com/v1/caloriesburnedactivities`,
      options
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getExercisesData = async (type) => {
  try {
    const { data } = await axios(
      `https://api.api-ninjas.com/v1/exercises?type=${type}`,
      options
    );
    console.log(type, data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getUsers = async () => {
  try {
    const data = await axios(
      `https://dummyjson.com/users/${Math.floor(Math.random() * 100)}`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};
