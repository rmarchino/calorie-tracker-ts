type calorieDisplayProps = {
  calories: number;
  text: string;
};

export const CalorieDisplay = ({ calories, text }: calorieDisplayProps) => {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span className="font-black text-6xl text-white">{calories}</span>
      {text}
    </p>
  );
};
