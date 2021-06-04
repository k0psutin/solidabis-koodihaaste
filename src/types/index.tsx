export interface CarProps {
  car: number;
}

export type Car = {
  id: number;
};

export interface TextGroupProps {
  className?: string;
  text: string;
  result: string | number | string[];
}

export interface InputGroupProps {
  text: string;
  eventHandler: (value: number) => void;
}
