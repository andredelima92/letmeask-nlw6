import logoImg from "../assets/images/logo.svg";
import Button from "../components/Button";
import RoomCode from "../components/RoomCode";

import "../styles/room.scss";

const Room: React.FC = () => {
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode />
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea placeholder="O que você quer perguntar?" />

          <div className="form-footer">
            <span>
              Para enviar uma perguntar, <button>faça seu login</button>.
            </span>
            <Button type="submit">Enviar perguntar</Button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Room;