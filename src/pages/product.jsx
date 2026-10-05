import { useParams } from "react-router-dom";
import api from "/services/api.js";
import { useCartStore } from "../store/cartStore";
import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

export default function ProductP() {
  const { id } = useParams();

  //fetch product
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        const res = await api.get(`/products/${id}`);
        if (!res.data) {
          setError(true);
          return;
        }
        setProduct(res.data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    loadProduct();
  }, [id]);
  //
  const addItem = useCartStore((state) => state.addItem);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const cartItem = useCartStore((state) =>
    product ? state.items.find((item) => item.id === product.id) : undefined,
  );
  if (loading) {
    return <Loading />;
  }

  if (error || !product) {
    return (
      <div className="w-full py-10 text-center text-3xl">محصولی پیدا نشد</div>
    );
  }
  return (
    <div className="mx-5 my-3 flex h-auto flex-row items-center justify-between px-3 max-sm:grid max-sm:place-items-center">
      <div className="w-100 place-items-center">
        <img
          src={`${product?.image}`}
          alt={`${product?.name}`}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = "/imgs/products/1.webp";
          }}
          className="size-70 object-cover"
        />
      </div>
      <div className="my-2 h-70 w-full">
        <p className="mx-5 mt-5 mb-3 text-2xl">{product?.name}</p>
        <p className="mx-5 border-t border-black/30 pt-10 text-lg">
          {" "}
          توضیحات: {product?.description}
        </p>
      </div>
      <div className="flex h-50 w-70 flex-col justify-center rounded-2xl bg-gray-200">
        <div className="m-2 flex h-40 flex-col">
          <p className=""> فروشنده ها:</p>
          <img
            src="/imgs/digiicon.svg"
            alt="digikalaicon"
            className="mt-1 size-32 h-10"
          />
          <div className="mt-2 w-full border-t border-black/20 pt-5 pl-2 text-end">
            <p>{product?.price.toLocaleString("fa-IR")} تومان</p>
          </div>
          {cartItem ? (
            <div className="mx-2 mt-5 flex flex-row items-center justify-evenly overflow-hidden rounded-xl border border-black/20 py-2.25">
              <button
                onClick={() => increase(product.id)}
                className="flex size-10 items-center justify-center text-[#ed1944]"
              >
                <PlusIcon className="size-5" />
              </button>
              <span className="flex size-10 items-center justify-center border-x border-black/10">
                {cartItem.quantity}
              </span>
              <button
                onClick={() => decrease(product.id)}
                className="flex size-10 items-center justify-center text-[#ed1944]"
              >
                <MinusIcon className="size-5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => addItem(product)}
              className="mx-2 mt-5 rounded-xl border border-[#ed1944] bg-[#ed1944] py-2 text-white"
            >
              افزودن به سبد
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
