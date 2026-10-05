import ManualSlider from "../components/manualSlider";
import Slider from "../components/Slider";

export default function HomeP() {
  return (
    <>
      <div className="flex-1">
        <Slider />
      </div>
      <div className="mainBody flex h-auto w-full flex-col items-center border-purple-700">
        <div className="scaledBody flex h-auto w-85/100 flex-col gap-5 border-emerald-500 max-sm:w-full">
          <div className="mt-5 flex flex-row justify-around">
            <button className="flex flex-col items-center justify-center gap-1">
              <img
                src="/icons/homePage1/1.webp"
                alt=""
                className="size-12 text-sm"
              />
              سوپر مارکت
            </button>
            <button className="flex flex-col items-center justify-center gap-1 text-sm">
              <img src="/icons/homePage1/2.webp" alt="" className="size-12" />
              بفرمایید جام
            </button>
            <button className="flex flex-col items-center justify-center gap-1 text-sm">
              <img src="/icons/homePage1/3.webp" alt="" className="size-12" />
              ارسال سه ساعته
            </button>
            <button className="flex flex-col items-center justify-center gap-1 text-sm">
              <img src="/icons/homePage1/4.webp" alt="" className="size-12" />
              وام بانکی
            </button>
          </div>
          <div className="mb-8 flex h-52 w-full flex-col items-center justify-evenly rounded-2xl border-2 border-gray-300 max-sm:rounded-none">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl">محبوب ترین برند ها</h1>
            </div>
            <ManualSlider />
          </div>
        </div>
      </div>
    </>
  );
}
