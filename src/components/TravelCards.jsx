/* eslint-disable react/prop-types */
import "../css/TravelCards.css";

const TravelCards = ({ travelGuru }) => {
  console.log(travelGuru);

  const { title, cost, accomodation, food, description } = travelGuru;
  return (
    <div className="cards">
      <img
        alt="travel-image"
        src="https://img.freepik.com/free-photo/beautiful-girl-standing-boat-looking-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-849.jpg?t=st=1710002936~exp=1710006536~hmac=e85c8fb8c0447928d56f58fe35d91512c0951f97f6d4ce8d8c2d4f84c7cf5bc2&w=900"
      />
      <h1 className="title">{title}</h1>
      <div className="cost-accomodation">
        <h4>{accomodation}</h4>
        <h4>{food} allowed</h4>
      </div>
      <p className="paragraph">{description.slice(0, 300)}</p>
      <h2 className="cost">{cost} &#36; </h2>
    </div>
  );
};

export default TravelCards;
