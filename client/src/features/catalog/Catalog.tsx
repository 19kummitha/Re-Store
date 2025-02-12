import { useFetchProductsQuery } from "./CatalogApi";
import ProductList from "./ProductList";

export default function Catalog() {
  const { data, isLoading } = useFetchProductsQuery();
  if (isLoading || !data) return <div>Loading...</div>;
  return (
    <>
      <ProductList products={data} />
    </>
  );
}
