import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import icon from "../../assets/image/1.png";
import icon1 from "../../assets/image/2.png";
import icon2 from "../../assets/image/3.png";
import icon3 from "../../assets/image/4.png";
import icon4 from "../../assets/image/5.png";
import mobileImg from "../../assets/image/6.png";
import mobileImg1 from "../../assets/image/7.png";

const useIntropage = () => {
  const faqItems = [
    {
      title: "Where is Maps available?",
      content:
        "Maps is available in over 200 regions around the world. For information on which features are available where you are, visit the Feature Availability page.",
    },
    {
      title: "How does Maps keep my information private?",
      content:
        "Maps doesn’t associate your data with your Apple Account, and Apple doesn’t keep a history of where you’ve been. Personalised features, like locating your parked car, are initiated right on your device. Data used to improve navigation, such as routes and search terms, is not associated with your identity. Instead, that information is based on random identifiers that are constantly changing.",
    },
    {
      title: "What are curated Guides?",
      content:
        "Curated Guides are lists of places created by trusted partners to help you find great places to eat, shop, meet friends or just explore. Maps offers more than 1,000 curated Guides in cities around the world. In iOS 15, tap Explore Guides in Maps to see Guides recommended by Maps editors.",
    },
    {
      title: "How can I integrate Maps into my app or website?",
      content:
        "Apple offers two ways for developers to integrate Maps into their products. MapKit allows you to integrate Maps into your iOS, iPadOS or macOS apps. You can display map or satellite imagery, add annotations and overlays, call out points of interest, determine information for map coordinates and more. Learn more about MapKit MapKit JS brings interactive maps to your website — complete with annotations, overlays and interfaces for Maps services like search and directions. Learn more about MapKit JS",
    },
    {
      title: "How can I get the latest Maps features?",
      content:
        "Update to iOS 15, iPadOS 15 and macOS Monterey to get the latest Maps features, including the interactive globe, 3D experiences for cities like San Francisco, Los Angeles, New York and London; nearby transit and more. Get iOS 15, Get iPadOS 15, Get macOS Monterey",
    },
    {
      title: "How does Apple collect data?",
      content:
        "Apple conducts surveys with vehicles and backpacks to build and maintain Apple Maps, support the Look Around feature and improve other Apple products and services. Your privacy is protected by censoring faces and license plates in published images. You can find more about our collection practices at maps.apple.com/imagecollection/in.",
    },
  ];
  const faqInfoItems = [
    "Electric vehicle routing requires iPhone with iOS 15 or later and a compatible vehicle.",
    "Available on iPhone with A12 Bionic and later.",
    "Flyover is available in selected cities on iPhone 4s or later, iPad Pro, iPad (2nd generation or later), iPad Air or later, iPad mini or later, and iPod touch (5th generation or later). To experience Flyover as you move your device through space, you need iPhone 6s or later, iPad Pro, or iPad (5th generation or later). Cellular data charges may apply.",
    "Guides in Maps are available in selected cities.",
  ];

  const infoItems = [
    { icon: icon, text: "Better ways ahead" },
    { icon: icon1, text: "Navigation Clean and Simple" },
    { icon: icon2, text: "A world of ways to explore the world" },
    { icon: icon3, text: "Guides to all the right places" },
    { icon: icon4, text: "Shows you around without following you around" },
  ];

  const flipCards = [
    {
      frontImage: mobileImg,
      title: "Driving",
      subtitle: " Your ultimate get-around.",
      description:
        "Maps gives you at-a-glance information to make every drive a good one. Route planning provides ETAs for future departures based on expected traffic. As you drive, you see traffic in real time. Turn lanes; bike, bus and taxi lanes; medians; and pedestrian crossings are displayed in incredible detail. And when you approach a complex intersection, Maps switches to a 3D road-level perspective to simplify what’s ahead.",
      anotherSide: false,
    },
    {
      frontImage: mobileImg1,
      title: "Walking",
      subtitle: " With you at every turn",
      description:
        "Use augmented reality and Indoor Maps to stay on route when you’re on foot. Just raise your iPhone to scan the buildings in the area, and Maps will show step-by-step guidance in augmented reality.2 You can also use Indoor Maps to easily find your way around major airports and shopping centres all over the world. See which restaurants are past security at the airport, where the nearest restroom is or what floor your favourite store is on at the mall.",
      anotherSide: true,
    },
  ];

  const [state, setState] = useState<{
    isScrolledDown: boolean;
    headerSize: "normal" | "large";
  }>({
    isScrolledDown: false,
    headerSize: "normal",
  });

  const { ref, inView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setState({
        isScrolledDown: scrollY > 30,
        headerSize: scrollY > 30 ? "large" : "normal",
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { faqItems, faqInfoItems, infoItems, state, ref, inView, flipCards };
};

export { useIntropage };
