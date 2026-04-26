import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Speaker = () => {
  const [isPlaying, setIsPlaying] = useState(false); // เปลี่ยนจาก muted เป็น isPlaying
  const HBD_AUDIO_URL = "/audios/gift.mp3";
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(HBD_AUDIO_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      // สั่ง play() ตรงนี้หลังจากผู้ใช้คลิก Browser จะยอมให้เล่น
      audioRef.current
        .play()
        .catch((err) => console.error("เล่นเพลงไม่ได้:", err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={toggleAudio}
      className="bg-white fixed right-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full shadow-md backdrop-blur transition-transform hover:scale-110"
    >
      {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
    </button>
  );
};

export default Speaker;
