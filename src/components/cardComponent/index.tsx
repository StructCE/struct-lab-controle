import { cn } from "@/lib/utils";
import React from "react";

type CardProps = {
  className?: string;
  children: React.ReactNode;
};

export const CardComponent = (props: CardProps) => {
  const rootStyle = cn(
    "flex p-5 rounded-[5px] border-2 border-secondary font-inter",
    props.className,
  );
  return <div className={rootStyle}>{props.children}</div>;
};

type CardComponentTitleProps = {
  className?: string;
  children: string;
};

CardComponent.Title = function CardComponentTitle(
  props: CardComponentTitleProps,
) {
  const style = cn(
    "font-inter text-[20px] font-semibold text-primary",
    props.className,
  );
  return <p className={style}>{props.children}</p>;
};

type CardComponentTextProps = {
  className?: string;
  children: string;
};

CardComponent.Text = function CardComponentText(props: CardComponentTextProps) {
  const style = cn("font-inter text-[15px] font-medium", props.className);
  return <p className={style}>{props.children}</p>;
};

type CardComponentFieldProps = {
  className?: string;
  children: React.ReactNode;
};

CardComponent.Field = function CardComponentField(
  props: CardComponentFieldProps,
) {
  const style = cn("flex w-full gap-2", props.className);
  return <div className={style}>{props.children}</div>;
};

type CardComponentLabelValueProps = {
  className?: string;
  label: string;
  value: string;
};

CardComponent.LabelValue = function CardComponentLabelValue(
  props: CardComponentLabelValueProps,
) {
  return (
    <CardComponent.Field className={props.className}>
      <CardComponent.Text className=" text-secondary">
        {props.label}
      </CardComponent.Text>
      <CardComponent.Text className=" text-primary">
        {props.value}
      </CardComponent.Text>
    </CardComponent.Field>
  );
};

type CardComponentGridProps = {
  className?: string;
  children: React.ReactNode;
};

CardComponent.Grid = function CardComponentGrid(props: CardComponentGridProps) {
  const style = cn("grid grid-flow-row grid-cols-4", props.className);
  return <div className={style}>{props.children}</div>;
};

type CardComponentImageProps = {
  className?: string;
  children?: React.ReactNode;
};

CardComponent.Image = function CardComponentImage(
  props: CardComponentImageProps,
) {
  const style = cn(
    "rounded-[8px] border-2 border-secondary flex items-center justify-center",
    props.className,
  );
  return (
    <div className={style}>
      {props.children ? (
        props.children
      ) : (
        <p className="text-secondary">*foto</p>
      )}
    </div>
  );
};

type CardComponentButtonProps = {
  icon?: React.ReactNode;
  handlePress?: () => void;
  className?: string;
  children: string;
};

CardComponent.Button = function CardComponentButton(
  props: CardComponentButtonProps,
) {
  const style = cn(
    "flex flex-row w-fit h-fit px-3 py-2 items-center justify-center rounded-[8px] bg-[#EEEEEE] gap-2",
    props.className,
  );
  return (
    <button onClick={props.handlePress} className={style}>
      {props.icon}
      <CardComponent.Text className="font-[16px] text-primary">
        {props.children}
      </CardComponent.Text>
    </button>
  );
};
