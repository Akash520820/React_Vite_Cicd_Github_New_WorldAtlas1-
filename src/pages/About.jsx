import "./About.css";
import CountryData from "../api/CountryData.json";


function About(){
  return(
    <>
    <div className="container-fluid AboutConf">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-10 Homepart2col1">
            <h1 className="Homepart2h1">Here are the Interesting Facts</h1>
            <h1 className="Homepart2h1">we're proud of</h1>
          </div>
        </div>
        
        <div className="row">
          {/* Country Cards from JSON data */}
          {CountryData.map((country)=>(<div key={country.id} className="col-lg-4 col-md-6 col-sm-12 homepart2col2">
              <div className="card  text-white border-white">
                <div className="card-body homepart2card">
                  <h5 className="card-title">{country.countryName}</h5>
                  <br />
                  <p>Capital: {country.capital}</p>
                  <p className="card-text">
                    Population: {country.population.toLocaleString()}
                  </p>
                  <p>Interesting Fact: {country.interestingFact}</p>
                </div>
              </div>
            </div>))}
        </div>
      </div>
    </div>
    </>
  )
}

export default About;