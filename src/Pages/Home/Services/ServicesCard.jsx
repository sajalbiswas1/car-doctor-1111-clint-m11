import { BsArrowRight } from 'react-icons/bs';

const ServicesCard = ({ service }) => {
    const { img, title, price } = service;

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl h-full" />
            </figure>
            <div className="px-10 py-5 space-y-3">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <div className='flex justify-between items-center'>
                    <p className='text-xl font-semibold text-[#FF3811]'>Price: {price}</p>
                    <BsArrowRight className='text-[#FF3811]'></BsArrowRight>
                </div>
            </div>
            
        </div>
    );
};

export default ServicesCard;