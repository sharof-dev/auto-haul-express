import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import { Box } from "@mui/material";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import TuneIcon from "@mui/icons-material/Tune";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EngineeringIcon from '@mui/icons-material/Engineering';
import OurAuto from "../../components/car-shipping-cost/OurAuto";

const transportServicesData = {
  background: "/assets/heavy-shipping/transport_services_background.jpg",
  title: (
    <>
      US Car-Go: The Best Option for <br /> Nationwide{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Heavy Equipment Shipping.
      </Box>
    </>
  ),
  text: "Are you in need of heavy equipment movers that you can trust and rely on when heavy machinery is shipping? If you need large machinery shipped anywhere in the United States, look no further than US Car-Go. When it comes to moving large pieces of machinery, you can count on our team of experts to go above and beyond your expectations.",
  text1: `US Car-Go Freight has the knowledge and resources necessary to move large machinery. That’s why, no matter how big or bulky your equipment is, we provide a full suite of transportation options to guarantee its safe arrival at its destination.`,
};
const fullyLicensedCards = {
  cardTitle: (
    <>
      First-rate Service and{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Competitive Pricing.
      </Box>
    </>
  ),
  cardText: (
    <>
      We are here for you every step of the way, from the moment you request an
      estimate until we resolve any issues that may arise. Depend on US Car-Go
      to provide first-rate service and competitive pricing, whether you're
      sending one piece of large machinery or a complete fleet. So, there's no
      reason to delay.{" "}
      <strong>
        <Box component={"a"} href={"#get-quote"} sx={{ color: "#E01933" }}>
          Get in touch
        </Box>
      </strong>{" "}
      with us right away to learn more about our
      <strong>heavy equipment shipping</strong> services.
    </>
  ),
  cardImage: "/assets/heavy-shipping/fully_licensed_card.webp",
  // text card width)
  Width: "560px",
  // image card width and height
  imageHeight: "400px",
  imageWidth: "560px",
  reverse: true,
};
const clientsSaySliderData = {
  background: "/assets/heavy-shipping/clients_say_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "For heavy equipment transport reviews",
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
      The Most Trusted Heavy <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Equipment Shipping Company​
      </Box>
    </>
  ),
  text: (
    <>
      When it comes to transporting <strong>heavy equipment hauling </strong>
      services across the country, US Car-Go is the industry standard. Our staff
      is well-versed in all facets of the transportation process and can take
      care of everything from initial planning to final dispatch.
    </>
  ),
  cardTitle: (
    <>
      Range of Services
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `US Car-Go gives its customers a number of choices for shipping heavy equipment, depending on what they need. We can move big and heavy things all over the country and the world.`,
  cardImage: "/assets/heavy-shipping/fully_licensed_card1.jpg",
  // text card width)
  Width: "480px",
  // image card width and height
  imageHeight: "270px",
  imageWidth: "560px",
  reverse: true,
};
const fullyLicensedCards2 = {
  background: "/assets/heavy-shipping/fully_licensed_background1.jpg",
  cardTitle: (
    <>
      Range of Services
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `US Car-Go gives its customers a number of choices for shipping heavy equipment, depending on what they need. We can move big and heavy things all over the country and the world.`,
  cardImage: "/assets/heavy-shipping/fully_licensed_card2.webp",
  // text card width)
  Width: "480px",
  // image card width and height
  imageHeight: "270px",
  imageWidth: "560px",
};
const fullyLicensedCards3 = {
  cardTitle: (
    <>
      State-of-the-art Technology
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  cardText: `As a heavy hauler we keeps an eye on our auto shipping services by using cutting-edge technology. By using these methods, we can let our clients know how their goods is doing and take care of any problems as soon as they come up.`,
  cardImage: "/assets/heavy-shipping/fully_licensed_card3.webp",
  // text card width)
  Width: "480px",
  // image card width and height
  imageHeight: "342px",
  imageWidth: "560px",
  reverse: true,
};
const getQuoteData = {
  color: "#F9F9F9",
  title: <>Ship Heavy Equipment's With Us </>,
  text: (
    <>
      Big or Small, We Ship it All - Heavy Equipment Shipping with Expertise and
      Care.
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};
const sliderData = [
  {
    icon: WorkspacePremiumIcon,
    title: "Experience",
    text: `
US Car-Go has been in business for so long that we have the knowledge and experience to handle even the most difficult auto shipping jobs. We have the tools and people to handle any kind of freight, no matter how big or small it is.
    `,
  },
  {
    icon: EngineeringIcon,
    title: "Safety",
    text: `
  Shipping heavy equipment can be dangerous, but safety is very important to us. Our team is trained to handle all kinds of equipment, and they use the latest safety practices and tools to make sure your vehicles comes safely and securely.
    `,
  },
  {
    icon: TuneIcon,
    title: "Flexibility",
    text: `
   US Car-Go is an Auto transport carrier. We know that every transportation is different, and we're ready to work with you to find the best way to ship your car. We can meet your needs, whether you need door-to-door service, special treatment, or a place to store your items.
    `,
  },
  {
    icon: AttachMoneyIcon,
    title: "Competitive Pricing",
    text: `
 construction equipment hauling can be pricey, but we have low prices that are sure to fit your budget. We also have different shipping choices so that you can find the most cost-effective one.
    `,
  },
  {
    icon: HeadsetMicIcon,
    title: "Customer Service",
    text: `
   Customer service is a very important part of what we do. Our team is here for extended hours to answer questions and give you information on your order. You can also check your package online, so you can keep an eye on it in real time.
    `,
  },
];

const HeavyShipping = () => {
  return (
    <>
      <TransportServices {...transportServicesData} />
      <FullyLicensed {...fullyLicensedCards} />
      <ClientsSaySlider {...clientsSaySliderData} />
      <FullyLicensed {...fullyLicensedCards1} />
      <FullyLicensed {...fullyLicensedCards2} />
      <FullyLicensed {...fullyLicensedCards3} />
      <GetQuote {...getQuoteData} />
      <WhyChoose
        sliderData={sliderData}
        title={"Why Rely on "}
        background={"/assets/heavy-shipping/why_choose_background.jpg"}
      />
      <OurAuto />
    </>
  );
};

export default HeavyShipping;
