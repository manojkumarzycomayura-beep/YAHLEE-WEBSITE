import React from "react";
import {
  Truck,
  ShieldCheck,
  RotateCcw,
  Headphones,
} from "lucide-react";

const TrustStrip = () => {
  const benefits = [
    {
      icon: <Truck size={25} />,
      title: "Free Shipping",
      text: "On orders above ₹2,999",
    },
    {
      icon: <ShieldCheck size={25} />,
      title: "Secure Payments",
      text: "Safe & trusted checkout",
    },
    {
      icon: <RotateCcw size={25} />,
      title: "Easy Returns",
      text: "Simple return process",
    },
    {
      icon: <Headphones size={25} />,
      title: "Customer Support",
      text: "We're here to help",
    },
  ];

  return (
    <section className="trust-strip">
      <div className="container">

        <div className="trust-grid">
          {benefits.map((item, index) => (
            <div className="trust-item" key={index}>

              <div>
                {item.icon}
              </div>

              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustStrip;