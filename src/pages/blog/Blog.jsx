import React, { useState } from "react";
import BlogTitle from "../../components/blog/BlogTitle";
import BlogCardContainer from "../../components/blog/BlogCardContainer";

const blogPostData = [
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Louisiana-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Louisiana Car Transport",
      date: "July 31, 2024",
      text: "Louisiana Car Transport Louisiana Car Transport: A Comprehensive Guide by US Car-Go Freight When it comes to transporting vehicles in Louisiana, US Car-Go Freight...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/how-to-start-car-hauling-business-img-1300x650.jpg.webp",
      title: "How to Start a Car Hauling Business",
      date: "July 26, 2024",
      text: "How to Start a Car Hauling Business Starting a car hauling business Car hauling business can be a lucrative venture for entrepreneurs interested in...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Rhode-Island-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Rhode Island Car Transport",
      date: "July 25, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Delaware-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Delaware Car Transport",
      date: "July 22, 2024",
      text: "Delaware Car Transport US Car-Go Freight: Your Trusted Partner for Reliable And Secure Delaware Car Transport Relocating for work, buying a car out of...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Vermont-Car-Shipping-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Vermont Car Transport",
      date: "July 19, 2024",
      text: "Vermont Car Transport US Car-Go Freight: Your Top Choice for Vermont Car Transport Are you looking to ship your car to or from the...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/New-Jersey-Car-Shipping-US-CarGo-Freight-1300x650.jpg.webp",
      title: "New Jersey Car Transport",
      date: "July 12, 2024",
      text: "New Jersey Car Transport Ship Your Car Safely to New Jersey with US Car-Go Freight Looking for hassle-free car shipping to New Jersey? Look...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/Maryland-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "Maryland Car Transport",
      date: "July 11, 2024",
      text: "Maryland Car Transport US Car-Go Freight: The Number One District of Columbia Car Transport Company Maryland is a state in the Mid-Atlantic region of...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/07/District-of-Columbia-Car-Transport-US-CarGo-Freight-1300x650.jpg.webp",
      title: "District of Columbia Car Transport",
      date: "July 9, 2024",
      text: "District of Columbia Car Transport US Car-Go Freight: The Number One District of Columbia Car Transport Company Transport your car safely to or from...",
    },
  ],
  // end
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
  ],
  [
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
    {
      img: "https://uscargofreight.com/wp-content/uploads/2024/08/New-Hampshire-Shipping-US-Car-Go-Freight-1300x650.jpg.webp",
      title: "New Hampshire Car Transport",
      date: "August 5, 2024",
      text: "Rhode Island Car Transport US Car-Go Freight: Your Trusted Car Transport to Rhode Island When planning to transport your car to Rhode Island, partnering...",
    },
  ],
];

function Blog() {
  const [blog, setBlog] = useState(blogPostData);
  const [countLoad, setCoutLoad] = useState(1);
  const [data, setData] = useState(blog[0]);
  const [disabled, setDisabled] = useState(false);

  const handleClick = () => {
    // added new obj in data state //
    if (!blog.length - 1 === countLoad) {
      setCoutLoad((prev) => prev + 1);
      setData((prevData) => [...prevData, blog[countLoad]].flat());
    } else {
      // stop added obj and disabled lore button //
      setDisabled(true);
    }
  };

  return (
    <>
      <BlogTitle />
      <BlogCardContainer
        handleClick={handleClick}
        data={data}
        disabled={disabled}
      />
    </>
  );
}

export default Blog;
