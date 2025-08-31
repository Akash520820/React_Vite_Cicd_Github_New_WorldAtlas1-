import "./Homepart1.css";

function Homepart1(){
  return(
    <>
    <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-12 homecol1">
              <h1 className="homeh1">
                Exploring the World, One Country at a Time
              </h1>
              <p className="homep1">
                Discover the history, culture, and beauty of every nation. Sort,
                search, and filter through countries to find the details you need.
              </p>
              <button className="btn bg-transparent text-white border-white rounded-pill px-4 homebtn1">
                Start Exploring ➞
              </button>
            </div>
            <div className="col-lg-6 col-sm-12 d-flex justify-content-center justify-content-lg-end">
              <img
                src="https://images.pexels.com/photos/335394/pexels-photo-335394.jpeg"
                alt="World Map"
                className="img-fluid rounded shadow homecol2img"
              />
            </div>
          </div>
        </div>
    </>
  )
}
export default Homepart1;

