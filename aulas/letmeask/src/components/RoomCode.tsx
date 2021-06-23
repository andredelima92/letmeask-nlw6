import copyImg from "../assets/images/copy.svg";

import "../styles/room-code.scss";

const RoomCode: React.FC = () => {
  return (
    <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #644131654as</span>
    </button>
  );
};

export default RoomCode;
