import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { ErrorBoundary } from "../../app/components/ErrorBoundary";
import { Loader } from "../../app/components/Loader";
import { setCategoryFilter } from "../../entities/category/model";
import { CategoryBar } from "../../entities/category/ui";
import { getCategories } from "../../shared/model";

interface Value {
  age: string;
  gender: string;
  duration: string;
  layout: string;
  inthehome: string;
  location: string;
  price: string;
  room: string;
}

export const CategoryContent = () => {
  const { isLoading, isError, data } = useQuery(
    "CATEGORIES",
    async () => await getCategories()
  );

  const dispatch = useDispatch<any>();

  const handleSubmit = (values: Value) => {
    dispatch(setCategoryFilter(values));
  };

  if (isError) {
    return <ErrorBoundary />;
  }
  if (isLoading) {
    return <Loader />;
  }

  return <CategoryBar data={data} submit={handleSubmit} />;
};
