import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "./Loader";
import "./Country.css";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countriesData, setCountriesData] = useState([]);

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountriesData(res.data);
    });
  }, []);

  if (isPending) {
    return (
      <div className="Countrymaincon">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ minHeight: "100vh" }}
        >
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid Countrymaincon">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Countries of the World</h1>
          </div>
        </div>

        <div className="row g-4">
          {countriesData && countriesData.length > 0 ? (
            countriesData.map((country, index) => (
              <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                <div className="card h-100 country-card">
                  <img
                    src={
                      country.flags?.png ||
                      country.flags?.svg ||
                      "https://via.placeholder.com/300x200?text=No+Flag&bg=333&color=fff"
                    }
                    className="card-img-top"
                    alt={`${country.name?.common || "Unknown"} flag`}
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">
                      {country.name?.common || "Unknown Country"}
                    </h5>
                    <div className="card-text flex-grow-1">
                      <p className="mb-2">
                        <strong>Official Name:</strong>{" "}
                        {country.name?.official || "N/A"}
                      </p>
                      <p className="mb-2">
                        <strong>Capital:</strong>{" "}
                        {country.capital ? country.capital.join(", ") : "N/A"}
                      </p>
                      <p className="mb-2">
                        <strong>Region:</strong> {country.region || "N/A"}
                      </p>
                      <p className="mb-2">
                        <strong>Population:</strong>{" "}
                        {country.population
                          ? country.population.toLocaleString()
                          : "N/A"}
                      </p>
                      <p className="mb-2">
                        <strong>Area:</strong>{" "}
                        {country.area
                          ? `${country.area.toLocaleString()} km²`
                          : "N/A"}
                      </p>
                      <p className="mb-2">
                        <strong>Languages:</strong>{" "}
                        {country.languages
                          ? Object.values(country.languages).join(", ")
                          : "N/A"}
                      </p>
                      <p className="mb-2">
                        <strong>Currencies:</strong>{" "}
                        {country.currencies
                          ? Object.values(country.currencies)
                              .map((curr) => curr.name)
                              .join(", ")
                          : "N/A"}
                      </p>
                    </div>
                    <div className="mt-auto">
                      <a
                        href={country.maps?.googleMaps || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary w-100"
                      >
                        View on Map 🗺️
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info text-center" role="alert">
                No countries data available.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;