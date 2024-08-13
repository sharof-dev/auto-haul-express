import React from "react";
import Nationwide from "../../components/what-we-do/Nationwide";
import LookingFor from "../../components/open-auot-transport/LookingFor";
import ClientsSay from "../../components/about/ClientsSay";
import OpenAuto from "../../components/what-we-do/OpenAuto";
import HowMuchDoes from "../../components/cross-country/HowMuchDoes";
import ShipYour from "../../components/what-we-do/ShipYour";
import WantToKnow from "../../components/what-we-do/WantToKnow ";
import HowGet from "../../components/cross-country/HowGet";
import WhatAreThe from "../../components/cross-country/WhatAreThe";
import HowMuch from "../../components/car-shipping-cost/HowMuch";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import EnclosedAuto from "../../components/what-we-do/EnclosedAuto";
import { Box } from "@mui/material";

const dataCard = [
  {
    icon: "/assets/open-transport/svg/speen.svg",
    title: "Total Mileage Between Destinations",
  },
  {
    icon: "/assets/how-it-works/svg/crash-car.svg",
    title: `Vehicle Specs (Size, Make, Weight, Etc.)`,
  },
  {
    icon: "/assets/how-it-works/svg/norm-car.svg",
    title: `The Condition of the Vehicle (Running or Not Running)`,
  },
  {
    icon: "/assets/open-transport/svg/location.svg",
    title: "Route Variations and Stops",
  },

  {
    icon: "/assets/open-transport/svg/calon.svg",
    title: "Fuel Prices",
  },
  {
    icon: "/assets/open-transport/svg/cloud.svg",
    title: "Weather Conditions",
  },
  {
    icon: "/assets/how-it-works/svg/date.svg",
    title: "Route Variations and Stops",
  },
];

const sliderData = [
  {
    img: "/assets/open-transport/customers-review-background-img.jpg.webp",
    title: "Trusted Network of Carriers",
    text: `
  US Car-Go Freight have carefully selected carriers based on their commitment to maintaining high-quality service standards. This ensures that we can promptly match you with the most reliable carriers for your open car transport needs.
    `,
  },
  {
    img: "/assets/how-it-works/what_factors_timeline6.webp",
    title: "Best Prices Guaranteed (Assured)",
    text: `
   Our priority is to offer the best car shipping prices on the market. By utilizing our smart online calculator, we consider all relevant factors to provide you with the most accurate and fair open carrier car transport cost possible.`,
  },
  {
    img: "/assets/open-transport/Cross-Country-Car-Shipping-Customer-Service-img.jpg.webp",
    title: "Friendly Customer Service",
    text: `
  Our dedicated representatives are committed to providing exceptional customer service. From the moment you reach out to us until the successful delivery of your vehicle, US Car-Go freight logistics strive to ensure a positive and hassle-free experience.
    `,
  },
];

const OpenAuotTransport = () => {
  const text =
    "Your Trusted Partner for Reliable and Affordable Vehicle Shipping";

  return (
    <>
      <Nationwide text={text} />
      <LookingFor />
      <ClientsSay text={true} />
      <OpenAuto text={true} />
      <HowMuchDoes text={true} />
      <ShipYour text={true} />
      <WantToKnow text={true} />
      <HowGet data={dataCard} />
      <WhatAreThe data={sliderData} />
      <HowMuch text={true} />
      <EnclosedAuto text={true} />
      <OurAuto />
    </>
  );
};

export default OpenAuotTransport;
