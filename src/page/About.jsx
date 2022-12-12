import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  const onClickImg = () => {
    navigate(`/`);
  };
  return (
    <div>
      <p>아래 버튼을 누르면 Home으로 돌아갑니다</p>
      <button onClick={onClickImg}>Home으로가기</button>
    </div>
  );
};

export default About;
