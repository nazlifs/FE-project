import Sidebar from "../../../components/sidebar_admin";

const Hero = () => {
  const quiz = [
    { id: 1, title: "peserta" },
    { id: 2, title: "jadwal" },
    { id: 3, title: "hasil" },
  ];

  const quizes = [
    { id: 1, tittle: "grafik" },
    { id: 2, tittle: "blank" },
  ];

  return (
    <div className="flex">
      <Sidebar />
      <div className="p-8 w-full flex-1 flex flex-col bg-gray-100">
        <h1 className="text-3xl mb-4 text-left font-bold">Dashboard</h1>
        <div className="border-t-2 border-gray-300 my-5 w-full"></div>
        <div className="grid grid-cols-3 gap-3 my-3">
          {quiz.map((item) => (
            <div
              key={item.id}
              className="bg-white h-56 shadow-md rounded-lg p-4 flex justify-center items-center text-center"
            >
              <h2 className="text-lg font-semibold">{item.title}</h2>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4">
          {quizes.map((items) => (
            <div
              key={items.id}
              className="bg-white h-56 shadow-md rounded-lg p-4 flex justify-center items-center text-center"
            >
              <h2 className="text-lg font-semibold">{items.tittle}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
