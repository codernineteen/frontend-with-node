import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The products page</h1>
      <ul>
        <li>
          <Link to="/products/p1">product 1</Link>
        </li>
        <li>
          <Link to="products/p2">product 2</Link>
        </li>
        <li>
          <Link to="products/p3">product 3</Link>
        </li>
      </ul>
    </section>
  );
};

export default Welcome;
