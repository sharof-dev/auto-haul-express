

import AOS from 'aos'
import 'aos/dist/aos.css'
import { Helmet } from 'react-helmet'
import React, { useEffect } from "react";
import MainSection from "../components/home/MainSection";
import TextBox from "../components/home/TextBox";
import ShippingSteps from "../components/home/ShippingSets";
import TransportCard from "../components/home/TransportCard";
import ClientsSay from "../components//home/ClientsSay";
import WhatFactors from "../components/car-shipping-cost/WhatFactors";
import OurServices from "../components/home/OurServices";
import UseDifferent from "../components/home/UseDifferent";
import MiniCard from "../components/home/MiniCard";
import LatestNews from "../components/home/LatestNews";
import WhatAreThe from '../components/cross-country/WhatAreThe';

const steps = [
  {
    title: "Request a quote.",
    description: "",
    image:
      "https://uscargofreight.com/wp-content/uploads/2023/09/Get-a-Quote-and-Book-Your-Order-Img.png.webp",
  },
  {
    title: "We will arrange the pickup of your vehicle.",
    description: "",
    image:
      "https://uscargofreight.com/wp-content/uploads/2023/09/We-Pick-Up-Your-Vehicle-Img.png.webp",
  },
  {
    title: "Receive your vehicle at the designated location.",
    description: "",
    image:
      "https://uscargofreight.com/wp-content/uploads/2023/09/You-Receive-Your-Vehicle-Img.png.webp",
  },
];
const title = `How To Ship in`;
const titleMark = `3 easy steps`;

const cardBg = `https://uscargofreight.com/wp-content/uploads/2023/03/About-US-Car-Go-Freight-Bg.jpg`;

const weareimg = [
  {
    icon: "fas fa-dollar-sign",
    title: "We are Affordable",
    description: "",
    weare: true,
  },
  {
    icon: "fas fa-jedi",
    title: "We are Affordable",
    description: "",
    weare: true,
  },
  {
    id: 1,
    image: "https://img.icons8.com/ios/50/trophy--v1.png",
    title: "We are Affordable",
    description: "",
    weare: true,
  },
];

const text = true;

const whyChooseData = [
  {
    img: '/assets/home_img/1.webp',
    title: "Driving You Crazy? Sit Back and Relax",
    text: "As a highly-rated  auto transport company , you can trust us to seamlessly transport your car from one location to another without you having to worry. By opting for door-to-door service, you allow our experts to handle every aspect of the process, guaranteeing (assured) a smooth journey without any hiccups along the way.",

  },
  {
    img: "/assets/home_img/2.jpg",
    title: "Relocation Refined",
    text: "Why should you choose our vehicle shipping company ? US Car-Go Freight Logistics works closely with you throughout your car or truck’s relocation. Experience hassle-free shipping when you select us as your car transporter and enjoy a simple and effortless transit process.",
  },
  {
    img: "/assets/home_img/3.webp",
    title: "Advisors Extraordinaire",
    text: "Our team of professional auto transport Service  advisors is dedicated to ensuring that you work with the best vehicle transportation company. They diligently monitor your transport around the clock, providing you with peace of mind.",
  },
  {
    img: "/assets/home_img/4.webp",
    title: "The best in the business",
    text: "Wondering why customers consider US Car-Go Freight  Logistics LLC the best company for shipping a car? Take a look at our online reviews to see why we are widely recognized as one of the top car moving companies and car hauling companies in the industry.",
  },
  {
    img: "/assets/home_img/5.webp",
    title: "Insurance coverage",
    text: "When you receive a shipping quote from car transport companies , insurance coverage is included. Our carefully selected  auto haulers  meet strict insurance standards and guarantee (Assured) delivery of your vehicle in pristine condition.",
  },
  {
    img: "/assets/home_img/6.webp",
    title: "15K+ auto  carriers",
    text: "Our Cargo auto transport company boasts an extensive network of over 15,000 vetted us auto shipping experts who are part of our auto hauler network. These trusted industry professionals will treat your car with the utmost care and respect, just as if it were their own.",
  },
  {
    img: "/assets/home_img/7.webp",
    title: "Extended hours",
    text: "We’re not your typical 9-to-5 auto transport services . We’re available throughout the year and work extended hours to address all your vehicle transportation inquiries. Whether you have questions or want to know what sets us apart as the best among car moving companies, we’re here to assist you.",
  },
];

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  })
  return (
    <>
      <Helmet>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <title>Auto haul express LLC</title>
        <meta name="description" content="We offer a range of options to meet your specific needs, including open auto transport, enclosed car shipping, and more. Reach out to us for a quote!" />
        <meta name="keywords" content="logistic, cargo, machine, deliver,delivery service" />
        <meta property="og:title" content="A1 Auto Shipping Services | Top Car Shipping Company" />
        <meta property="og:type" content="website" />
      </Helmet>
      <MainSection />
      <TextBox />
      <ShippingSteps
        title={title}
        titleMark={titleMark}
        data={steps}
        cardBg={cardBg}
      />
      <TransportCard />
      <ClientsSay data={text} />
      <WhatAreThe whyChooseData={whyChooseData} text={text} />
      <OurServices />
      <UseDifferent />
      <MiniCard />
      <LatestNews />
    </>
  );
};

export default Home;
