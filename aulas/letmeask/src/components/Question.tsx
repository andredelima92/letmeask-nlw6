import "../styles/question.scss";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
};

const Question: React.FC<QuestionProps> = ({ content, author }) => {
  return (
    <div className="question">
      <p>{content}</p>
      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
          <span>{author.name}</span>
        </div>
        <div></div>
      </footer>
    </div>
  );
};

export default Question;
