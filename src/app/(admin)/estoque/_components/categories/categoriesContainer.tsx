import CategoryCard from "./categoryCard";

type CategoriesContainerProps = {
  filter: string;
};

export default function CategoriesContainer(props: CategoriesContainerProps) {
  // const categoriesInfo = api.category.getFilteredCategories({filter: props.filter})
  return (
    <div className="grid h-fit w-full grid-cols-3 gap-8">
      {categoriesInfo.map((categoryInfo, index) => (
        <CategoryCard key={index} {...categoryInfo}></CategoryCard>
      ))}
    </div>
  );
}
