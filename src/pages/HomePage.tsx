import { PageNav } from "../components/PageNav";
import { Link } from "react-router-dom";
export const HomePage = () => {
  return (
    <>
      <PageNav />
      <h1>WorldWise</h1>
      <Link to="app">Go to App</Link>
    </>
  );
};
