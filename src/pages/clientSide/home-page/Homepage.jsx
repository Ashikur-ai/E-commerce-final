import Banner from "./Banner";
import DressStyle from "./DressStyle";
import NewArrival from "./NewArrival";
import Sponser from "./Sponser";
import TopSelling from "./TopSelling";


const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Sponser></Sponser>
      <NewArrival></NewArrival>
      <TopSelling></TopSelling>
      <DressStyle></DressStyle>
    </div>
  );
};

export default Homepage;
