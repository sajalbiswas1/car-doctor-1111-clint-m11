import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row p-10">
                <div className='w-1/2 relative'>
                    <img src={person} className="max-w-sm rounded-lg shadow-2xl w-3/4" />
                    <img src={parts} className="max-w-sm border-8 border-white rounded-lg shadow-2xl w-1/2 absolute right-10 top-1/2" />
                </div>
                <div className='w-1/2 space-y-5'>
                    <h3 className='text-xl font-bold text-[#FF3811]'>About Us</h3>
                    <h1 className="font-bold text-5xl">We are qualified & of experience in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <button className="btn btn-error">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;