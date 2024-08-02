import {
  CarShipping,
  HowToShip,
  Receive,
  WePick,
  ProcessOf,
  WantTo,
  GetQuote,
} from "../../components";

const CarShippingCost = () => {
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

export default CarShippingCost;
