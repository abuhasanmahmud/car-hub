import { CarProps } from "@/types";

interface CarCardProps {
  car: CarProps;
}

const CardCard = ({ car }: CarCardProps) => {
          const { city_mpg, year, make, model, transmission, drive } = car;
  return <div>{car.model}</div>;
};

export default CardCard;
