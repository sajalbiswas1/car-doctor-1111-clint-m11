import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";
import useAxiosApi from "../../../Hooks/useAxiosApi";
// import axios from "axios";


const Services = () => {
    const [asc, setAsc] = useState(true)
    const [services, setServises] = useState([])
    const [search, setSearch] = useState('')
    // const [serviceSort, setServisesSort] = useState(asc)
    const axiosApi = useAxiosApi();
    useEffect(() => {
        // fetch('http://localhost:5000/services')
        // .then(res => res.json())
        // .then(data => setServises(data))
        console.log(asc)
        axiosApi(`services/?sort=${asc ? 'asc' : 'desc'}&search=${search}`)
            .then(res => setServises(res.data))

    }, [asc, axiosApi,search])

    const handleSearch = e => {
        e.preventDefault()
        const searchValue = e.target.text.value;
        setSearch(searchValue)
    }


    console.log(services)
    return (
        <div className="mt-10">
            <div className="text-center space-y-5">
                <h3 className="text-xl font-bold text-[#FF3811]">Service</h3>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                <form onSubmit={handleSearch}>
                    <input className="border border-black p-2 mr-2 rounded-xl" type="text" name="text" id="" />
                    <input type="submit" name="" value="Search" className="btn btn-accent" id="" />
                </form>
                <button onClick={() => setAsc(!asc)} className="btn btn-success">Price: {asc ? "High to Low" : "Low to high"}</button>
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