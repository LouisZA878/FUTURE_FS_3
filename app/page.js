import Image from "next/image";

import "./(components)/page.css";
import Link from "next/link";

import { CiLocationOn } from "react-icons/ci";
import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
  const basePath = process.env.NODE_ENV === "production" ? "/FUTURE_FS_3" : "";

  return (
    <header>
      <div className="info">
        <h4>Welcome to</h4>
        <h1>
          Dream <span>CreationZ</span>
        </h1>
        {/* <p>
          The cake of your dreams is <br />
          one
          <span>
            <b> Bite </b>
          </span>
          away.
        </p> */}
        <p className="location">
          <CiLocationOn /> <span>26 Protea Laan - Riviersonderend</span>
        </p>
        <p className="description">
          Thinking of having something intimate or an extravagant gathering? I
          have a <span>Cake</span> for that!
          <br />
          <br />
          From <span>Gender Reveals</span> to <span>Wedding Cakes</span>, to
          something a little bit more
          <span> Celebratory</span>, I'll be with you all the way. A cake is not
          just a cake. It becomes a form of endearment where we become part of
          the family. That is why I take pride in baking and decorating because
          it is my connection to you.
        </p>

        <div className="socials">
          <Link href="https://www.facebook.com/p/Dream-Creationz-100054555875108/">
            <FaFacebookSquare style={{ color: "blue" }} />{" "}
          </Link>
        </div>
      </div>
      <div className="image-container">
        <Image
          src={`${basePath}/images/resized/Cake1.jpg`}
          fill
          alt="The hero sections cake image"
          priority
        />
      </div>
    </header>
  );
};
const Events = () => {
  const basePath = process.env.NODE_ENV === "production" ? "/FUTURE_FS_3" : "";
  return (
    <section className="section-container">
      <h1>
        Crafted for<span> Every Occasion</span>
      </h1>
      <p>
        Why not join in on the <span>Fun</span>?
      </p>
      <div className="box-container">
        <div className="box">
          <div className="image-container">
            <Image
              src={`${basePath}/images/Cake14.jpeg`}
              fill
              alt="A birthday cake"
            />
          </div>
          <span>Birthdays</span>
        </div>
        <div className="box">
          <div className="image-container">
            <Image
              src={`${basePath}/images/Cake8.jpeg`}
              fill
              alt="A wedding cake"
            />
          </div>
          <span>Weddings</span>
        </div>
        <div className="box">
          <div className="image-container">
            <Image
              src={`${basePath}/images/Cake12.jpeg`}
              fill
              alt="A gender real cake"
            />
          </div>
          <span>Gender Reveals</span>
        </div>
        <div className="box">
          <div className="image-container">
            <Image
              style={{ objectFit: "cover" }}
              src={`${basePath}/images/Cake55.jpeg`}
              fill
              alt="A celebratory baptism cake"
            />
          </div>
          <span>Baptism</span>
        </div>
      </div>
    </section>
  );
};
const Pastries = () => {
  const basePath = process.env.NODE_ENV === "production" ? "/FUTURE_FS_3" : "";
  return (
    <section className="pastery-section">
      <h1>
        Designed for
        <span> Your </span>
        Day
      </h1>
      <p>
        Can't help but <span>Love</span> them.
      </p>
      <div className="box-container">
        <div className="image-container">
          <Image src={`${basePath}/images/Cake4.jpeg`} fill alt="Pastery" />
        </div>
        <div className="info">
          <h1>
            <span>Custom</span> Cakes
          </h1>
          <p>
            Every cake is freshly made & decorated to your wishes and needs. If
            you have an idea or example, we can work it to fit your taste.
          </p>
          <Link href="/gallery#cakes">View More</Link>
        </div>
      </div>
      <div className="box-container">
        <div className="info">
          <h1>
            <span>Velvet</span> Can't Be This Good
          </h1>
          <p>
            A variety of cakes theres a variety of colours, this includes from
            green to red, and all of them are delicious
          </p>
          <Link href="/gallery#cakes">View More</Link>
        </div>
        <div className="image-container">
          <Image src={`${basePath}/images/Cake5.jpeg`} fill alt="Pastery" />
        </div>
      </div>
      <div className="box-container">
        <div className="image-container">
          <Image src={`${basePath}/images/Image4.jpg`} fill alt="Pastery" />
        </div>
        <div className="info">
          <h1>
            <span>Dinasours</span> Will Never Be Out Of Fashion
          </h1>
          <p>
            It might be dangerous, it might be fearsome, or it might make your
            day.
          </p>
          <Link href="/gallery#cakes">View More</Link>
        </div>
      </div>
      {/* <div className="box-container">
        <div className="info">
          <h1>Milktart</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/gallery">View More</Link>
        </div>
        <div className="image-container">
          <Image src={`${basePath}/images/Milktart1.jpeg`} fill alt="Pastery" />
        </div>
      </div>
      <div className="box-container">
        <div className="image-container">
          <Image src={`${basePath}/images/Donuts1.jpeg`} fill alt="Pastery" />
        </div>
        <div className="info">
          <h1>
            Cinnamon Sugar <span>Doughnuts</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/gallery">View More</Link>
        </div>
      </div>
      <div className="box-container">
        <div className="info">
          <h1>
            Carrot <span>Cupcakes</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/gallery">View More</Link>
        </div>
        <div className="image-container">
          <Image src={`${basePath}/images/Cupcakes2.jpeg`} fill alt="Pastery" />
        </div>
      </div> */}
    </section>
  );
};

