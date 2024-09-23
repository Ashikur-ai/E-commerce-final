import { useContext } from "react";
import Banner from "./Banner";
import DressStyle from "./DressStyle";
import HappyCustomer from "./HappyCustomer";
import NewArrival from "./NewArrival";
import Sponser from "./Sponser";
import TopSelling from "./TopSelling";
import { AuthContext } from "../../../provider/AuthProvider";


const Homepage = () => {

  const authInfo = useContext(AuthContext);
  console.log(authInfo);

  return (
    <div>
      <Banner></Banner>
      <Sponser></Sponser>
      <NewArrival></NewArrival>
      <TopSelling></TopSelling>
      <DressStyle></DressStyle>
      <HappyCustomer></HappyCustomer>
    </div>
  );
};

export default Homepage;
