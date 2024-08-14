import TransportServices from "../../components/enclosed-auto-transport/TransportServices";
import FullyLicensed from "../../components/enclosed-auto-transport/FullyLicensed";
import { Box } from "@mui/material";
import ClientsSaySlider from "../../components/enclosed-auto-transport/ClientsSaySlider";
import OurAuto from "../../components/car-shipping-cost/OurAuto";
import FAQs from "../../components/enclosed-auto-transport/FAQs";
import { NavLink } from "react-router-dom";
import GetQuote from "../../components/enclosed-auto-transport/GetQuote";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const fullyLicensedCards = {
  cardTitle: (
    <>
      Fully Licensed and{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Insured.
      </Box>
    </>
  ),
  cardText: `Get your vehicle where it needs to go, safely and on time, with our team of expert drivers. Our crew is fully licensed and insured, so you can trust us to take care of your ride. We believe that clear communication is key, which is why we keep you in the loop every step of the way. We know that shipping a vehicle can be a hassle, so we work hard to make it as easy as pie. Sit back, relax, and let us handle the rest!`,
  cardImage: "/assets/enclosed-auto-transport/fully_insured_card.jpg",
  // text card width)
  Width: "610px",
  // image card width and height
  imageHeight: "370px",
  imageWidth: "534px",
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
  subTitle: "For Enclosed vehicle transport reviews",
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

const fullyLicensedCards2 = {
  reverse: true,
  cardTitle: (
    <>
      Exceptional <br />
      <Box component={"span"} sx={{ color: "#E01933" }}>
        Customer Services
      </Box>
    </>
  ),
  cardText: (
    <>
      At US Car-Go Auto Transport, we offer exceptional customer service and
      competitive enclosed car transport solutions. Our dedicated team takes
      pride in ensuring your satisfaction throughout the process. We value our
      client relationships, aiming to build trust, honesty, and transparency.
      Count on us for top-notch enclosed auto transport tailored to your needs.{" "}
      <br />
      <br />
      Experience our reliable Enclosed Carrier Car Shipping and trust us to
      deliver the highest level of customer service and quality solutions.
      Contact us for inquiries or a quote, as we're here to assist you. Build a
      long-lasting partnership with US Car-Go Auto Transport & let us meet all
      your transport requirements.
    </>
  ),
  cardImage: "/assets/enclosed-auto-transport/fully_insured_card01.webp",
  // text card width)
  Width: "610px",
  // image card width and height
  imageHeight: "538px",
  imageWidth: "534px",
};

const faqs = {
  background: "/assets/enclosed-auto-transport/faqs_background.png",
  title: (
    <>
      FAQs{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        .
      </Box>
    </>
  ),
  text: (
    <>
      At US Car-Go, we know how much you love your high-value, vintage, classic,
      or sports vehicle. That's why we offer{" "}
      <strong>enclosed auto transport </strong> services that match the quality
      and craftsmanship of your prized possession. Our enclosed car haulers
      provide the highest level of security and safety during transportation,
      giving you the peace of mind you need during your move. Whether you're
      moving across town or across the country, we're here to help. As an
      experienced enclosed vehicle transport company, we have the expertise and
      know-how to handle even the most high-end beauties. We believe that you
      deserve the best, and we're committed to providing world-class{" "}
      <NavLink to={"/"} style={{ textDecoration: "none", color: "#fff" }}>
        cargo auto transport
      </NavLink>{" "}
      that meets your needs.
    </>
  ),
  listDot: true,
  data: [
    {
      title: "Enclosed Carrier Auto Transport: What is It?",
      text: "We offer a top-notch service called Enclosed Carrier Auto Transport that ensures your vehicle is transported with the utmost care. We use enclosed trailers or containers to keep your precious ride safe from external factors such as harsh weather, dust, and debris while it’s on the move. This type of transport is ideal for luxury, antique, and classic cars that require an extra level of protection during transit. With our Enclosed Carrier Auto Shipping service, you can rest easy knowing your vehicle is in good hands.",
    },
    {
      title: "Who is Enclosed Carrier Auto Transport for?",
      text: "",
      list: [
        {
          name: "High-end vehicles and Dealerships",
          listText:
            "US Car-Go understand that your car is more than just a means of transportation. It’s a valuable asset that deserves the best possible care and protection during transit. That’s why we offer enclosed auto shipping services that provide an extra layer of protection and security for your luxury or high-end vehicle. With our  option, your car is shielded from external factors such as weather, road debris, and other hazards that could potentially cause damage during transport. Plus, our security features provide peace of mind knowing that your car is safely and securely locked in place during transit, protected from theft or vandalism. Whether you’re a car collector, dealership, or simply an individual with a high-value vehicle, our enclosed car haulers services are the ideal solution to ensure your car arrives at its destination in pristine condition. Trust us to handle your valuable asset with the utmost care and professionalism.",
        },
        {
          name: "Privacy to Owners",
          listText:
            " We offer enclosed cargo auto transport to give vehicle owners a higher level of privacy. With our enclosed carriers, your vehicle will be completely shielded from view, so nobody outside of the carrier can see it. This is especially important for those who want to keep their vehicles private and avoid unwanted attention.",
        },
        {
          name: "Long-distance Transportation",
          listText:
            " Our Enclosed Car Carrier service is just what you need! With reliable and secure transportation, you can have peace of mind knowing your vehicle is in good hands. Our service is also perfect for car enthusiasts attending shows or auctions who want their prized possession to arrive in style. Choose our Enclosed Carrier Auto transport service for a worry-free and top-notch experience!",
        },
      ],
    },
    {
      title: "How Much is the Enclosed Auto Transport Cost?",
      text: "Shipping your car in an enclosed carrier is a premium service, and it can be pricier than other shipping methods. The cost can vary from $1,500 to $5,000 or more, depending on various factors. The exact amount may also differ based on the Carrier Company you choose. Motorcycle shipping companies  as they may have different pricing models and levels of service. Here are the factors that influence the estimate to ship a car:",
      list: [
        {
          name: "Distance",
          listText:
            " We understand that the distance of your vehicle’s journey is a major factor in determining the cost of our enclosed auto transport services. The farther your vehicle needs to go, the more fuel, time, and effort it takes to transport it safely to its destination. That’s why longer distance shipments may cost a bit more. We believe in being transparent with our pricing, so you know what to expect. Rest assured that the increased cost for longer-distance shipments is due to the extra fuel, labor, and time required to get your vehicle to its destination safely and securely.",
        },
        {
          name: "Vehicle Size and Weight",
          listText:
            " At US Car-Go Freight, we understand that the size and weight of your vehicle can impact the cost of shipping. When it comes to transporting cars, larger and heavier vehicles require more space and special equipment, which can increase the cost of shipping. For example, shipping a big SUV or pickup truck would cost more than shipping a smaller sedan or coupe.",
        },
        {
          name: "Time of Year",
          listText:
            " At US Car-Go Auto Transport, we want to make sure you’re informed about the prices for our services. You may notice that prices fluctuate depending on the season. During peak seasons like summer, when lots of people are moving, the demand for our services goes up, which can make prices a bit higher. During the winter months, harsh weather can impact transportation, and this may also make prices a bit higher.",
        },
        {
          name: "Pickup and Delivery Locations",
          listText:
            " When shipping to or from a far-flung or hard-to-reach place, you may run into higher transportation costs. And if you’re sending something to or from a bustling city, you might face an extra expense due to high demand and traffic congestion.",
        },
        {
          name: "Type of Enclosed Carrier",
          listText:
            " come in two types: soft-sided and hard-sided. Soft-sided carriers are more affordable, but offer less protection. On the other hand, hard-sided carriers provide greater protection and are more expensive as a result. So, if you need to transport something valuable or delicate, a hard-sided carrier may be the way to go. But if you’re on a budget and don’t need as much protection, a soft-sided carrier could be a great option.",
        },
        {
          name: "The level of protection",
          listText:
            " At some carriers, you can get extra protection for your goods during shipping.",
        },
        {
          name: "Additional Services",
          listText:
            " Quote to ship a car might change if you need an urgent or guaranted delivery. These services are more convenient since they provide quicker delivery timeframes. However, there is a price to pay for them.",
        },
      ],
    },
    {
      title: "Can I Ship My Vehicle With Personal Items?",
      text: "At Auto-shipping companies, it’s important to note that they’re not licensed to carry household goods or personal items during vehicle transportation. To ensure your belongings stay safe, we recommend not leaving personal items in your vehicle. However, don’t worry! Factory-issued equipment and permanently installed equipment are allowed and will be noted accordingly on the truck bill.",
    },
    {
      title: "Do I Really Need Enclosed Car Shipping?",
      text: "Looking to move your vehicle from one location to another and are unsure whether you should use an enclosed auto shipping services? Enclosed car shipping involves transporting your vehicle inside an enclosed trailer, rather than an open carrier trailer. Although open car carrier is typically the more common and affordable option, enclosed car shipping may be worth considering based on your unique needs. Here are some factors to keep in mind when deciding whether enclosed car auto shipping is the right choice for you:",
      list: [
        {
          name: "The value of your vehicle",
          listText:
            "If you’re looking to transport a precious or rare vehicle, like a classic, luxury, or sports car, you may want to consider enclosed car shipping. This option provides extra protection for your vehicle, making sure it arrives at its destination safely and securely. Even if your vehicle has a high value, an enclosed trailer can give you added peace of mind during the transportation process.",
        },
        {
          name: "The distance of the move",
          listText:
            " If you’re moving your vehicle across the country or on a long-distance journey, enclosed car shipping could be the way to go. Long trips mean your car will spend more time on the road, which increases the risk of hazards. By choosing enclosed transport, you’ll give your vehicle an added layer of protection during these longer journeys. With this option, you can rest assured that your car is secure and protected in transit.",
        },
        {
          name: "The time of year",
          listText:
            " When the winter months hit or if you’re in an area with unpredictable weather, transporting your vehicle can be a real hassle. That’s where enclosed auto transport comes in – it’s the best solution for keeping your vehicle protected from the elements. Rain, snow, and ice can all cause damage to your ride during transport, but with enclosed transport, you won’t have to worry about a thing. Plus, if you’re transporting an exotic vehicle that requires extra care and protection, enclosed transport is a must.",
        },
        {
          name: "Your personal preference Enclosed Vehicle Shipping",
          listText:
            "  is more costly than its open-air counterpart, but it’s well worth it if you value your vehicle’s safety and security.",
        },
      ],
    },
    {
      title:
        "Do I Need to Make Arrangements in Advance for My Enclosed Auto Transport?",
      text: "You should get an estimate for shipping a vehicle and place your order at least 7–10 days in advance. If you have an urgent need to relocate your car, however, we can work with you to make that happen.",
    },
    {
      title: "What Are the Benefits of Choosing Enclosed Carrier Car Shipping?",
      text: "Enclosed auto shipping services have several advantages and should be considered. The following are some of them:",
      list: [
        {
          name: "Protection from the Elements",
          listText:
            "With an enclosed trailer, your vehicle will be protected from rain, snow, hail, and extreme temperatures. This is especially important if your car or truck has a sensitive paint job that can easily be damaged by these elements. We take pride in our enclosed trailers and the level of protection they provide. You can trust us to transport your vehicle safely and securely, without worrying about any outside elements damaging it.",
        },
        {
          name: "Better for Classic and Antique Cars",
          listText:
            " This method of shipping works well for vintage automobiles. These automobiles often feature one-of-a-kind components that must be handled with care during shipment. To further ensure that these automobiles reach their destination in pristine shape, an enclosed carrier should be used.",
        },
        {
          name: "Reduced Risk of Damage",
          listText:
            " Protect your car during transport with our enclosed carriage service. Our trailers have walls and a top that shield your vehicle from other cars, road debris, and other hazards on the road. That means fewer dings, dents, and other issues during transit. Trust us to transport your vehicle with care, whether it’s a classic car, luxury ride, or daily driver.",
        },
        {
          name: "Enhanced Security",
          listText:
            "  The safety of your automobile is prioritized by our enclosed auto transport carriers. We use top-of-the-line enclosed trailers that are designed to keep your vehicle hidden and protected from potential theft. Plus, our hydraulic lift system ensures that your vehicle is loaded with care, reducing the risk of damage during the loading process. During transit, your vehicle is securely fastened with straps and other restraints to prevent any movement.",
        },
        {
          name: "Peace of Mind",
          listText:
            " If you own a top-of-the-line luxury car, a classic automobile, or any other high-value vehicle, you know how precious it is. That’s why enclosed carrier  auto transporters are the perfect solution for your transportation needs. With this service, you can have peace of mind knowing your vehicle will arrive at its destination in the same pristine condition as when you entrusted it to us. This is especially important for long-distance transport where the risk of damage is greater. At US CAR-GO, we understand the value of your vehicle, and we take every precaution to ensure its safety during transport. Our enclosed trailer auto transport offer the ultimate protection for your vehicle against external elements and potential damage.",
        },
        {
          name: "Customized Transport Options",
          listText:
            " We offer Enclosed Auto Transport Carriers that provide you with a range of transport options customized to your needs. we offer lift gate service to help load and unload cars with limited ground clearance. For owners of unique or difficult-to-transport vehicles, we provide specialized shipping options that offer flexibility and convenience.",
        },
        {
          name: "More Flexibility",
          listText:
            " If you choose to transport your car in an enclosed carrier, you’ll have more control over when your vehicle is picked up and delivered. Enclosed carriers are usually scheduled for specific dates, which means you can plan ahead and make sure your car arrives on time. This is especially helpful if you have a busy schedule and need your car at a specific time.",
        },
      ],
    },
    {
      title:
        "What is the Coverage Protection Policy for Enclosed Carrier Auto Shipping?",
      text: "Many auto transporters give enclosed carriers an extra layer of safety from the weather, debris, and other possible dangers. Choosing the right insurance package is crucial to keep your precious vehicle safe during transportation. At US CAR-GO, we offer various types of insurance policies to suit your needs. Let’s take a look at some of them:",
      list: [
        {
          name: "Basic Coverage Protection",
          listText:
            "When you ship your car with an auto transport company, they usually offer a type of coverage called basic coverage protection. This coverage is designed to protect your vehicle in case it gets damaged during transit due to accidents or mistakes by the carrier, like collisions or drops. The coverage usually pays for the actual cash value of your car, which is determined based on the car’s make, model, and year.",
        },
        {
          name: "Comprehensive Coverage Protection",
          listText:
            " Comprehensive coverage protection is a more extensive type of insurance policy that provides a greater level of protection than basic coverage. With this policy, you can be covered for damages caused by natural disasters, theft, and vandalism. Additionally, it covers the cost of repairs or replacement if your property is damaged while in transit. It’s a great way to ensure that you’re fully protected and have peace of mind knowing that you’re covered in a variety of situations.",
        },
        {
          name: "Excess Liability Insurance",
          listText:
            " Do you know that excess liability insurance can give you extra protection for your business? It’s like an added layer of coverage that goes beyond the standard liability policy. With this policy, you can have peace of mind knowing that you’re financially protected in case someone files a claim against your business for damages caused during transit. It’s like a safety net that ensures you have enough coverage to pay for any unexpected expenses that may arise during transportation.",
        },
        {
          name: "Gap Insurance",
          listText:
            "  Gap insurance is a special kind of coverage that can help you avoid financial stress in case your car gets damaged while it’s still being paid off. Basically, it covers the difference between the amount you still owe on your car loan and the actual value of the vehicle. This can give you peace of mind and protect you from unexpected expenses if something happens to your car while you’re still making payments.",
        },
        {
          name: "Disappearing Deductible Insurance",
          listText:
            "With Disappearing Deductible insurance, you can get a lower deductible each year you don’t file any claims for damages while driving. It’s a great way to incentivize safe driving and also ensure that you’re financially protected in case of any unexpected accidents. So, the longer you maintain a good driving record, the more you’ll benefit from this policy.",
        },
        {
          name: "Guaranteed Delivery Date Insurance",
          listText:
            " You can be certain that your car will arrive on time thanks to guaranteed delivery date insurance from your auto transporters. This coverage compensates you monetarily if the shipping company is negligent and fails to deliver your package on time.",
        },
      ],
    },
    {
      title:
        "Why US Car-Go is the Perfect Choice for Your Enclosed Carrier Auto Shipping?",
      text: "If you need to ship your vehicle and want a trustworthy and safe option, check out US Car-Go!  They’re the best in the business when it comes to enclosed carrier shipping, with a proven track record of excellence and years of experience.",
      list: [
        {
          name: "Basic Coverage Protection",
          listText:
            "When you ship your car with an auto transport company, they usually offer a type of coverage called basic coverage protection. This coverage is designed to protect your vehicle in case it gets damaged during transit due to accidents or mistakes by the carrier, like collisions or drops. The coverage usually pays for the actual cash value of your car, which is determined based on the car’s make, model, and year.",
        },
        {
          name: "Auto Enclosed Trailer,",
          listText:
            " with this option, your vehicle will be fully protected from any potential dangers on the road. Unlike open carrier shipping, enclosed carriers provide complete protection from the elements and road debris. This means your car will arrive at its destination in the same condition it was loaded onto the carrier. So, if you want maximum protection for your precious ride during transport, go for enclosed auto transport.",
        },
        {
          name: "Multiple Shipping Option",
          listText:
            "At US Car-GO, we understand that shipping your vehicle can be a daunting task. That’s why we offer a range of enclosed carrier car shipping options that are tailored to meet your specific needs. Whether you need to transport a single vehicle or an entire fleet, we have the knowledge and resources to get the job done right. Our nationwide network of carriers allows us to transport your vehicle to any destination in the United States.",
        },
        {
          name: "Safety and Security",
          listText:
            "At US Car-Go, we understand that your vehicle is important to you, and we want to ensure that it is protected during transport. That’s why we only work with fully insured and licensed carriers. We also have a strict screening process in place to ensure that we only use the most qualified and experienced carriers to handle your shipment.",
        },
        {
          name: "Exceptional Customer Service",
          listText:
            "We want your shipping experience to be as smooth and easy as possible. Our team of shipping experts will assist you in finding the best options for your specific needs and keep you informed every step of the way. If you have any questions or concerns, our friendly US Car-Go customer service team is always available to help.",
        },
        {
          name: "Competitive Pricing ",
          listText:
            "At US Car-Go, we know that shipping your vehicle can be expensive. That’s why we offer affordable pricing for our enclosed auto shipping services. We’re committed to providing you with high-quality and reliable shipping solutions at a reasonable price. You can trust us to take care of your vehicle while it’s in our care. Looking for a trustworthy  auto transporter  that prioritizes your vehicle’s safety and affordability? Look no further! Contact us to learn more about our services and start your shipping journey with confidence.",
        },
      ],
    },
  ],
};

const getQuoteData = {
  background: "/assets/enclosed-auto-transport/get_quote_background.jpg",
  title: (
    <>
      STILL, HAVE MORE SHIPPING QUESTIONS?{" "}
      <Box component={"span"} sx={{ color: "#E01933" }}>
        US CAR-GO GOT YOU COVERED
      </Box>
    </>
  ),
  text: (
    <>
      Shipping Your Car Like Royalty - Our Enclosed Carrier Does the Job with
      Elegance! <br />
      If you have more questions, we're here to help! You can get a quote, or if
      you prefer to speak with a real person in real-time, you can contact us
      and we'll be happy to assist you. We're always ready to provide you with
      the information you need!
    </>
  ),
  buttonLink: "tel:+18882498840",
  buttonText: "Call At (888) 249-8840",
  buttonIcon: <PhoneAndroidIcon />,
};

const EnclosedAutoTransport = () => {
  return (
    <>
      <TransportServices />
      <FullyLicensed {...fullyLicensedCards} />
      <ClientsSaySlider {...clientsSaySliderData} />
      <FullyLicensed {...fullyLicensedCards2} />
      <FAQs {...faqs} />
      <GetQuote {...getQuoteData} />
      <OurAuto />
    </>
  );
};

export default EnclosedAutoTransport;
