import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h1>Book Services</h1>

                <form className="card-body">
                    <div className="grid md:grid-cols-2 gap-5">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    </div>
                    <div className="form-control mt-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <textarea name="" id="" cols="30" rows="10" className="border rounded-lg" required />
                    </div>
                        <input className="btn btn-block mt-5" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        
    );
};

export default CheckOut;