const Polaroid = () => {
  const images = [
<<<<<<< HEAD
    
    {
      url: "/tonfon1.jpg",
      name: "Sexy Tonfon",
    },
    {
      url: "/tonfon2.jpg",
=======
    {
      url: "/tonfon5.jpg",
      name: "Sexy Tonfon",
    },
    {
      url: "/tonfon13.png",
>>>>>>> a1d031f (fiexd: edit letter)
      name: "Young Tonfon",
    },
    {
      url: "/tonfon3.JPG",
      name: "We mirror1",
    },
    {
      url: "/tonfon4.jpg",
      name: "We mirror2",
    },
<<<<<<< HEAD

  ];


  return (
    // ปรับ Container ให้ดูมีพื้นที่และสมดุลมากขึ้น
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 max-w-2xl mx-auto p-4">
      {images.map((img, index) => {
        return (
          // 1. ตัวกรอบ Polaroid (Polaroid Frame)
          <div 
            className="bg-white p-3 pb-10 shadow-md rounded-sm border border-gray-100 aspect-6/10 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105 cursor-pointer"
            key={index} 
          >
            {/* 2. พื้นที่รูปภาพ (Image Container) */}
            <div className="w-full h-full overflow-hidden bg-gray-50 flex items-center justify-center rounded-sm">
              <img 
                className="w-full h-full object-cover" 
                src={img.url} 
                alt={img.name} 
              />
            </div>
            
           
=======
    {
      url: "/tonfon8.jpg",
      name: "Six Tonfon",
    },
    {
      url: "/tonfon9.jpg",
      name: "One Tonfon",
    },
    {
      url: "/tonfon10.jpg",
      name: "Four Tonfon",
    },
    {
      url: "/tonfon12.jpg",
      name: "Two Tonfon",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 max-w-2xl mx-auto p-4">
      {images.map((img, index) => {
        return (
          <div
            className="bg-white p-3 pb-10 shadow-md rounded-sm border border-gray-100 aspect-6/10 flex flex-col items-center justify-between transition-transform duration-300 hover:scale-105 cursor-pointer"
            key={index}
          >
            <div className="w-full h-full overflow-hidden bg-gray-50 flex items-center justify-center rounded-sm">
              <img
                className="w-full h-full object-cover"
                src={img.url}
                alt={img.name}
              />
            </div>
>>>>>>> a1d031f (fiexd: edit letter)
          </div>
        );
      })}
    </div>
  );
};

<<<<<<< HEAD
export default Polaroid;
=======
export default Polaroid;
>>>>>>> a1d031f (fiexd: edit letter)
