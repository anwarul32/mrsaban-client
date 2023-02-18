import React, { useEffect, useState } from "react";
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
      <div>
        <div className="my-12 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {
            services.map(service => 
            <ServicesCard
              key={service.id}
              service= {service}
            ></ServicesCard>)
          }
        </div>
      </div>
    </div>
  );
};

export default Services;
