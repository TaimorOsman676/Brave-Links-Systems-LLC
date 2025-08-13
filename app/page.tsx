import React from "react";
import Hero from "./components/Home/Hero";
import Aboutus from "./components/Home/AboutUs";
import Dedicated from "./components/Home/Dedicated";
import Digital from "./components/Home/Digital";
import Beliefs from "./components/Home/Beliefs";
import Work from "./components/Home/Work";
import Team from "./components/Home/Team";
import Featured from "./components/Home/Featured";
import FAQ from "./components/Home/FAQ";
import Testimonial from "./components/Home/Testimonials";
import Articles from "./components/Home/Articles";
import Join from "./components/Home/Joinus";
import Services from "./components/Home/Services";

import { Metadata } from "next";
import ContactUs from "./components/Home/ContactUs/ContactUs";
import PrivacyPolicy from "./components/Home/PrivacyPolicy/PrivacyPolicy";
export const metadata: Metadata = {
  title: "Brave Links Systems LLC",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Services />

      <Dedicated />
      <Digital />
      <Beliefs />
      <Work />
      <Team />
      <Featured />
      <FAQ />
      <Testimonial />
      <Articles />
      <Join />
      <ContactUs />
      {/* <Insta /> */}
    </main>
  );
}
