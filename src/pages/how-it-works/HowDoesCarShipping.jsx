import CarShipping from "../../components/HowDoesCarShipping/CarShipping";
import ProcessOf from "../../components/HowDoesCarShipping/ProcessOf";
import HowToShip from "../../components/HowDoesCarShipping/HowToShip";
import GetQuote from "../../components/HowDoesCarShipping/GetQuote";
import WePick from "../../components/HowDoesCarShipping/WePick";
import Receive from "../../components/HowDoesCarShipping/Receive";
import WantTo from "../../components/HowDoesCarShipping/WantTo";

const HowDoesCarShipping = () => {
  return (
    <>
      <CarShipping />
      <ProcessOf />
      <HowToShip />
      <GetQuote />
      <WePick />
      <Receive />
      <WantTo />
    </>
  );
};

export default HowDoesCarShipping;
