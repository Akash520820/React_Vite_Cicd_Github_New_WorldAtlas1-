import { useLocation, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCountryData } from "../api/postApi";
import "./CountryDetails.css";

function CountryDetails() {
  const location = useLocation();
  const { countryName } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // First try to get data from navigation state
    if (location.state?.countryData) {
      setCountry(location.state.countryData);
    } else {
      // If no state data, fetch from API using country name
      fetchCountryDetails();
    }
  }, [countryName, location.state]);

  const fetchCountryDetails = async () => {
    setLoading(true);
    try {
      const res = await getCountryData();
      const foundCountry = res.data.find(
        c => c.name?.common?.toLowerCase() === countryName?.toLowerCase() ||
             c.cca2?.toLowerCase() === countryName?.toLowerCase()
      );
      setCountry(foundCountry || null);
    } catch (error) {
      console.error("Error fetching country details:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  if (loading) {
    return (
      <div className="country-details-loading">
        <div className="loading-spinner">Loading...</div>
      </div>
    );
  }

  if (!country) {
    return (
      <div className="country-details-error">
        <h2>Country not found</h2>
        <button onClick={handleBack} className="back-btn">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="country-details">
      <div className="container py-5">
        <button onClick={handleBack} className="back-btn mb-4">
          ← Back to Countries
        </button>
        
        <div className="country-details-card">
          <div className="row">
            <div className="col-md-6">
              <div className="flag-container">
                <img
                  src={country.flags?.png || country.flags?.svg}
                  alt={`${country.name?.common} flag`}
                  className="country-flag"
                />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="country-info">
                <h1 className="country-name">{country.name?.common}</h1>
                <h2 className="country-official-name">{country.name?.official}</h2>
                
                <div className="details-grid">
                  <div className="detail-item">
                    <strong>Capital:</strong>
                    <span>{country.capital ? country.capital.join(", ") : "N/A"}</span>
                  </div>
                  
                  <div className="detail-item">
                    <strong>Region:</strong>
                    <span>{country.region || "N/A"}</span>
                  </div>
                  
                  {country.subregion && (
                    <div className="detail-item">
                      <strong>Sub Region:</strong>
                      <span>{country.subregion}</span>
                    </div>
                  )}
                  
                  <div className="detail-item">
                    <strong>Population:</strong>
                    <span>{country.population ? country.population.toLocaleString() : "N/A"}</span>
                  </div>
                  
                  {country.area && (
                    <div className="detail-item">
                      <strong>Area:</strong>
                      <span>{country.area.toLocaleString()} km²</span>
                    </div>
                  )}
                  
                  {country.languages && (
                    <div className="detail-item">
                      <strong>Languages:</strong>
                      <span>{Object.values(country.languages).join(", ")}</span>
                    </div>
                  )}
                  
                  {country.currencies && (
                    <div className="detail-item">
                      <strong>Currencies:</strong>
                      <span>
                        {Object.values(country.currencies)
                          .map(curr => `${curr.name}${curr.symbol ? ` (${curr.symbol})` : curr.code ? ` (${curr.code})` : ''}`)
                          .join(", ")}
                      </span>
                    </div>
                  )}
                  
                  {country.timezones && (
                    <div className="detail-item">
                      <strong>Time Zones:</strong>
                      <span>{country.timezones.join(", ")}</span>
                    </div>
                  )}
                  
                  {country.idd && (country.idd.root || country.idd.suffixes) && (
                    <div className="detail-item">
                      <strong>Calling Code:</strong>
                      <span>
                        {country.idd.root && country.idd.suffixes ? 
                          `${country.idd.root}${country.idd.suffixes.join(", ")}` : 
                          country.idd.root || country.idd.suffixes?.join(", ") || "N/A"
                        }
                      </span>
                    </div>
                  )}
                  
                  {country.tld && (
                    <div className="detail-item">
                      <strong>Internet TLD:</strong>
                      <span>{country.tld.join(", ")}</span>
                    </div>
                  )}
                  
                  {country.car && (
                    <div className="detail-item">
                      <strong>Driving Side:</strong>
                      <span>{country.car.side === 'right' ? 'Right' : 'Left'}</span>
                    </div>
                  )}
                  
                  {country.continents && (
                    <div className="detail-item">
                      <strong>Continent:</strong>
                      <span>{country.continents.join(", ")}</span>
                    </div>
                  )}
                  
                  {country.startOfWeek && (
                    <div className="detail-item">
                      <strong>Start of Week:</strong>
                      <span>{country.startOfWeek.charAt(0).toUpperCase() + country.startOfWeek.slice(1)}</span>
                    </div>
                  )}
                  
                  {country.fifa && (
                    <div className="detail-item">
                      <strong>FIFA Code:</strong>
                      <span>{country.fifa}</span>
                    </div>
                  )}
                  
                  {country.cca2 && (
                    <div className="detail-item">
                      <strong>Country Code (Alpha-2):</strong>
                      <span>{country.cca2}</span>
                    </div>
                  )}
                  
                  {country.cca3 && (
                    <div className="detail-item">
                      <strong>Country Code (Alpha-3):</strong>
                      <span>{country.cca3}</span>
                    </div>
                  )}
                  
                  {country.ccn3 && (
                    <div className="detail-item">
                      <strong>Country Code (Numeric):</strong>
                      <span>{country.ccn3}</span>
                    </div>
                  )}
                  
                  {country.cioc && (
                    <div className="detail-item">
                      <strong>Olympic Code:</strong>
                      <span>{country.cioc}</span>
                    </div>
                  )}
                  
                  {country.independent !== undefined && (
                    <div className="detail-item">
                      <strong>Independent:</strong>
                      <span>{country.independent ? 'Yes' : 'No'}</span>
                    </div>
                  )}
                  
                  {country.unMember !== undefined && (
                    <div className="detail-item">
                      <strong>UN Member:</strong>
                      <span>{country.unMember ? 'Yes' : 'No'}</span>
                    </div>
                  )}
                  
                  {country.landlocked !== undefined && (
                    <div className="detail-item">
                      <strong>Landlocked:</strong>
                      <span>{country.landlocked ? 'Yes' : 'No'}</span>
                    </div>
                  )}
                  
                  {country.borders && country.borders.length > 0 && (
                    <div className="detail-item borders">
                      <strong>Border Countries:</strong>
                      <div className="border-countries">
                        {country.borders.map((border, index) => (
                          <span key={index} className="border-country">
                            {border}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {country.flags?.alt && (
                    <div className="detail-item">
                      <strong>Flag Description:</strong>
                      <span>{country.flags.alt}</span>
                    </div>
                  )}
                  
                  {country.coatOfArms && (country.coatOfArms.png || country.coatOfArms.svg) && (
                    <div className="detail-item">
                      <strong>Coat of Arms:</strong>
                      <div className="coat-of-arms">
                        <img 
                          src={country.coatOfArms.png || country.coatOfArms.svg} 
                          alt={`${country.name?.common} coat of arms`}
                          className="coat-of-arms-img"
                        />
                      </div>
                    </div>
                  )}
                  
                  {country.maps && (
                    <div className="detail-item">
                      <strong>Maps:</strong>
                      <div className="maps-links">
                        {country.maps.googleMaps && (
                          <a href={country.maps.googleMaps} target="_blank" rel="noopener noreferrer" className="map-link">
                            Google Maps
                          </a>
                        )}
                        {country.maps.openStreetMaps && (
                          <a href={country.maps.openStreetMaps} target="_blank" rel="noopener noreferrer" className="map-link">
                            OpenStreet Maps
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;