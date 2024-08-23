import { cn } from "@/lib/utils";
import React, { type HTMLInputTypeAttribute } from "react";
import { Checkbox } from "../ui/checkbox";
import CldImage from "../app/cldImage";
import type { CldImageProps } from "next-cloudinary";

/* eslint-disable @typescript-eslint/no-explicit-any */
type FormProps = {
  className?: string;
  children: React.ReactNode[];
  onCancel: () => void;
  onSave: (data: any) => void;
};

export const Form = (props: FormProps) => {
  const style = cn(
    "flex flex-col justify-around border-[#E0E0E0] border-[2px] rounded-[20px]",
    props.className,
  );
  return (
    <form onSubmit={props.onSave} onReset={props.onCancel} className={style}>
      {props.children}
    </form>
  );
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
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  type?: HTMLInputTypeAttribute;
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
  children: string;
  onClick?: (data: any) => void;
  type?: "button" | "submit" | "reset" | undefined;
};

Form.Button = function FormButton(props: FormButtonProps) {
  const style = cn(
    "rounded-[8px] border-[2px] border-[#D9D9D9] py-[10px] items-center justify-center font-inter font-medium text-[16px] text-white bg-primary",
    props.className,
  );
  return (
    <button className={style} onClick={props.onClick} type={props.type}>
      {props.children}
    </button>
  );
};

type FormImageProps = {
  className?: string;
  publicId: string;
  onImageInput: (image: any) => void;
  imageProps?: CldImageProps;
};

Form.Image = function FormImage(props: FormImageProps) {
  const style = cn(
    "w-fit h-fit rounded-[8px] border-[2px] border-[#D9D9D9] flex items-start justify-center relative",
    props.className,
  );
  return (
    <div className={style}>
      <input
        type="file"
        className="absolute top-[10px]"
        onInput={(file) => props.onImageInput(file)}
      ></input>
      <CldImage
        src={props.publicId}
        alt="image"
        crop={"auto"}
        width={400}
        height={400}
        radius={8}
        {...props.imageProps}
      />
    </div>
  );
};

// Arrumar input de imagem
// Fazer select
