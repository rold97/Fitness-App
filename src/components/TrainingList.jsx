// import Input from "./Input";
import { useState } from "react";
import Modal from "./ui/modal/Modal";
import AddActivityForm from "./ui/AddActivityForm";
import TrainingItem from "./TrainingItem";
import { useStore } from "../store/store";

const TrainingList = () => {
  const [open, setOpen] = useState(false);
  // const [activitiesList, setActivitiesList] = useState([]);

  // const activity = useStore((state) => state.activity);
  // const time = useStore((state) => state.time);
  // const date = useStore((state) => state.date);

  const activitiesList = useStore((state) => state.activityList);

  // console.log(activitiesList);

  return (
    <section className="py-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24 w-full">
      <div className="bg-gray-200 rounded-3xl w-full p-10 flex gap-y-10 flex-col items-center">
        <button
          className="text-center uppercase rounded-2xl bg-black/50 py-3 w-1/5 text-gray-200 hover:text-black/50 hover:bg-gray-200 border hover:border-black/50 duration-200 transition-all text-lg shadow-xl"
          onClick={() => setOpen(true)}
        >
          Add activity
        </button>
        <div className="flex flex-col justify-center items-center gap-y-10 ">
          {activitiesList.length === 0 ? (
            <p className="text-lg">No activities added yet...</p>
          ) : (
            activitiesList.map((activity) => (
              <TrainingItem
                id={activity.id}
                key={activity.id}
                duration={activity.time}
                training={activity.activity}
                date={activity.startDate}
              />
            ))
          )}
        </div>
      </div>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <AddActivityForm onClose={() => setOpen(false)} />
        </Modal>
      )}
    </section>
  );
};
export default TrainingList;
