import { Link, useParams } from "react-router-dom";
import { useProductStore } from "../store/productStore";
import { useEffect } from "react";
import Loading from "../components/Loading";

export default function SearchP() {
  const { category, subCategory } = useParams();
  const { catProducts, catLoading, fetchSelectedProduct } = useProductStore();
  useEffect(() => {
    fetchSelectedProduct(category, subCategory);
  }, [category, subCategory, fetchSelectedProduct]);
  if (catLoading) {
    return <Loading />;
  }

  return (
    <div className="flex h-auto w-full flex-row flex-wrap items-center justify-end gap-0 divide-x divide-black/15 p-5 text-center max-sm:justify-center">
      {catProducts.map((i) => (
        <div
          key={i.id}
          className="flex h-95 w-60 flex-col items-center justify-center gap-3 border-b border-black/10 bg-white transition-all delay-50 hover:scale-101 hover:rounded-xl hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] max-sm:w-50"
        >
          <Link
            to={`/product/${i.id}`}
            className="flex flex-col items-center justify-center gap-4"
          >
            <img
              src={`${i.image}`}
              alt={`${i.name}`}
              onError={(event) => {
                event.currentTarget.onerror = null;
                event.currentTarget.src = "/imgs/products/1.webp";
              }}
              className="size-50"
            />
            <p>{i.name}</p>
            <p>{i.price.toLocaleString("fa-IR")} تومان</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
