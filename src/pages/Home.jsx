import About from "./About";
import "./Home.css";
import Homepart1 from "./Homepart1";


function Home() {
  return (
    <>
      <div className="container-fluid Homecon1">
        <Homepart1 />
        <About />
      </div>
    </>
  );
}

export default Home;