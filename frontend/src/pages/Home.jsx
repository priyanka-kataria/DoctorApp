import React from "react";
import Header from "../components/Header";
import Speciality from "../components/Speciality";
import Topdoctors from "../components/Topdoctors";
import Banner from "../components/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <Speciality />
      <Topdoctors />
      {/* <Banner /> */}
    </div>
  );
}