const EmptyStar = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
      <path
        fill="none"
        stroke="#000"
        strokeWidth="10"
        d="m203.8 43.5 20.2 62.1a25 25 0 0 0 23.8 17.3h65.3a25 25 0 0 1 14.7 45.2L275 206.5a25 25 0 0 0-9.1 28l20.2 62.1a25 25 0 0 1-38.5 28l-52.8-38.4a25 25 0 0 0-29.4 0l-52.8 38.4a25 25 0 0 1-38.5-28l20.2-62.1a25 25 0 0 0-9.1-28l-52.8-38.4a25 25 0 0 1 14.7-45.2h65.3c10.8 0 20.4-7 23.8-17.3l20.2-62.1a25 25 0 0 1 47.6 0Z"
      ></path>
    </svg>
  );
};
const HalfStar = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
      <path
        fill="#F09F33"
        d="M156.2 43.5 136 105.6a25 25 0 0 1-23.8 17.3H46.9a25 25 0 0 0-14.7 45.2L85 206.5a25 25 0 0 1 9.1 28l-20.2 62.1a25 25 0 0 0 38.5 28l52.8-38.4q6.8-4.8 14.7-4.8V26.2c-10 0-20 5.8-23.8 17.3Z"
      ></path>
      <path
        fill="none"
        stroke="#000"
        strokeWidth="10"
        d="m203.8 43.5 20.2 62.1a25 25 0 0 0 23.8 17.3h65.3a25 25 0 0 1 14.7 45.2L275 206.5a25 25 0 0 0-9.1 28l20.2 62.1a25 25 0 0 1-38.5 28l-52.8-38.4a25 25 0 0 0-29.4 0l-52.8 38.4a25 25 0 0 1-38.5-28l20.2-62.1a25 25 0 0 0-9.1-28l-52.8-38.4a25 25 0 0 1 14.7-45.2h65.3c10.8 0 20.4-7 23.8-17.3l20.2-62.1a25 25 0 0 1 47.6 0Z"
      ></path>
    </svg>
  );
};
const FullStar = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360">
      <path
        fill="#F09F33"
        stroke="#000"
        strokeWidth="10"
        d="m203.8 43.5 20.2 62.1a25 25 0 0 0 23.8 17.3h65.3a25 25 0 0 1 14.7 45.2L275 206.5a25 25 0 0 0-9.1 28l20.2 62.1a25 25 0 0 1-38.5 28l-52.8-38.4a25 25 0 0 0-29.4 0l-52.8 38.4a25 25 0 0 1-38.5-28l20.2-62.1a25 25 0 0 0-9.1-28l-52.8-38.4a25 25 0 0 1 14.7-45.2h65.3c10.8 0 20.4-7 23.8-17.3l20.2-62.1a25 25 0 0 1 47.6 0Z"
      ></path>
    </svg>
  );
};

const Reviews = () => {
  return (
    <section className="section-reviews">
      <h1>Reviews</h1>
      <p>
        Take a <span>Bite</span> out of these reviews.
      </p>
      <div className="box-container">
        <div className="box">
          <div>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
          </div>
          <p>
            The most beautiful cakes ever. The icing was unbelievably delicious.
            You made a little boy's heart very happy. You're really good at what
            you do.
          </p>
        </div>
        <div className="box">
          <div>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
          </div>
          <p>
            A creative masterpiece by non other than
            <span> Dream CreationZ</span>! The cake and brilliantly decorated
            was tasted phenomenal.
          </p>
        </div>
        <div className="box">
          <div>
            <FullStar />
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
          </div>
          <p>Another great surprise from the magic woman herself.</p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Pastries />
      <Events />
      <Reviews />
    </>
  );
}
