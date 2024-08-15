import { Box } from "@mui/material";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import { NavLink } from "react-router-dom";
import WantToKnow from "../../components/what-we-do/WantToKnow ";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import KeyIcon from '@mui/icons-material/Key';

const getQuoteData = {
  background: "/assets/expedited-car/expedited_car_background.jpg",
  title: (
    <>
      Expedited Car{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Shipping.
      </Box>
    </>
  ),
  text: (
    <>
      The Fastest and Easiest Way to Transport Your Vehicle
      <br />
      <br />
      If you’re in a hurry to move your car to a new location, US Car-Go is your
      best choice.{" "}
      <em>
        <strong>Expedited car shipping</strong>
      </em>{" "}
      service is the fastest one available and your car will be given top
      priority. A driver will be sent to pick up your car as soon as possible.
      Just keep in mind that the time it takes for delivery may be affected by
      things like distance and weather.
    </>
  ),
};
const fullyLicensedCards = {
  reverse: true,
  cardTitle: (
    <>
      What do you mean by <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Expedited Auto <br /> Shipping?
      </Box>
    </>
  ),
  cardText: (
    <>
      Transport Expedited Auto is a convenient way to get your vehicle
      transported from one location to another quickly. It's a great option for
      customers who need their cars to be delivered promptly and reliably. By
      choosing a Expedited car shipping company that offers fast car
      transportation, you can rest assured that your vehicle will arrive at its
      destination safe and sound, and without any delay. <br />
      <br />
      If you need to ship cars to another state in a hurry, US Car-Go is the
      best option. This service uses enclosed trailers that are very safe and
      secure while they are on the road.
    </>
  ),
  cardImage: "/assets/expedited-car/fully_licensed_card.webp",
  // text card width)
  Width: "610px",
  // image card width and height
  imageHeight: "527px",
  imageWidth: "480px",
};
const clientsSaySliderData = {
  background: "/assets/enclosed-auto-transport/enclosed_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "For Expedited car transport reviews",
  slidesPerView: 3,
  sliderData: [
    {
      mini: true,
      description:
        "This car transport company is very good. I use them and they were on-time. Their prices are very reasonable and they get the job done if I could’ve given them more than five stars I would’ve I would’ve given them 10, so God bless Max. He is a really great guy and I am very happy and very satisfied with the service that I received. They delivered my car perfectly. Thank you so much, Molly.",
      userName: "Molly Adams",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Us Cargo helps me alot to in shipping, It was my right decision to choose this come become none of the other company was able to move my vehicle for week, only chris and US Cargo was there for my help, I'm really thankful to them.",
      userName: "Tiko lomtatidze",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/transport-review-e1677056462699.png.webp",
    },
    {
      mini: true,
      description:
        "I highly recommend US CARGO and special thanks to Brian Jones for helping me in my shipment process. I shipped my car on urgent basis helped me in getting the driver and explained every step properly. Thanks Brian and Us Cargo!",
      userName: "Don Young",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
    {
      mini: true,
      description:
        "Lowest price! Fast! Reliable! I had to ship my car from Georgia to Texas and comparing prices they were the lowest out there, they were very attentive and fast!",
      userName: "Melanie Dominguez",
      logo: "https://uscargofreight.com/wp-content/uploads/2023/02/googlelogo_color_92x30dp-1-1.png.webp",
    },
  ],
};
const fullyLicensedCards1 = {
  title: (
    <>
      The Process of Expedited <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Car Shipping Follows​
      </Box>
    </>
  ),
  cardTitle: (
    <>
      Get the Price
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `When you need to get your car to its destination quickly, US Car-Go is your best bet! All you have to do is call a expedited car shipping company and ask for a quote. They'll ask you a few questions, like where you want your car shipped, how big it is, and how much it weighs. Then, they'll give you a quote for their services based on your answers. Easy peasy!`,
  cardImage: "/assets/expedited-car/fully_licensed_card1.webp",
  // text card width)
  Width: "540px",
  // image card width and height
  imageHeight: "325px",
  imageWidth: "580px",
  reverse: true,
};
const fullyLicensedCards2 = {
  background: "/assets/how-it-works/what_to_know.jpg",
  cardTitle: (
    <>
      You Come First
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `Great! Once you accept the quote, our Expedited car shipping company will take excellent care of your car and make all the necessary arrangements for transportation. This includes setting a pickup time, preparing your car for transport, and handling any permits and paperwork that may be needed. You can relax and let us handle everything!`,
  cardImage: "/assets/expedited-car/fully_licensed_card2.jpg",
  // text card width)
  Width: "540px",
  // image card width and height
  imageHeight: "325px",
  imageWidth: "580px",
};
const fullyLicensedCards3 = {
  cardTitle: (
    <>
      Careful Loading and Continuous Update
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: (
    <>
      When we transport your car in our{" "}
      <NavLink
        to={"/enclosed-auto-transport"}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <strong>enclosed trailer</strong>
      </NavLink>
      , we handle it with extra care to ensure it arrives at its destination
      safely and without any damage. After we secure everything in place, we
      drive the trailer to your desired location, carefully unload your car, and
      deliver it to you. At US Car-Go, we provide regular updates about your
      freight through phone and email so that you can stay informed and assured
      that everything is going smoothly.
    </>
  ),
  cardImage: "/assets/expedited-car/fully_licensed_card3.webp",
  // text card width)
  Width: "540px",
  // image card width and height
  imageHeight: "425px",
  imageWidth: "580px",
  reverse: true,
};
const wantToKnowData = {
  title: "Get Hassle-free and Safe Expedited Car Shipping with US Car-Go",
  text: "Need your car shipped in a hurry? Trust us to get it there faster than fast!",
  id: "#get-quote",
  color: "#F9F9F9",
};
const sliderData = [
  {
    icon: LocalShippingIcon,
    title: "Instant Shipping of Vehicle",
    text: `
 We use the fastest car shipping company in the industry to ensure that your vehicle arrives safely and quickly. If you're relocating and your car needs to get there before you do, expedited car shipping is a great solution.
    `,
  },
  {
    icon: TimeToLeaveIcon,
    title: "Delivering Door-to-Door",
    text: `
   US Car-Go provides fast and convenient door to door shipping for automobiles. Just make sure there's adequate space for our truck to park and load there.
    `,
  },
  {
    icon: Diversity2Icon,
    title: "Easy Shipping Reliability",
    text: `
   Our express auto transport services are more dependable because we employ a wider pool of drivers. We also have a contingency plan in case something goes wrong, like the car breaking down, the weather turning poor, or their being an unexpected amount of traffic.
    `,
  },
  {
    icon: HeadsetMicIcon,
    title: "Unrestricted and Convenient Communication",
    text: `
  If you need your car shipped quickly, it's crucial for us to stay in touch with you. We want to make sure you feel confident and have a good understanding of what to expect during the transportation process. We'll keep you updated on your transit's progress and let you know the estimated time of arrival. This is especially important for time-sensitive deliveries that require quick updates.
    `,
  },
  {
    icon: TextSnippetIcon,
    title: "Extra Insurance Coverage",
    text: `
   At US Car-Go Freight, we make sure your cars arrive safely. Our experienced drivers take extra care to keep your vehicle secure during transportation. We also offer extra insurance to protect your car in the rare event of damage or theft, giving you added peace of mind.
    `,
  },
  {
    icon: KeyIcon,
    title: "We Only Need Your Vehicle and Key",
    text: `
   You don't have to hand over any documents related to your car's ownership, like the title, to the driver unless the delivery location specifically asks for it. Just make sure your car is prepared and you have the key to give to the driver!
    `,
  },
];

const ExpeditedCar = () => {
  return (
    <>
      <GetQuote {...getQuoteData} />
      <FullyLicensed {...fullyLicensedCards} />
      <ClientsSaySlider {...clientsSaySliderData} />
      <FullyLicensed {...fullyLicensedCards1} />
      <FullyLicensed {...fullyLicensedCards2} />
      <FullyLicensed {...fullyLicensedCards3} />
      <WantToKnow {...wantToKnowData} />
      <WhyChoose
        sliderData={sliderData}
        background={"/assets/expedited-car/why_choose_background.jpg"}
      /> 
      <OurAuto />
    </>
  );
};

export default ExpeditedCar;
