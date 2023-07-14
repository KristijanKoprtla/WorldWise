import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

function Homepage() {
  return (
    <div className="homepage">
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="/pricing">Pricing</Link>
      <Link to="/product">Product</Link>
    </div>
  );
}

export default Homepage;
