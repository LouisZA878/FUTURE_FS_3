import Image from "next/image";

import "./(components)/page.css";
import Link from "next/link";

import { FaFacebookSquare } from "react-icons/fa";

const Hero = () => {
  return (
    <header>
      <div className="info">
        <h4>Welcome to</h4>
        <h1>
          Dream <span>CreationZ</span>
        </h1>
        <p>
          The cake of your dreams is <br />
          one
          <span>
            <b> Bite </b>
          </span>
          away.
        </p>
        <div className="socials">
          <Link href="https://www.facebook.com/p/Dream-Creationz-100054555875108/">
            <FaFacebookSquare style={{ color: "blue" }} />{" "}
          </Link>
        </div>
      </div>
      <div className="image-container">
        <Image
          src="/images/resized/Cake1.jpg"
          fill
          alt="The hero sections cake image"
          priority
        />
      </div>
    </header>
  );
};
const Events = () => {
  return (
    <section className="section-container">
      <h1>Popular Events</h1>
      <p>
        Why not join in on the <span>Fun</span>?
      </p>
      <div className="box-container">
        <div className="box">
          <div className="image-container">
            <Image src="/images/Cake14.jpeg" fill alt="A birthday cake" />
          </div>
          <span>Birthdays</span>
        </div>
        <div className="box">
          <div className="image-container">
            <Image src="/images/Cake8.jpeg" fill alt="A birthday cake" />
          </div>
          <span>Weddings</span>
        </div>
        <div className="box">
          <div className="image-container">
            <Image src="/images/Cake12.jpeg" fill alt="A birthday cake" />
          </div>
          <span>Gender Reveals</span>
        </div>
        <div className="box">
          <div className="image-container">
            <Image src="/images/Cake20.jpeg" fill alt="A birthday cake" />
          </div>
          <span>Baptism</span>
        </div>
      </div>
    </section>
  );
};
const Pastries = () => {
  return (
    <section className="pastery-section">
      <h1>Popular Pastries</h1>
      <p>
        Can't help but <span>Love</span> them.
      </p>
      <div className="box-container">
        <div className="image-container">
          <Image src="/images/Cake4.jpeg" fill alt="Pastery" />
        </div>
        <div className="info">
          <h1>
            <span>Custom</span> Birthday Cakes
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
          <Image src="/images/Milktart1.jpeg" fill alt="Pastery" />
        </div>
      </div>
      <div className="box-container">
        <div className="image-container">
          <Image src="/images/Donuts1.jpeg" fill alt="Pastery" />
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
          <Image src="/images/Cupcakes2.jpeg" fill alt="Pastery" />
        </div>
      </div>
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
            <HalfStar />
          </div>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
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
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
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
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <Pastries />
      <Reviews />
    </>
  );
}
