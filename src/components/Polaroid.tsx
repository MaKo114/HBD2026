const Polaroid = () => {
  const images = [
    {
      url: "/images/tonfon5.jpg",
      name: "Sexy Tonfon",
    },
    {
      url: "/images/tonfon13.png",
      name: "Young Tonfon",
    },
    {
      url: "/images/tonfon3.JPG",
      name: "We mirror1",
    },
    {
      url: "/images/tonfon4.jpg",
      name: "We mirror2",
    },
    {
      url: "/images/tonfon8.jpg",
      name: "Six Tonfon",
    },
    {
      url: "/images/tonfon9.jpg",
      name: "One Tonfon",
    },
    {
      url: "/images/tonfon10.jpg",
      name: "Four Tonfon",
    },
    {
      url: "/images/tonfon12.jpg",
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
          </div>
        );
      })}
    </div>
  );
};

export default Polaroid;
