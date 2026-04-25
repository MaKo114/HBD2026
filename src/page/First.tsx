import Cake from "../components/Cake";
import { burstConfetti } from "../functions/burstfetti";

interface FirstProps {
  isLit: boolean;
  setIsLit: React.Dispatch<React.SetStateAction<boolean>>;
  scrollHandler: () => void;
}

const First = ({ isLit, setIsLit, scrollHandler }: FirstProps) => {
  const clickCake = () => {
    if (isLit) {
      setIsLit(false);
      burstConfetti(); // เรียกใช้ฟังก์ชันพลุตอนดับเทียน
    }
  };
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <div className="mb-40 text-white font-bold text-lg uppercase tracking-widest text-center">
        <div className="flex flex-col animate-pulse">
          <h1>A LITTLE SOMETHING FOR YOU</h1>
          <h1 className="text-2xl">กดที่เค้กเพื่อเป่าเทียน</h1>
        </div>
      </div>

      {/* ตัวเค้ก */}
      <button
        onClick={clickCake}
        className={`transition-all duration-500 transform ${isLit ? "hover:scale-105" : "cursor-default"}`}
        disabled={!isLit}
      >
        <Cake isLit={isLit} />
      </button>

      {/* ปุ่มกดไปต่อ */}
      <div className="h-24 mt-20 flex items-center justify-center">
        {isLit ? (
          <div className="flex flex-col justify-center text-lg text-white">
            หลับตา อธิษฐาน แล้วกดเลย
          </div>
        ) : (
          <div className="flex flex-col justify-center text-lg  text-white gap-5">
            <span>ขอให้พรเป็นจริงนะ</span>
            <button
              className="px-8 py-3 bg-white text-[#de5a80] rounded-full font-bold shadow-xl 
              hover:bg-opacity-90 transition-all animate-fade-in hover:bg-gray-100"
              onClick={scrollHandler}
            >
              เริ่มอ่าน
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default First;
