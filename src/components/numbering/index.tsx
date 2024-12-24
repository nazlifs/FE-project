import React from "react";

interface NumbersProps {
  currentQuestion: number;
  setCurrentQuestion: (id: number) => void;
  questions: { id: number }[];
}

const Numbers: React.FC<NumbersProps> = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
}) => {
  return (
    <div className="p-4 bg-gray-100 h-full">
      <h2 className="font-bold mb-2">Numbers</h2>
      <div className="grid grid-cols-5 gap-2">
        {questions.map((question) => (
          <button
            key={question.id}
            className={`p-2 border rounded ${
              currentQuestion === question.id
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
            onClick={() => setCurrentQuestion(question.id)}
          >
            {question.id}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Numbers;
