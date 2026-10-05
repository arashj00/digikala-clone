import {
  ShoppingCartIcon,
  ArrowLeftEndOnRectangleIcon,
  BellIcon,
  MagnifyingGlassIcon,
  UserIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useMemo, useState, useRef } from "react";
import { useProductStore } from "../store/productStore";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/cartStore";
import { useLoginStore } from "../store/loginStore";
import HeaderB from "../components/header/HeaderB";

function Header() {
  const { products } = useProductStore();
  const loggedIN = useLoginStore((s) => s.loggedIN);
  const logout = useLoginStore((s) => s.logout);
  //searching bar
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchRes = useMemo(() => {
    const query = searchText.trim().toLocaleLowerCase();

    if (!query) return [];
    return products
      .filter((products) => {
        const searchableItem = [
          products.name,
          products.category,
          products.subCategory,
        ]
          .join(" ")
          .toLocaleLowerCase();
        return searchableItem.includes(query);
      })
      .slice(0, 4);
  }, [searchText, products]);
  //card
  const [isCardPopOpen, setisCardPopOpen] = useState(false);
  const hoverTimeout = useRef(null);

  //card store
  const totalItems = useCartStore((state) => state.totalItems());
  const items = useCartStore((state) => state.items);
  const increase = useCartStore((state) => state.increase);
  const decrease = useCartStore((state) => state.decrease);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);
  //

  //user popup
  const [isUserPopUpOpen, setIsUserPopUpOpen] = useState(false);
  const user = useLoginStore((s) => s.user);
  const userPopUpHandel = () => {
    setIsUserPopUpOpen(true);
    if (isUserPopUpOpen) {
      setIsUserPopUpOpen(false);
    }
  };
  const userPhone = parseInt(user?.phone);
  //
  return (
    <div className="sticky top-15 z-5 h-28 bg-white">
      <div className="headerT flex h-7/12 flex-row items-center justify-between">
        <div className="mr-5 flex h-9/12 flex-row items-center justify-center">
          <Link className="max-lg:hidden" to={"/"}>
            <img src="/imgs/digiicon.svg" alt="digikala" className="size-52" />
          </Link>
          <div
            className={`searchBar relative z-20 mr-6 flex h-11/12 w-123 flex-row items-center rounded-4xl bg-gray-200/70 transition-all duration-200 hover:bg-gray-200/85 max-lg:mr-0 max-md:w-90 max-sm:w-63`}
          >
            <MagnifyingGlassIcon className="mr-4 size-7 text-black/50" />
            <input
              onClick={() => {
                setIsSearchOpen(true);
              }}
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              type="text"
              name="search"
              id="search"
              placeholder="جستجو"
              className="h-7 w-full px-3 text-right outline-0"
            />
            <img
              src="/imgs/digiicon.svg"
              alt="digikala"
              className={`pointer-events-none absolute size-35 -translate-x-28 transition duration-200 max-sm:hidden lg:hidden ${isSearchOpen && "opacity-0"}`}
            />
            <img
              src="/icons/digiShortIcon.svg"
              alt="digikala"
              className={`pointer-events-none absolute size-14 -translate-x-28 transition duration-200 sm:hidden ${isSearchOpen && "opacity-0"}`}
            />
          </div>
        </div>
        <div className="mr-3 ml-5 flex flex-row items-center justify-between max-sm:mx-4">
          <button className="hidde min-[552px]:block">
            <BellIcon className="ml-5 size-7 transition-all duration-200 hover:text-amber-500 max-sm:ml-2 max-sm:hidden" />
          </button>
          {loggedIN ? (
            <div className="relative rounded-lg p-1">
              <span onClick={userPopUpHandel}>
                <UserIcon className="size-7 transition-colors hover:text-[#ed1944]" />
              </span>
              <div
                className={`userPopUp absolute h-auto w-45 translate-x-37 translate-y-1 rounded-xl border border-black/15 bg-white shadow-[0px_7px_20px_rgba(0,0,0,0.2)] transition-all ${!isUserPopUpOpen && "opacity-0"}`}
              >
                <div className="mx-2 my-1 h-10">
                  <p className="text-right">{user?.fullName}</p>
                  <p className="mt-1 border-b border-black/20 text-right text-[13px] text-black/60">
                    {userPhone?.toLocaleString("fa-IR", { useGrouping: false })}
                  </p>
                </div>
                <div>
                  <button className="my-3 h-full w-full" onClick={logout}>
                    <p className="transition-all duration-250 hover:text-[#ed1944]">
                      خروج از حساب کاربری
                    </p>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Link
              to={`/login`}
              className="flex flex-row gap-1 rounded-lg border border-black/30 px-3 py-1 text-sm font-bold"
            >
              <span>
                <ArrowLeftEndOnRectangleIcon className="size-6" />
              </span>
              <p className="pt-1 max-sm:hidden">ورود | ثبت نام</p>
            </Link>
          )}

          <Link
            onMouseEnter={() => {
              clearTimeout(hoverTimeout.current);
              hoverTimeout.current = setTimeout(() => {
                setisCardPopOpen(true);
              }, 350);
            }}
            onMouseLeave={() => {
              clearTimeout(hoverTimeout.current);
              hoverTimeout.current = setTimeout(() => {
                setisCardPopOpen(false);
              }, 150);
            }}
            onClick={() => {
              setisCardPopOpen(false);
            }}
            to={`/card`}
            className="cardicon relative py-1.25"
          >
            <ShoppingCartIcon className="mr-6 size-7 transition-all max-sm:mr-1" />
            {totalItems > 0 && (
              <span className="absolute -top-1 right-4 flex size-5 items-center justify-center rounded-full bg-[#ed1944] text-xs text-white">
                {totalItems}
              </span>
            )}
          </Link>

          <div
            onMouseEnter={() => {
              clearTimeout(hoverTimeout.current);
              hoverTimeout.current = setTimeout(() => {
                setisCardPopOpen(true);
              }, 400);
            }}
            onMouseLeave={() => {
              clearTimeout(hoverTimeout.current);
              hoverTimeout.current = setTimeout(() => {
                setisCardPopOpen(false);
              }, 100);
            }}
            className={`cardPopup fixed top-28 left-3 w-120 max-w-[calc(100vw-1.5rem)] rounded-3xl bg-white shadow-[0px_7px_20px_rgba(0,0,0,0.2)] transition-all duration-200 ${isCardPopOpen ? "opacity-100" : "cal pointer-events-none scale-90 opacity-0"}`}
          >
            {items.length === 0 ? (
              <div
                dir="rtl"
                className="mx-auto flex min-h-96 w-11/12 flex-col items-center justify-center gap-5 text-center"
              >
                <ShoppingCartIcon className="size-20 text-black/30" />
                <h1 className="text-2xl font-bold">سبد خرید شما خالی است</h1>
                <p className="text-black/60">
                  برای شروع خرید، از دسته‌بندی‌ها یک محصول انتخاب کنید.
                </p>
              </div>
            ) : (
              <div
                dir="rtl"
                className="mx-auto my-6 flex w-11/12 flex-col items-center gap-5"
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

                  <div className="max-h-80 overflow-y-auto">
                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="flex h-40 flex-row items-center justify-between gap-4 border-b border-black/10 bg-white py-4"
                      >
                        <Link
                          to={`/product/${item.id}`}
                          className="flex flex-row items-center gap-4"
                        >
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

                        <div className="flex flex-row items-center gap-1">
                          <div className="flex h-10 flex-row items-center overflow-hidden rounded-xl border border-black/20">
                            <button
                              onClick={() => increase(item.id)}
                              className="flex size-8 items-center justify-center text-[#ed1944]"
                            >
                              <PlusIcon className="size-5" />
                            </button>
                            <span className="flex size-8 items-center justify-center border-x border-black/10">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => decrease(item.id)}
                              className="flex size-8 items-center justify-center text-[#ed1944]"
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
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* button header import */}
      <HeaderB />
      {/* // */}

      <div
        onClick={() => {
          setIsSearchOpen(false);
        }}
        className={`searchBar fixed inset-0 z-15 bg-black/30 backdrop-blur-[2px] transition-all ${isSearchOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={`mx-59 mt-14.75 w-131 max-w-[calc(100vw-1rem)] rounded-4xl bg-white p-5 transition-all ease-in max-lg:mx-1 max-md:w-98 ${isSearchOpen ? "opacity-100 " : "pointer-events-none scale-95 opacity-0"}`}
        >
          <div className="h-11"></div>
          {!searchText.trim() && (
            <p className="py-8 text-center text-gray-500">
              نام کالا، دسته یا برند را وارد کنید.
            </p>
          )}

          {searchText.trim() && searchRes.length === 0 && (
            <p className="py-8 text-center text-gray-500">محصولی پیدا نشد.</p>
          )}

          <div className="flex flex-col gap-2 divide-y divide-black/20">
            {searchRes.map((p) => (
              <Link
                key={p.id}
                to={`/product/${p.id}`}
                onClick={() => {
                  setIsSearchOpen(false);
                }}
                className="transition-all hover:scale-102 hover:rounded-3xl hover:shadow-2xl"
              >
                <div className="my-2 flex flex-row justify-around">
                  <img
                    className="size-20 rounded-md object-contain"
                    src={p.image}
                    alt={p.name}
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = "/imgs/products/1.webp";
                    }}
                  />
                  <div className="mx-1 flex-1 flex-row items-center justify-center">
                    <p className="mt-1">{p.name}</p>
                    <p className="mt-0 text-end text-black/70">
                      {p.price.toLocaleString("fa-IR")} تومان
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
