/* eslint-disable react/prop-types */
import DropDownInput from "./inputs/DropDownInput";
import { Controller, useForm } from "react-hook-form";
import TimeInput from "./inputs/TimeInput";
import { DatePicker } from "antd";

import dayjs from "dayjs";

import { useStore } from "../../store/store";
import { useId } from "react";

const AddActivityForm = ({ onClose }) => {
  const addActivityList = useStore((state) => state.addActivityList);

  // function generateUniqueId() {
  //   const timestamp = Date.now().toString(36); // Convert current timestamp to base36 string
  //   const randomStr = Math.random().toString(36).substr(2, 5); // Generate random string
  //   return timestamp + randomStr;
  // }

  // const uniqueId = generateUniqueId();
  // console.log(uniqueId);

  const id = useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = (data) => {
    const { activity, time, startDate } = data;
    const activityData = { activity, time, startDate, id };
    addActivityList(activityData);
    reset({ activity: "", time: "", startDate: "" });
    onClose();
  };

  return (
    <>
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
        <DropDownInput label="Add activity" register={register} />
        <TimeInput errors={errors} register={register} />

        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <DatePicker
              size="middle"
              ref={field.ref}
              name={field.name}
              onBlur={field.onBlur}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => {
                field.onChange(date ? date.valueOf() : null);
              }}
              className="rounded-3xl focus:bg-white focus:outline-none bg-gray-300 text-lg"
            />
          )}
        />

        <button
          type="submit"
          className="bg-black/70 text-white w-full rounded-2xl py-1"
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default AddActivityForm;
