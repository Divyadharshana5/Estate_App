import { useState, useEffect } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";

const HEADLINES = [
  "Find Real Estate & Get Your Dream Place",
  "Discover Homes Tailored For You",
  "Invest Smart, Live Better",
  "Your Next Home Awaits!",
];

function HomePage() {
  const [headlineIndex, setHeadlineIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeadlineIndex((prev) => (prev + 1) % HEADLINES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title dynamic-headline">{HEADLINES[headlineIndex]}</h1>
          <p className="unique-description">
            Welcome to CasaCrafts! Explore a curated selection of beautiful
            homes, modern apartments, and investment opportunities. Start your
            journey to a better living experience today.
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <span className="box-icon" role="img" aria-label="Experience">
                🏆
              </span>
              <h1>16+</h1>
              <h2>Years of Excellence</h2>
            </div>

            <div className="box">
              <span className="box-icon" role="img" aria-label="Properties">
                🏠
              </span>
              <h1>2000+</h1>
              <h2>Properties Listed</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <div className="img-wrapper">
          <div className="img-animated-overlay"></div>
          <img src="/bg.png" alt="Home background" />
        </div>
        {/* Decorative overlay image for extra color (optional) */}
        {/* <img className="decorative-overlay" src="/public/arrow.png" alt="Decorative" /> */}
      </div>
    </div>
  );
}

export default HomePage;
