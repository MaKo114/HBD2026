const Envelop = ({ isRead }: { isRead: boolean }) => {
  const letter = {
    text: "สุขสันต์วันเกิดนะครับอ้วน ขอให้เธอมีความสุขมากๆเลยนะ ประสบความสำเร็จในทุกอย่าง อยากให้เธอยิ้มเยอะๆ เธอเป็นคนที่เก่งมาก เก่งที่สุดเลย เค้าคอยเป็นกำลังใจให้เสมอเลย รอที่เราจะได้อยู่ด้วยกันนะ เค้ารักอ้วนนะครับ🫶🏻",
  };
  return (
    <div className="group h-50 w-80 md:h-50 md:w-100 perspective-[1000px]">
      <div
        className={`relative h-full w-full transition-all duration-700 transform-3d ${
          isRead ? "transform-[rotateY(180deg)]" : ""
        }`}
      >
        <div className="flex absolute inset-0 h-full w-full rounded-2xl bg-white p-4 backface-hidden">
          <p className="self-center text-gray-600 text-base md:text-lg">
            {letter.text}
          </p>
        </div>

        <div className="absolute inset-0 h-full w-full rounded-2xl bg-white transform-[rotateY(180deg)] backface-hidden flex justify-center items-center">
          <img
            className="size-14 md:size-20"
            src="https://em-content.zobj.net/source/discord/448/pink-heart_1fa77.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Envelop;
