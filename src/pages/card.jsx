import { Link } from "react-router-dom";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "../store/cartStore";

export default function CardP() {
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalPrice = useCartStore((state) => state.totalPrice());

  if (items.length === 0) {
    return (
      <div
        dir="rtl"
        className="mx-auto flex min-h-96 w-11/12 flex-col items-center justify-center gap-5 text-center"
      >
        <ShoppingCartIcon className="size-20 text-black/30" />
        <h1 className="text-2xl font-bold">سبد خرید شما خالی است</h1>
        <p className="text-black/60">
          برای شروع خرید، از دسته‌بندی‌ها یک محصول انتخاب کنید.
        </p>
        <Link
          to="/"
          className="rounded-xl bg-[#ed1944] px-6 py-2 text-white transition hover:bg-[#d9153d]"
        >
          بازگشت به صفحه اصلی
        </Link>
      </div>
    );
  }

  return (
    <div
      dir="rtl"
      className="mx-auto my-6 flex w-11/12 flex-row gap-5 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center justify-between border-b border-black/10 pb-3">
          <h1 className="text-2xl font-bold">سبد خرید</h1>
          <button
            onClick={clearCart}
            className="rounded-lg border border-[#ed1944] px-4 py-2 text-sm text-[#ed1944] transition hover:bg-[#ed1944] hover:text-white"
          >
            خالی کردن سبد
          </button>
        </div>

        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-row items-center justify-between gap-4 border-b border-black/10 bg-white py-4"
          >
            <Link className="flex flex-row items-center gap-4" to={`/product/${item.id}`}>

              <img
                src={item.image}
                alt={item.name}
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = "/imgs/products/1.webp";
                }}
                className="size-28 rounded-xl object-contain"
              />
              <div className="flex flex-col gap-2">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-black/60">
                  {item.price.toLocaleString("fa-IR")} تومان
                </p>
              </div>
            </Link>

            <div className="flex flex-row items-center gap-4">
              <div className="flex h-10 flex-row items-center overflow-hidden rounded-xl border border-black/20">
                <button
                  onClick={() => increase(item.id)}
                  className="flex size-10 items-center justify-center text-[#ed1944]"
                >
                  <PlusIcon className="size-5" />
                </button>
                <span className="flex size-10 items-center justify-center border-x border-black/10">
                  {item.quantity}
                </span>
                <button
                  onClick={() => decrease(item.id)}
                  className="flex size-10 items-center justify-center text-[#ed1944]"
                >
                  <MinusIcon className="size-5" />
                </button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="rounded-lg p-2 text-black/50 transition hover:bg-red-50 hover:text-[#ed1944]"
              >
                <TrashIcon className="size-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <aside className="h-fit w-80 rounded-xl border border-black/10 p-4 max-lg:m-auto">
        <div className="flex items-center justify-between border-b border-black/10 pb-3">
          <span className="text-black/60">مبلغ قابل پرداخت</span>
          <strong>{totalPrice.toLocaleString("fa-IR")} تومان</strong>
        </div>
        <button className="mt-4 w-full rounded-xl bg-[#ed1944] py-3 text-white transition hover:bg-[#d9153d]">
          ادامه فرایند خرید
        </button>
      </aside>
    </div>
  );
}
