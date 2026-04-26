import { useState, useRef } from "react";

import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Speaker from "../components/Speaker";

const Index = () => {
  const [isLit, setIsLit] = useState<boolean>(true);
  const [isRead, setIsRead] = useState<boolean>(true);
  const section2 = useRef<HTMLElement>(null);

  const scrollHandler = () => {
    section2.current?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  };

  return (
    <div className="bg-linear-to-b from-[#f2a6c3] via-[#ed7ea5] to-[#de5a80] min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4">
      {/* ข้อความด้านบน */}

      <Speaker/>

      {/* first section */}
      <First isLit={isLit} setIsLit={setIsLit} scrollHandler={scrollHandler} />

      {/* second section */}
      <Second section2={section2!} />

      {/* thrid section */}
      <Third isRead={isRead} setIsRead={setIsRead} />

      {/* fouth section picture*/}
      <Fourth />
    </div>
  );
};

export default Index;
