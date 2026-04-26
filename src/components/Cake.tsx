<<<<<<< HEAD

const Cake = ({isLit}) => {
  return (
    <div className="relative w-[250px] h-[200px] mt-[-70px]">
        
        {/* Plate */}
        <div className="absolute w-[270px] h-[110px] bottom-[-10px] left-[-10px] bg-[#ccc] rounded-[50%] shadow-plate"></div>

        {/* Cake Layers */}
        <div className="absolute w-[250px] h-[100px] rounded-[50%] bg-chocolate shadow-cake-layer top-[66px]"></div>
        <div className="absolute w-[250px] h-[100px] rounded-[50%] bg-chocolate shadow-cake-layer top-[33px]"></div>
        <div className="absolute w-[250px] h-[100px] rounded-[50%] bg-chocolate shadow-cake-layer top-0"></div>

        {/* Icing */}
        <div className="absolute top-[2px] left-[5px] bg-vanilla w-[240px] h-[90px] rounded-[50%] z-[1]
                        before:content-[''] before:absolute before:inset-[4px_5px_6px_5px] before:bg-[#f5ecd9] 
                        before:shadow-[0_0_4px_#fcf7ed] before:rounded-[50%] before:z-[1]">
        </div>

        {/* Drips */}
        <div className="absolute top-[53px] left-[5px] w-[40px] h-[48px] bg-vanilla rounded-b-[25px] skew-y-[15deg]"></div>
        <div className="absolute top-[69px] left-[181px] w-[50px] h-[60px] bg-vanilla rounded-b-[25px] -skew-y-[15deg]"></div>
        <div className="absolute top-[54px] left-[90px] w-[80px] h-[60px] bg-vanilla rounded-b-[40px]"></div>

        {/* Candle */}
        <div className="absolute top-[-20px] left-1/2 -ml-[8px] w-[16px] h-[50px] bg-candle rounded-[8px/4px] z-10
                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[8px] 
                        before:bg-[#a6030f] before:rounded-[50%]">
          
          {/* Flame */}
          {isLit && (
            <div className="absolute top-[-34px] left-1/2 -ml-[7.5px] w-[15px] h-[35px] bg-orange-500 
                            rounded-[10px_10px_10px_10px_/_25px_25px_10px_10px] shadow-flame 
                            origin-[50%_90%] animate-flicker">
            </div>
          )}
        </div>

      </div>
  )
}

export default Cake
=======
const Cake = ({ isLit }) => {
  return (
    <div className="relative w-[250px] h-[200px] mt-[-70px]">
      {/* Plate */}
      <div className="absolute w-[270px] h-[110px] bottom-[-10px] left-[-10px] bg-[#ccc] rounded-[50%] shadow-plate"></div>

      {/* Cake Layers */}
      <div className="absolute w-[250px] h-[100px] rounded-[50%] bg-chocolate shadow-cake-layer top-[66px]"></div>
      <div className="absolute w-[250px] h-[100px] rounded-[50%] bg-chocolate shadow-cake-layer top-[33px]"></div>
      <div className="absolute w-[250px] h-[100px] rounded-[50%] bg-chocolate shadow-cake-layer top-0"></div>

      {/* Icing */}
      <div
        className="absolute top-[2px] left-[5px] bg-vanilla w-[240px] h-[90px] rounded-[50%] z-[1]
                        before:content-[''] before:absolute before:inset-[4px_5px_6px_5px] before:bg-[#f5ecd9] 
                        before:shadow-[0_0_4px_#fcf7ed] before:rounded-[50%] before:z-[1]"
      ></div>

      {/* Drips */}
      <div className="absolute top-[53px] left-[5px] w-[40px] h-[48px] bg-vanilla rounded-b-[25px] skew-y-[15deg]"></div>
      <div className="absolute top-[69px] left-[181px] w-[50px] h-[60px] bg-vanilla rounded-b-[25px] -skew-y-[15deg]"></div>
      <div className="absolute top-[54px] left-[90px] w-[80px] h-[60px] bg-vanilla rounded-b-[40px]"></div>

      {/* Candle */}
      <div
        className="absolute top-[-20px] left-1/2 -ml-[8px] w-[16px] h-[50px] bg-candle rounded-[8px/4px] z-10
                        before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[8px] 
                        before:bg-[#a6030f] before:rounded-[50%]"
      >
        <div className="absolute -top-[4px] left-1/2 -ml-[1.5px] w-[3px] h-[6px] bg-gray-900 z-0"></div>

        {/* Flame */}
        {isLit && (
          <div
            className="absolute top-[-34px] left-1/2 -ml-[7.5px] w-[15px] h-[35px] bg-orange-500 
                            rounded-[10px_10px_10px_10px_/_25px_25px_10px_10px] shadow-flame 
                            origin-[50%_90%] animate-flicker"
          ></div>
        )}
      </div>
    </div>
  );
};

export default Cake;
>>>>>>> a1d031f (fiexd: edit letter)
