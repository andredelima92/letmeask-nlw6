import { FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import logoImg from "../assets/images/logo.svg";
import Button from "../components/Button";
import RoomCode from "../components/RoomCode";
import { useAuth } from "../hooks/useAuth";

import "../styles/room.scss";
import { database } from "../services/firebase";
import Question from "../components/Question";
import { useRoom } from "../hooks/useRoom";

type RoomParams = {
  id: string;
};

const Room: React.FC = () => {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState("");
  const { questions, title } = useRoom(roomId);

  async function handleSendQuestion(e: FormEvent) {
    e.preventDefault();
    if (newQuestion.trim() === "") return;

    if (!user) {
      return toast.error("You must be logged in.");
    }

    const question = {
      content: newQuestion,
      author: {
        name: user?.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    };

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion("");
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} perguntas</span>}
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />

          <div className="form-footer">
            <span>
              {!user ? (
                <>
                  Para enviar uma perguntar, <button>faça seu login</button>.
                </>
              ) : (
                <div className="user-info">
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </div>
              )}
            </span>
            <Button type="submit" disabled={!user}>
              Enviar perguntar
            </Button>
          </div>
        </form>

        <div className="question-list">
          {questions.map((question) => (
            <Question
              key={question.id}
              content={question.content}
              author={question.author}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Room;
