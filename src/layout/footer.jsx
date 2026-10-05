import { ChevronLeftIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { About } from "../components/aboutData";
import { useState } from "react";

export default function Footer() {
  const [aboutShow, setAboutShow] = useState(false);
  return (
    <div className="flex h-auto w-full flex-col items-center justify-start border-t-2 border-gray-200">
      <div className="mt-8 flex w-93/100 flex-col">
        <div className="flex h-16 flex-row items-center justify-between max-sm:flex-col max-sm:gap-5 max-sm:h-auto max-sm:mb-4">
          <img
            src="/imgs/digiicon.svg"
            alt="digikala"
            className="size-52 h-full"
          />
          <button
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex order-first h-8/12 flex-row items-center gap-1 rounded-2xl border-2 border-black/20 px-4 text-black/60"
          >
            بازگشت به بالا
            <ChevronUpIcon className="size-5" />
          </button>
        </div>
        <div className="max-sm:text-center">
          تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱ | ۰۲۱-۹۱۰۰۰۱۰۰ | ۷ روز هفته، ۲۴ ساعته
          پاسخگوی شما هستیم
        </div>
      </div>
      <div className="mt-10 flex min-h-20 w-99/100 flex-row justify-around max-md:grid max-md:grid-cols-2">
        <div className="flex flex-col items-center justify-center text-sm">
          <img src="/icons/footer/express-delivery.svg" alt="express" />
          امکان تحویل اکسپرس
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <img src="/icons/footer/cash-on-delivery.svg" alt="cash" />
          امکان پرداخت در محل
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <img src="/icons/footer/support.svg" alt="support" />7 روزهفته . 24
          ساعته
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <img src="/icons/footer/days-return.svg" alt="return" />
          هفت روز ضمانت بازگشت کالا
        </div>
        <div className="flex flex-col items-center justify-center text-sm">
          <img src="/icons/footer/original-products.svg" alt="original" />
          ضمانت اصل بودن کالا
        </div>
      </div>
      <div className="my-10 w-93/100">
        <div
          className={`relative flex h-50 flex-col overflow-hidden ${aboutShow && "h-auto"}`}
        >
          <About />
          {aboutShow === false && (
            <div className="absolute top-0 h-full w-full bg-linear-to-b from-transparent to-white to-103%"></div>
          )}
        </div>
        <button
          onClick={() => {
            aboutShow === true ? setAboutShow(false) : setAboutShow(true);
          }}
          className="mt-2 flex flex-row rounded-2xl bg-white px-5 py-1 text-blue-700"
        >
          {aboutShow === false ? "مشاهده بیشتر" : "بستن"}
          <ChevronLeftIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}
