const Fifth = () => {
  return (
    <section>
      <div className="min-h-[80vh] py-20 flex flex-col justify-center items-center gap-3 text-white text-lg font-bold">
        <h1>With all my love</h1>
        <h1 className="text-2xl mb-10">คนของเธอ</h1>
        <div className="rounded-sm  p-3 pb-10 bg-white hover:scale-105 transition-transform duration-300">
          <img
            className="rounded-sm w-72 h-full"
            src="/images/tonfon4.jpg"
            alt=""
          />
        </div>
        <h1 className=" mt-10">MADE WITH 💗 JUST FOR YOU</h1>
      </div>
    </section>
  );
};

export default Fifth;
