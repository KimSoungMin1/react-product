import { Link } from "react-router-dom";

const Product = (props) => {
  let onchange = (e) => {
    props.setText(e.target.value);
  };
  return (
    <div>
      <h1>값을 입력받아서 페이지를 이동합니다</h1>
      <div className="flex">
        <input type="text" onChange={onchange} />
        <Link to={"/:" + props.text}>
          <li>페이지로 이동</li>
        </Link>
      </div>
    </div>
  );
};

export default Product;
