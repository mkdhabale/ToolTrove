import { useEffect } from "react";
import useZustandStore, {
  useActions,
} from "../../../store/zustand/use-counter";

function Products() {
  const productList = useZustandStore((state) => state.listOfProducts);

  const { fetchListOfProducts } = useActions();

  useEffect(() => {
    fetchListOfProducts();
  }, [fetchListOfProducts]);

  return (
    <div>
      <h1>List of Products</h1>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>
        {productList?.length > 0 ? (
          productList.map((singleProductItem) => (
            <div key={singleProductItem.id}>
              <p>{singleProductItem?.title}</p>
              <img src={singleProductItem?.thumbnail} alt="product img" />
            </div>
          ))
        ) : (
          <h3>No products available</h3>
        )}
      </ul>
    </div>
  );
}

export default Products;
