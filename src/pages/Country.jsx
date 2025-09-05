import { useEffect, useState, useTransition, useMemo } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "./Loader";
import "./Country.css";
import { FaLongArrowAltRight, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Country() {
  const [isPending, startTransition] = useTransition();
  const [countriesData, setCountriesData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("all"); // 'asc', 'desc', 'all'

  useEffect(() => {
    startTransition(async () => {
      const res = await getCountryData();
      setCountriesData(res.data);
    });
  }, []);

  // Filter and sort countries based on search term and sort order
  const filteredAndSortedCountries = useMemo(() => {
    let filtered = countriesData;

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = countriesData.filter(country =>
        country.name?.common?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        country.capital?.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase())) ||
        country.region?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Apply sorting
    if (sortOrder === "asc") {
      filtered = [...filtered].sort((a, b) => 
        (a.name?.common || "").localeCompare(b.name?.common || "")
      );
    } else if (sortOrder === "desc") {
      filtered = [...filtered].sort((a, b) => 
        (b.name?.common || "").localeCompare(a.name?.common || "")
      );
    }

    return filtered;
  }, [countriesData, searchTerm, sortOrder]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (order) => {
    setSortOrder(order);
  };

  if (isPending) {
    return (
      <div
        className="d-flex justify-content-center align-items-center "
        style={{ minHeight: "100vh", background: "white" }}
      >
        <Loader />
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

        {/* Search and Filter Controls */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="search-filter-container">
              {/* Search Bar */}
              <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                  type="text"
                  placeholder="Search countries, capitals, or regions..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="search-input"
                />
              </div>

              {/* Filter Buttons */}
              <div className="filter-buttons">
                <button
                  className={`filter-btn ${sortOrder === "asc" ? "active" : ""}`}
                  onClick={() => handleSortChange("asc")}
                >
                  Asc
                </button>
                <button
                  className={`filter-btn ${sortOrder === "desc" ? "active" : ""}`}
                  onClick={() => handleSortChange("desc")}
                >
                  Desc
                </button>
                <button
                  className={`filter-btn ${sortOrder === "all" ? "active" : ""}`}
                  onClick={() => handleSortChange("all")}
                >
                  All
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row g-4 country-grid">
          {filteredAndSortedCountries && filteredAndSortedCountries.length > 0 ? (
            filteredAndSortedCountries.map((country, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="card h-100 country-card">
                  <div className="card-img-container">
                    <img
                      src={
                        country.flags?.png ||
                        country.flags?.svg ||
                        "https://via.placeholder.com/300x200?text=No+Flag&bg=333&color=fff"
                      }
                      className="card-img-top"
                      alt={`${country.name?.common || "Unknown"} flag`}
                      loading="lazy"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      {country.name?.common || "Unknown Country"}
                    </h5>
                    <div className="card-text">
                      <p>
                        <strong>Capital:</strong>
                        <span className="value">
                          {country.capital ? country.capital.join(", ") : "N/A"}
                        </span>
                      </p>
                      <p>
                        <strong>Region:</strong>
                        <span className="value">
                          {country.region || "N/A"}
                        </span>
                      </p>
                      <p>
                        <strong>Population:</strong>
                        <span className="value">
                          {country.population
                            ? country.population.toLocaleString()
                            : "N/A"}
                        </span>
                      </p>
                    </div>
                    <Link 
                      to={`/country/${country.name?.common || country.cca2 || index}`}
                      state={{ countryData: country }}
                    >
                      <button className="read-more-btn">
                        Read More <FaLongArrowAltRight />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <div className="alert alert-info text-center" role="alert">
                {searchTerm ? 
                  `No countries found matching "${searchTerm}"` : 
                  "No countries data available."
                }
              </div>
            </div>
          )}
        </div>

        {/* Results count */}
        {filteredAndSortedCountries.length > 0 && (
          <div className="row mt-4">
            <div className="col-12">
              <div className="results-count">
                Showing {filteredAndSortedCountries.length} of {countriesData.length} countries
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Country;