import NewArrival from "../../components/NewArrival";
import Sponser from "../../components/Sponser";
import TopSelling from "../../components/TopSelling";
import Banner from "./Banner";

const Homepage = () => {
  return (
    <div>
      <Banner></Banner>
      <Sponser></Sponser>
      <NewArrival></NewArrival>
      <TopSelling></TopSelling>
    </div>
  );
};

export default Homepage;
