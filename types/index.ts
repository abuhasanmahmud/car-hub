import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  btnType?: "button" | "submit";
  handelClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface searchManufactureProps {
  manufacture: string;
  setManufacture: (manufacture: string) => void;
}
