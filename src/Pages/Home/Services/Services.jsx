import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const Services = () => {
    const [services,setServises]=useState([])
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServises(data))
    },[])
    // console.log(services)
    return (
        <div className="mt-10">
            <div className="text-center space-y-5">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
                {
                    services.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
                }
                </div>
            </div>
        </div>
    );
};

export default Services;