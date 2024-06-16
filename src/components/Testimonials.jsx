import React from "react";
import { MdStar } from "react-icons/md";

const TestimonialCard = ({ name, quote, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between">
      <p className="text-lg font-light mb-4">{quote}</p>
      <div className="flex items-center">
        <span className="text-gray-800 font-bold mr-2">{name}</span>
        <div className="flex">
          {Array.from({ length: rating }).map((_, i) => (
            <MdStar key={i} className="text-yellow-500" />
          ))}
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sutrisno",
      quote:
        "TAWAR sangat membantu dalam menyediakan produk pertanian yang berkualitas .",
      rating: 5,
    },
    {
      name: "Putri Sakinah",
      quote:
        "Selama saya belanja bahan pokok di TAWAR kualitas dan pengiriman sangat baik .",
      rating: 4,
    },
    {
      name: "Mike Jones",
      quote: "I am very satisfied with this product. It is the future.",
      rating: 4,
    },
  ];

  return (
    <div id="testimonials" className="py-12 mt-7 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-green-800 mb-8">
          Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
