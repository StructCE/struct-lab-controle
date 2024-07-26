import React, { createContext, useContext } from "react";

// const CardContext = createContext<CardContextProps>({
//   primaryColor: "#000000",
//   secondaryColor: "#D9D9D9",
// });

// type CardContextProps = {
//   primaryColor: string;
//   secondaryColor: string;
// };

type CardProps = {
  style: string;
  children: React.ReactNode;
};

// const useCardContext = () => useContext(CardContext);

const CardComponent = (props: CardProps) => {
  const { children, style } = props;
  const rootStyle =
    "flex p-10 rounded-[5px] border-2 border-primary font-inter" + style;

  //   if (primaryColor && secondaryColor) {
  //     value = { primaryColor, secondaryColor };
  //   } else {
  //     value = {
  //       primaryColor: "#000000",
  //       secondaryColor: "#D9D9D9",
  //     };
  //   }
  return <div className={rootStyle}>{children}</div>;
};

CardComponent.Title = (children: React.ReactNode) => {
  return <p className="">{children}</p>;
};
