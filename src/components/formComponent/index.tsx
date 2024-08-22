import { cn } from "@/lib/utils";
import React, { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { Checkbox } from "../ui/checkbox";
import { check } from "prettier";

type FormProps = {
  className?: string;
  children: React.ReactNode[];
};

export const Form = (props: FormProps) => {
  const style = cn(
    "px-[55px] pt-[90px] pb-[40px] gap-[30px] flex flex-col justify-around border-[#E0E0E0] border-[2px] rounded-[20px]",
    props.className,
  );
  return <div className={style}>{props.children}</div>;
};

type FormTitleProps = {
  className?: string;
  children: string;
};

Form.Title = function FormTitle(props: FormTitleProps) {
  const style = cn("font-inter font-semibold text-[24px]", props.className);
  return <h1 className={style}>{props.children}</h1>;
};

type FormContentProps = {
  className?: string;
  children: React.ReactNode[];
};

Form.Content = function FormContent(props: FormContentProps) {
  const style = cn("flex flex-col w-full gap-[15px]", props.className);
  return <div className={style}>{props.children}</div>;
};

type FormFieldProps = {
  className?: string;
  children: React.ReactNode[];
};

Form.Field = function FormField(props: FormFieldProps) {
  const style = cn(
    "flex flex-col justify-start items-start w-full gap-[10px] ",
    props.className,
  );
  return <div className={style}>{props.children}</div>;
};

type FormLabelProps = {
  className?: string;
  children: string;
};

Form.Label = function FormLabel(props: FormLabelProps) {
  const style = cn(
    "justify-start font-inter font-regular text-[16px]",
    props.className,
  );
  return <p className={style}>{props.children}</p>;
};

type FormInputProps = {
  className?: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  type: HTMLInputTypeAttribute;
};

Form.Input = function FormInput(props: FormInputProps) {
  const style = cn(
    "w-full px-[10px] py-[3px] rounded-[8px] border-[2px] border-[#E0E0E0] font-inter font-medium text-[20px] placeholder-text-[#828282]",
    props.className,
  );
  return (
    <input
      placeholder={props.placeholder}
      value={props.value}
      onChange={(event) => props.setValue(event.target.value)}
      type={props.type}
      className={style}
    />
  );
};

type FormBoxSelectProps = {
  className?: string;
  children: string;
  checked: boolean;
  setChecked: (value: boolean) => void;
};

Form.BoxSelect = function FormBoxSelect(props: FormBoxSelectProps) {
  const style = cn(
    "font-inter font-regular text-[15px] leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
    props.className,
  );
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        className="size-[20px] rounded-none border-[3px] border-[#000000]"
        id={props.children}
        checked={props.checked}
        onCheckedChange={(checked) => {
          if (typeof checked === "boolean") props.setChecked(checked);
        }}
      />
      <label htmlFor={props.children} className={style}>
        {props.children}
      </label>
    </div>
  );
};

type FormButtonProps = {
  className?: string;
  placeholder: string;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  onClick: (data: any) => void;
};

// Fazer Label e Value (Input, Select, Box Select)
// Fazer Button
