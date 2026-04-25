import type { RefObject } from "react";

interface SecondProps {
  section2: RefObject<HTMLElement>;
}

const Second = ({ section2 }: SecondProps) => {
  return (
    <section
      className="min-h-screen flex justify-center items-center "
      ref={section2}
    >
      <div className="flex flex-col justify-center ">
        <div className="flex flex-col justify-center items-center gap-3 text-lg font-bold text-white ">
          <h1>Happy Birthday 🎂</h1>
          <h1 className="text-2xl">อ้วนของเค้า</h1>
        </div>
        <p className="mt-4 px-24 md:max-w-3xl text-base md:text-lg text-gray-100 text-center">
          วันนี้คือวันพิเศษของคนพิเศษ ขอให้ทุกวันของเธอเต็มไปด้วยรอยยิ้มนะ😘
        </p>
      </div>
    </section>
  );
};

export default Second;
