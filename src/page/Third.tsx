import Envelop from "../components/Envelop";

interface ThirdProps {
  isRead: boolean;
  setIsRead: React.Dispatch<React.SetStateAction<boolean>>;
}

const Third = ({ isRead, setIsRead }: ThirdProps) => {
  return (
    <section className="min-h-[80vh] py-20 flex flex-col justify-center items-center  ">
      <div className="text-lg font-bold text-white">
        <h1 className="text-center">A LETTER</h1>
        <p className="text-2xl text-center">จดหมายถึงเธอ</p>
      </div>
      <button className="mt-10" onClick={() => setIsRead(!isRead)}>
        <Envelop isRead={isRead} />
      </button>
    </section>
  );
};

export default Third;
