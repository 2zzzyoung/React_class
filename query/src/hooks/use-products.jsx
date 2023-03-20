import { useEffect, useState } from "react";

export default function useProducts({ salesOnly }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log("fetching....");
    setLoading(true);
    setError(undefined);
    fetch(`data/${salesOnly ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("🔥success");
        setProducts(data);
      })
      .catch((e) => setError("에러가 발생했음!"))
      .finally(() => setLoading(false));
    return () => {
      console.log("🧹clean");
    };
  }, [salesOnly]);

  return [loading, error, products];
}
