import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServicesCard from "./ServicesCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then(res => res.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <h1 className="my-10 font-bold text-green-600 text-2xl text-center">
        Our Services
      </h1>
      <div className="flex lg:flex-row">
        <div className="m-4 w-1/5 bg-white text-black rounded-md">
          <h1 className="font-semibold text-3xl text-center my-3 text-black">Categories </h1>
          <ul className="text-xl mx-2">
            <Link to=''>
            <li>Thread pipe Fittings</li>
            </Link>
            <Link to=''>
            <li className="my-2">Upvc Pipe & Fittings</li>
            </Link>
            <Link to=''>
            <li>Cpvc Pipe  Fittings</li>
            </Link>
            <Link to=''>
            <li className="my-2">Electronics Services</li>
            </Link>
            <Link to=''>
            <li>Add something</li>
            </Link>
            <Link to=''>
            <li className="mt-2">IT Services</li>
            </Link>
          </ul>
        </div>
        <div>
          <div className="my-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {services.map(service => (
              <ServicesCard key={service.id} service={service}></ServicesCard>
            ))}
          </div>
        </div>
      </div>
      {/* <div>
        <div className="my-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map(service => (
            <ServicesCard key={service.id} service={service}></ServicesCard>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Services;
