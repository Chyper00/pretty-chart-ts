import { ReactElement } from "react";

export type CallBackType = (item: DataType) => void;

export interface DataType {
  value: number;
  label: string;
  description?: string;
  children?: ReactElement;
  childrenPosition?: 'inside' | 'outside';
  [key: string]: any
}

export interface BarProps extends DataType {
  maxHeight: number;
  backgroundColor?: string;
  borderRadius?: string;
  duration?: number;
  callback?: CallBackType;
  width?: number;
  style?: string;
}

export interface BarChartProps extends Omit<BarProps, 'value' | 'label' | 'description' | 'children' | 'childrenPosition'> {
  data: DataType[];
}
