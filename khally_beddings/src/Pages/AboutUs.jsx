import "./AboutUs.css";
import { IoReturnUpBack } from "react-icons/io5";

const AboutUs = () => {
  return (
    <div className="about-container">
      <a href="/"><IoReturnUpBack className="back" /></a>
      <h1>About Khally Beddings</h1>
      <p>
        At Khally Beddings, we believe that a great day starts with a great
        night’s sleep. That’s why we offer high-quality bedsheets, pillows,
        towels, and more to keep you cozy and comfortable.
      </p>
      <p>
        Our products are carefully selected to blend comfort, durability, and
        style—all at affordable prices. Whether you're revamping your bedroom or
        stocking your guesthouse, Khally Beddings has got you covered.
      </p>
      <p>Thank you for supporting our journey. 💙</p>
    </div>
  );
};

export default AboutUs;
