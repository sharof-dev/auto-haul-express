import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import { Box } from "@mui/material";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import TuneIcon from "@mui/icons-material/Tune";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";

const transportServicesData = {
  background: "/assets/door-to-door/transport_services_background.jpg",
  title: "Door-to-Door Auto Transport",
  text: "Affordable, Dependable, and Hassle-Free Door-to-Door Auto Shipping with US Car-Go.",
  text1: (
    <>
      Looking for a hassle-free way to transport your vehicle? Look no further
      than US Car-Go’s{" "}
      <em>
        <strong>Door-to-Door auto transport</strong>
      </em>
      service! It’s easy and convenient – just choose the pick-up and drop-off
      locations that work best for you, and our experienced truck drivers will
      handle the rest. Your vehicle will stay securely on the carrier throughout
      the entire journey, so you don’t have to worry about any unnecessary
      loading and unloading. And with US Csr-Go, you can trust that your vehicle
      will be safely and legally transported to its destination without any
      stops or delays. So sit back, relax, and let us take care of the
      transportation logistics for you!
    </>
  ),
};
const fullyLicensedCards = {
  title: (
    <>
      Why should you use <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        door-to-door car services?
      </Box>
    </>
  ),
  cardTitle: (
    <>
      Straightforward
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `US Car-Go offers a convenient car shipping service that picks up your vehicle from your doorstep and delivers it directly to its destination. You no longer need to stress about bringing your car to a shipping yard because they will take care of it for you.`,
  cardImage: "/assets/door-to-door/fully_licensed_card.jpg",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "269px",
  imageWidth: "560px",
  reverse: true,
};
const fullyLicensedCards1 = {
  background: "/assets/door-to-door/fully_licensed_background.jpg",
  cardTitle: (
    <>
      Reduced Risk of Damage
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `We make sure that your vehicle is transported with utmost care and safety. Our door to door transportation team uses modern and well-maintained trucks and trailers, and our drivers are highly skilled and experienced to handle all kinds of vehicles. You can trust us to minimize the risk of any damage during transit.`,
  cardImage: "/assets/door-to-door/fully_licensed_card1.webp",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "370px",
  imageWidth: "560px",
};
const fullyLicensedCards2 = {
  cardTitle: (
    <>
      Stress-Free
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: (
    <>
      Our door to door auto transport services can help you avoid all that
      hassle and save money on fuel and other expenses too! We have a variety of
      service options available to fit your budget, so you can choose the one
      that's right for you.
    </>
  ),
  cardImage: "/assets/door-to-door/fully_licensed_card2.webp",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "269px",
  imageWidth: "560px",
  reverse: true,
};
const clientsSaySliderData = {
  background: "/assets/door-to-door/clients_say_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "For door to door auto transport reviews",
  slidesPerView: 1,
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
const sliderData = [
  {
    icon: LocalShippingIcon,
    title: "Convenience",
    text: `
 We've got you covered with our hassle-free door to door car shipping, pickup and delivery service! Say goodbye to wasting time and energy driving your vehicle to a shipping yard. Our friendly team will transport your vehicle straight to its destination, making your life easier.
    `,
  },
  {
    icon: HeadsetMicIcon,
    title: "Professionalism",
    text: `
     We have a team of skilled professionals who are committed to providing you with excellent service. We understand how important it is to safely transport your belongings, which is why we take extra precautions to ensure they are handled securely. You can count on us to keep you informed every step of the way so that you can have peace of mind during the transportation process.
    `,
  },
  {
    icon: TuneIcon,
    title: "Flexibility",
    text: `
    US Car-Go have different types of services that you can choose from based on your needs and budget. Whether you need fast shipping or are looking for something more affordable, we can customize our services to suit what you're looking for.
    `,
  },
  {
    icon: PriceChangeIcon,
    title: "Competitive Pricing",
    text: `
   We make sure that you get the best value for your money without compromising on quality or reliability. We believe that vehicle transportation should be accessible and affordable for everyone, and we work hard to keep our prices as low as possible.
    `,
  },
  {
    icon: SentimentSatisfiedAltIcon,
    title: "Peace of Mind",
    text: `
    Our door to door auto transport services offer you the convenience of having your vehicle picked up and dropped off at your doorstep. You don't have to worry about a thing because we take good care of your vehicle. We have great insurance coverage and top-notch customer service. You will be updated throughout the transportation process and we will address any concerns you may have. We take extra precautions to ensure your vehicle arrives at its destination in the same condition it was in when we picked it up.
    `,
  },
];
const getQuoteData = {
  background: "/assets/enclosed-auto-transport/get_quote_background.jpg",
  title: (
    <>
      Want to know the cost of door to door auto transport{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        a car with us?
      </Box>
    </>
  ),
  text: (
    <>
      From Your Doorstep to Your Destination - Experience Hassle-Free Car
      Shipping with Us!
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};

const DoorToDoor = () => {
  return (
    <>
      <TransportServices {...transportServicesData} />
      <FullyLicensed {...fullyLicensedCards} />
      <FullyLicensed {...fullyLicensedCards1} />
      <FullyLicensed {...fullyLicensedCards2} />
      <ClientsSaySlider {...clientsSaySliderData} />
      <WhyChoose sliderData={sliderData} />
      <GetQuote {...getQuoteData} />
      <OurAuto />
    </>
  );
};

export default DoorToDoor;
