import confetti from "canvas-confetti";


export function burstConfetti() {
    const colors = ["#f5b7c0", "#f7d6a8", "#e6c8f0", "#fff1d6", "#f29eb0"];

    // ยิงครั้งแรกตรงกลาง
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors,
      scalar: 0.9,
    });

    // ยิงซ้ายขวาตามมา
    setTimeout(() => {
      confetti({
        particleCount: 60,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 60,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
    }, 250);
  };