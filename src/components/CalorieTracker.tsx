import { useMemo } from "react";
import type { Activity } from "../types";
import { CalorieDisplay } from "./CalorieDisplay";

type CalorieTrackerProps = {
  activities: Activity[];
};

const CalorieTracker = ({ activities }: CalorieTrackerProps) => {

  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesDrink = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 3 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );

  const netCalories = useMemo(() => (caloriesConsumed - caloriesBurned) - caloriesDrink, [activities])


  return (
    <>
      <h2 className="text-4xl font-black text-white text-center">
        Resumen de Calorías
      </h2>

      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10 p-3">
        <CalorieDisplay 
            calories={caloriesConsumed}
            text="Consumidas Food"
        />

        <CalorieDisplay 
            calories={caloriesBurned}
            text="Ejercicio"
        />

        <CalorieDisplay 
            calories={caloriesDrink}
            text="Consumidas Drink"
        />
        <CalorieDisplay 
            calories={netCalories}
            text="Diferencia"
        />
      </div>
    </>
  );
};

export default CalorieTracker;
