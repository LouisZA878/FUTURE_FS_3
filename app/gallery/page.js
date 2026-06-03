import "./page.css";

import Image from "next/image";

const page = () => {
  const basePath = process.env.NODE_ENV === "production" ? "/FUTURE_FS_3" : "";

  return (
    <>
      <section className="cake">
        <h1>
          Ca<span>kes</span>
        </h1>
        <p>
          One, Two, Three, a <span>Layer</span> for you and me
        </p>
        <div className="image-container">
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cak6.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Image2.jpg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Image4.jpg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Image6.jpg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Image5.jpg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cak6.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake5.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake7.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake9.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake11.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake12.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake16.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake18.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake21.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake22.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake23.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake4.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/resized/Cake4.jpg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake8.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake13.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake14.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake20.jpeg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/resized/Cake1.jpg`}
                alt="Cake image"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cupcakes">
        <h1>
          Cupca<span>kes</span>
        </h1>
        <p>
          Small things <span>taste</span> the best
        </p>
        <div className="image-container">
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cake17.jpeg`}
                alt="Cupcakes"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Cupcakes2.jpeg`}
                alt="Cupcakes"
                fill
              />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/PinkCupCakes.jpeg`}
                alt="Cupcakes"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className="doughnuts">
        <h1>
          Dough<span>nuts</span>
        </h1>
        <p>
          <span>Circles</span> make everything great
        </p>
        <div className="image-container">
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Donuts1.jpeg`}
                alt="Dougnuts"
                fill
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pasteries">
        <h1>
          Other <span>Pasteries</span>
        </h1>
        <p>
          <span>Cake</span> not your thing? I got you covered
        </p>
        <div className="image-container">
          <div className="box-container">
            <div className="box">
              <Image src={`${basePath}/images/Quich.jpeg`} alt="Quiche" fill />
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <Image
                src={`${basePath}/images/Milktart1.jpeg`}
                alt="Milktart"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
