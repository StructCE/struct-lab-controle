import InitCard from "./initCard";

export default function InitCardContainer() {
  const products = undefined; //consultar api
  return (
    <>
      <InitCard products={products}></InitCard>
    </>
  );
}
