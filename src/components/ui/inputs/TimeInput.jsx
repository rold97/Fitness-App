/* eslint-disable react/prop-types */

const TimeInput = ({ register, errors }) => {
  return (
    <div className="flex flex-col gap-y-5 w-full">
      <div className="flex items-center gap-x-5 w-full">
        <label className="text-lg font-semibold gap-5">Duration</label>
        <input
          className={`w-full rounded-2xl px-4 py-1 focus:outline-none hover:bg-white focus:bg-white bg-gray-300 [appearance:textfield] transition-all duration-200 ${
            errors.time && "border border-red-500"
          }`}
          placeholder="min"
          type="number"
          id="time"
          required
          {...register("time", { min: 1, max: 1440 })}
        />
      </div>
      {errors.time && (
        <span className="text-red-500">
          Time should be greater than 0 and less than 144
        </span>
      )}
    </div>
  );
};

export default TimeInput;
