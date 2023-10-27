import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const Books = () => {
    const data = useLoaderData();
    const { _id, price, title, img } = data
    const { user } = useContext(AuthContext)
    console.log(data)
    const handleBook = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const price = form.price.value;
        const bookings = {
            customerName: name,
            date,
            email,
            img,
            price,
            service_id: _id,
            service: title
        }
        console.log(bookings)
        fetch('http://localhost:5000/bookings',{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(bookings)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
    }

    return (
        <div>
            <h1 className="text-center text-3xl font-bold">This is a Book</h1>
            <form onSubmit={handleBook} className="card-body">
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" defaultValue={user?.name} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">date</span>
                        </label>
                        <input type="date" placeholder="date" name="date" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" defaultValue={user?.email} readOnly className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Due amount</span>
                        </label>
                        <input type="text" defaultValue={'$' + price} className="input input-bordered" name="price" required />
                    </div>
                </div>
                <div className="form-control mt-6">
                    {/* <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <textarea name="" id="" cols="30" rows="10" className="border rounded-lg" required />
                    </div> */}
                    <input className="btn btn-block mt-5" type="submit" value="Order Confirm" />
                </div>
            </form>
        </div>
    );
};

export default Books;