import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import useAxiosApi from "../../../Hooks/useAxiosApi";
// import axios from "axios";


const Services = () => {
    const [asc,setAsc]= useState(true)
    const [services,setServises]=useState([])
    // const [serviceSort, setServisesSort] = useState(asc)
    const axiosApi = useAxiosApi();
    useEffect(()=>{
        // fetch('http://localhost:5000/services')
        // .then(res => res.json())
        // .then(data => setServises(data))
        console.log(asc)
        axiosApi(`services/?sort=${asc ? 'asc': 'desc' }`)
        .then(res =>setServises(res.data))

    },[asc, axiosApi])
    console.log(services)
    return (
        <div className="mt-10">
            <div className="text-center space-y-5">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <button onClick={()=>setAsc(!asc)} className="btn btn-success">Price: {asc ? "High to Low": "Low to high"}</button>
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