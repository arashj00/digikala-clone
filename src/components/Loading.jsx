export default function Loading () {
  return (
      <div className="absolute z-50 flex h-full w-full bg-black/30 backdrop-blur-[3px]">
        <div className="m-auto flex size-60 items-center justify-center rounded-2xl bg-white text-2xl shadow-2xl">
          در حال بار گذاری
        </div>
      </div>
    );
}