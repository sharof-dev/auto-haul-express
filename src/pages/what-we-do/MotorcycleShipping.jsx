import { Box } from "@mui/material";
import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import OurServiceProgress from "../../components/what-we-do/OurServiceProgress";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import UseDifferent from "../../components/home/UseDifferent";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WhyChoose from "../../components/door-to-door/WhyChoose";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import PersonIcon from '@mui/icons-material/Person';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import MapIcon from '@mui/icons-material/Map';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const transportServicesData = {
  background: "/assets/motorcycle-shipping/transport_services_background.jpg",
  title: (
    <>
      We Make Your Motorcycle Shipping <br />{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Easy and Convenient.
      </Box>
    </>
  ),
  text: "If you’re looking for a safe and reliable way for shipping a motorcycle, you can count on US Car-Go! We can help you ship your bike whether you need to move it across the city or the country. We understand that your motorcycle is not just a mode of transportation, but a cherished possession that brings you joy and pride. That’s why we take great care in handling your motorcycle with the utmost respect. Our team of skilled drivers will make sure that your bike is loaded, transported, and unloaded safely. Plus, we use the latest equipment and technology to ensure your bike is well-protected throughout the entire process.",
  text1: true,
};

const sliderData = [
  {
    title: "Get a Quote and Book",
    text: `
   To give you a fair price for shipping your motorcycle, we’ll need some information from you. We’d like to know where you want to send it, what type of motorcycle you have, how you want it shipped, and how far it needs to travel. Once we have all of this information, we can give you an accurate quote. Does that sound good to you?
      `,
  },
  {
    title: "Prepare Your Motorcycle for Shipping",
    text: `
     Before shipping motorcycle cross country, you’ll need to prepare it. To get your vehicle ready, you’ll need to do a few things. First, give it a good cleaning and check for any damage. Take pictures to keep a record. Next, make sure to drain the gas tank until it’s about a quarter full, remove any loose items, and disconnect the battery. This will help keep your vehicle in good condition.`,
  },
  {
    title: "Choose a Shipping Method",
    text: `
 When it comes to your motorcycle delivery Services, there are a few options to choose from. Open transit is the cheapest choice, but your bike won’t be protected from the weather. Enclosed transportation is a bit more expensive, but it’s safer. If you really want to ensure the safety of your motorcycle, you can choose crate shipping, but it’s the most expensive option.
      `,
  },
  {
    title: "Schedule the Pickup and Delivery",
    text: `
 After you choose your preferred shipping method, you need to schedule a pickup and delivery. This means you’ll need to give us the addresses for where we should pick up and drop off the package, as well as let us know the days and times that work best for you.
      `,
  },
  {
    title: "Track Your Transportation",
    text: `
Don’t worry! You can easily monitor the location of your motorbike during transit. We’ll update you regularly about its whereabouts and estimated delivery time.
      `,
  },
  {
    title: "Receive Your Motorcycle",
    text: `
After arriving at your destination of your motorcycle, it’s a good idea to give it a quick check for any damages. If you see anything that’s not right, you can file a claim. But if everything looks good, it’s time to start enjoying your motorcycle in its new home! Have fun and be safe out there!
      `,
  },
];

const clientsSaySliderData = {
  background: "/assets/motorcycle-shipping/clients_say_slider_background.jpg",
  backgroundColor: false,
  title: (
    <>
      What Our{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Clients Say!!​
      </Box>
    </>
  ),
  subTitle: "",
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

const fullyLicensedCards = {
  cardTitle: (
    <>
      What US Car-Go
      <Box component={"span"} sx={{ color: "#E01933" }}>
        {" "}
        Offers.
      </Box>
    </>
  ),
  cardText: (
    <>
      We're here to assist you with all of your{" "}
      <strong>shipping motorcycle</strong> requirements! We can take care of
      transporting one bicycle or a whole group of bikes for you! You get to
      decide whether you want your bike shipped in an open or enclosed manner,
      depending on your preferences and budget. Don't worry though, our friendly
      customer support team is available to help you out with any questions you
      may have, and they'll keep you updated on the status of your cargo. We
      believe it's important to keep you informed every step of the way!
    </>
  ),
  cardImage: "/assets/motorcycle-shipping/fully_licensed_card.webp",
  // text card width)
  Width: "570px",
  // image card width and height
  imageHeight: "410px",
  imageWidth: "570px",
  reverse: true,
};

const useDifferentData = {
  title: (
    <>
      What is the Average Cost to <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Ship A Motorcycle Cross Country?​
      </Box>
    </>
  ),
  text: (
    <>
      The price of <strong>shipping a motorcycle</strong> might change based on
      a number of variables. When calculating the price of shipping a motorbike,
      it's important to bear in mind the following:
    </>
  ),
};

const getQuoteData = {
  title: (
    <>
      Get Hassle-free and Safe{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Motorcycle Shipping
      </Box>{" "}
      with US Car-Go
    </>
  ),
  text: (
    <>
      From One Bike Lover to Another - Safe and Secure{" "}
      <em>
        <strong>Motorcycle Shipping</strong>
      </em>
      with US Car-Go.
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};

const rightSliderData = [
  {
    icon: LocalShippingIcon,
    title: "Cross Country Motorcycle Shipping.",
    text: `
 At US Car-Go, we offer domestic motorcycle shipping services that include moving your motorbike from one part of the country to another. If you need help with the transportation of your motorbike, we've got you covered. Reach out to us today to 
      `,
  },
  {
    icon: PersonIcon,
    title: "Experienced and Professional Service",
    text: `
   US Car-Go has been helping people transport their bikes from one place to another for a long time. We're really good at handling all kinds of motorbikes, whether they're meant for riding on the road or off-road. You can trust our professional staff to take care of your bike and make sure it gets to its destination safely.
      `,
  },
  {
    icon: WorkspacePremiumIcon,
    title: "State-of-the-Art Equipment",
    text: `
    At US Car-Go, we take your motorcycle's safety seriously. That's why we use top-notch equipment like trailers and tie-down systems that are specially made for motorcycle transportation. You can trust us to keep your bike safe and secure throughout the entire process.
      `,
  },
  {
    icon:  TextSnippetIcon,
    title: "Comprehensive Insurance Coverage",
    text: `
  Don't worry about your bike getting damaged during shipping! We've got you covered with comprehensive insurance. This means that if anything happens to your bike while it's in transit, you won't have to pay a dime for any repairs. Your bike's in good hands with us.
      `,
  },
  {
    icon: MapIcon,
    title: "Door-to-Door Motorcycle Shipping.",
    text: `
  At US Car-Go, we understand that transporting your motorbike can be stressful. That's why we offer a convenient service that brings the transportation right to your doorstep. We'll come to your location to pick up your motorbike and safely deliver it to its final destination. You can trust us to handle your precious vehicle with care and ensure it arrives in excellent condition. With our service, you can relax and let us take care of everything.
      `,
  },
  {
    icon: AccessTimeIcon,
    title: "Timely Delivery",
    text: `
   We understand that your time is precious, that's why we offer dependable and efficient motorbike transport services. Our top priority is to deliver your motorbike to you as quickly as possible without compromising on safety or quality.
      `,
  },
  {
    icon: AttachMoneyIcon,
    title: "Affordable Rates",
    text: `
  Welcome to US Car-Go! We specialize in hassle-free and budget-friendly motorcycle transportation services that are perfect for everyone. You don't have to worry about any upfront payments, and we offer a variety of great prices for you to choose from. If you need to transport multiple bikes, we've got you covered with a special discount! And if you're a military member, you can enjoy an extra special deal just for you. Contact us now to transport a motorcycle.
      `,
  },
];

function MotorcycleShipping() {
  return (
    <>
      <TransportServices {...transportServicesData} />
      <OurServiceProgress
        data={sliderData}
        text={true}
        title={"How to Ship a Motorcycle"}
        titleColor={true}
      />
      <ClientsSaySlider {...clientsSaySliderData} />
      <FullyLicensed {...fullyLicensedCards} />
      <UseDifferent
        {...useDifferentData}
        background={"/assets/motorcycle-shipping/use_different_background.jpg"}
      />
      <GetQuote {...getQuoteData} />
      <WhyChoose
        sliderData={rightSliderData}
        background={"/assets/expedited-car/why_choose_background.jpg"}
      />
      <OurAuto />
    </>
  );
}

export default MotorcycleShipping;
