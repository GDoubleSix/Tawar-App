import React from "react";
import Container from "./Container";
import Button from "./Button";

function Hero() {
  return (
    <section
      id="home"
      className="flex items-center justify-center relative h-screen mb-3 bg-fixed bg-center bg-cover hero-img"
    >
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <Container className="text-center text-white z-20">
          <h1 className="text-4xl font-bold md:text-5xl">TANI DAN WARGA</h1>
          <h3 className="text-2xl font-semibold md:text-3xl">
            Lawan <b>MAFIA</b> dengan <b className=" text-green-700">TAWAR</b>
          </h3>
          <Button className="mt-5 font-bold py-3 px-7 rounded-md text-xl lg:hidden">
            Join Us
          </Button>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
