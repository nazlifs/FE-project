import React, { useState } from "react";
import Header from "../../../components/header_ujian";
import Numbers from "../../../components/numbering";
import Sessions from "../../../components/session_ujian";
// import Footer from "../../../components/footer_ujian";

const App: React.FC = () => {
  const sessions = [
    {
      id: 1,
      name: "Session 1",
      questions: [
        {
          id: 1,
          question: "Apa warna langit?",
          options: ["Biru", "Hijau", "Kuning", "Merah"],
        },
        {
          id: 2,
          question: "Berapa hasil 2 + 2?",
          options: ["3", "4", "5", "6"],
        },
        {
          id: 3,
          question: "Apa ibu kota Indonesia?",
          options: ["Jakarta", "Surabaya", "Bandung", "Medan"],
        },
      ],
    },
    {
      id: 2,
      name: "Session 2",
      questions: [
        {
          id: 1,
          question: "Siapa penemu bola lampu?",
          options: ["Newton", "Tesla", "Edison", "Einstein"],
        },
        {
          id: 2,
          question: "Bulan apa setelah April?",
          options: ["Juni", "Mei", "Maret", "Juli"],
        },
        {
          id: 3,
          question: "Negara mana yang memiliki Menara Eiffel?",
          options: ["Jerman", "Italia", "Perancis", "Spanyol"],
        },
      ],
    },
    {
      id: 3,
      name: "Session 3",
      questions: [
        {
          id: 1,
          question: "Hewan apa yang bisa terbang?",
          options: ["Ayam", "Kucing", "Elang", "Kuda"],
        },
        {
          id: 2,
          question: "Berapa sisi segitiga?",
          options: ["3", "4", "5", "6"],
        },
        {
          id: 3,
          question: "Siapa presiden pertama Indonesia?",
          options: ["Soekarno", "Soeharto", "Jokowi", "Habibie"],
        },
      ],
    },
  ];

  const [currentSession, setCurrentSession] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const currentQuestions =
    sessions.find((s) => s.id === currentSession)?.questions || [];
  const currentQuestionData = currentQuestions.find(
    (q) => q.id === currentQuestion
  );

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-grow">
        <div className="w-1/4 bg-gray-200">
          <Numbers
            currentQuestion={currentQuestion}
            setCurrentQuestion={setCurrentQuestion}
            questions={currentQuestions}
          />
        </div>
        <div className="flex-grow p-4 bg-white">
          {currentQuestionData ? (
            <div>
              <h2 className="text-xl font-bold">
                {currentQuestionData.question}
              </h2>
              <ul className="mt-4">
                {currentQuestionData.options.map((option, index) => (
                  <li key={index} className="mb-2">
                    <button
                      className={`p-2 border rounded w-full ${
                        selectedAnswer === option
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 hover:bg-gray-200"
                      }`}
                      onClick={() => handleAnswerSelect(option)}
                    >
                      {option}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between absolute  bottom-0">
                <button className="bg-gray-200 hover:bg-gray-300 p-3 rounded-md ">
                  Kembali
                </button>
                <button>Berikutnya</button>
              </div>
            </div>
          ) : (
            <p className="text-red-600 font-bold">
              Pertanyaan tidak ditemukan. Silakan periksa sesi atau nomor
              pertanyaan.
            </p>
          )}
        </div>
        <div className="w-1/4 bg-gray-200">
          <Sessions
            sessions={sessions}
            currentSession={currentSession}
            setCurrentSession={setCurrentSession}
          />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
