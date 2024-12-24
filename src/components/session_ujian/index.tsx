import React from "react";

interface SessionsProps {
  sessions: { id: number; name: string }[];
  currentSession: number;
  setCurrentSession: (id: number) => void;
}

const Sessions: React.FC<SessionsProps> = ({
  sessions,
  currentSession,
  setCurrentSession,
}) => {
  return (
    <div className="p-4 bg-gray-100 h-full">
      <h2 className="font-bold mb-2">Sessions</h2>
      <div>
        {sessions.map((session) => (
          <button
            key={session.id}
            className={`p-2 mb-2 border rounded w-full ${
              currentSession === session.id
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
            onClick={() => setCurrentSession(session.id)}
          >
            {session.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sessions;
