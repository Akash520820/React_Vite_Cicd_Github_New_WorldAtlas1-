import "./Home.css";
import Homepart1 from "./Homepart1";
import Homepart2 from "./Homepart2";

function Home() {
  return (
    <>
      <div className="container-fluid Homecon1">
        <Homepart1 />
        <Homepart2 />
      </div>
    </>
  );
}

export default Home;