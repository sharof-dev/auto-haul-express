import Additional from "../components/what-we-do/Additional";
import Door from "../components/what-we-do/Door";
import EnclosedAuto from "../components/what-we-do/EnclosedAuto";
import Nationwide from "../components/what-we-do/Nationwide";
import Open from "../components/what-we-do/Open";
import OpenAuto from "../components/what-we-do/OpenAuto";
import OurServiceProgress from "../components/what-we-do/OurServiceProgress";
import OurServices from "../components/what-we-do/OurServices";
import ShipYour from "../components/what-we-do/ShipYour";
import WantToKnow from "../components/what-we-do/WantToKnow ";

const WhatWeDo = () => {
  return (
    <>
      <Nationwide />
      <ShipYour />
      <Open />
      <OpenAuto />
      <EnclosedAuto />
      <Door />
      <OurServices />
      <Additional />
      <WantToKnow />
      {/* END */}
      <OurServiceProgress />
    </>
  );
};

export default WhatWeDo;
