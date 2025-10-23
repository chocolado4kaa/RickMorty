import type { ReactNode } from "react";

export type RenderObjectProps<T extends object> = {
  obj: T;
  excludeKeys?: (keyof T)[];
};

export type InfoItem = {
  title: string;
  obj?: object;
  excludeKeys?: string[];
  value?: string | number;
  componentType: "short" | "long";
};

export type InfoComponentProps = {
  title?: string;
  children?: ReactNode;
  type?: "short" | "long";
};