export default function Banner() {
  return (
    <div className="sticky top-0 z-5">
      <img
        src="/headerGif.gif"
        alt="word cup banner"
        className="h-15 w-full object-cover sm:hidden"
      />

      <img
        src="/imgs/image.png"
        alt="word cup banner"
        className="h-15 w-full object-cover max-sm:hidden"
      />
    </div>
  );
}
