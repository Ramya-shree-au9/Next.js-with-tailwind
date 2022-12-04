import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Slider from "../components/Slider/Slider";
import { SliderData } from "../components/Slider/SliderData";
import Instagram from "../components/InstagramGallery/Instagram";
import Contact from "../components/Contact/Contact";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Keep moving</title>
        <meta
          name="description"
          content="Created as template for future work"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Let Starts" message="Learn Next.js" />
      <Slider slides={SliderData} />
      <Instagram />
      <Contact />
    </>
  );
};

export default Home;
