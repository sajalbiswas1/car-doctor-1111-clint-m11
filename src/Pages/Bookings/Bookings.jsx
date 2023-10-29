import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import BookingCard from "./BookingCard";


const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBooking] = useState([])
    console.log(user.email)
    const url = `http://localhost:5000/bookings?email=${user.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [url])
    console.log(bookings)

    const handleBookingConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:'PATCH',
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify({status: 'confirm'})
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0){
                const remaining = bookings.filter(book => book._id  !== id);
                const update = bookings.find(book => book._id == id);
                update.status = 'confirm'
                const newBooking = [update, ...remaining]
                setBooking(newBooking)
            }
        })
    }

    return (
        <div>
            <h2>This is bookings {bookings.length}</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Image</th>
                            <th>Service</th>
                            <th>date</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map(booking =><BookingCard 
                                key={booking._id} 
                                booking={booking}
                                bookings={bookings}
                                setBooking={setBooking}
                                handleBookingConfirm={handleBookingConfirm}

                                ></BookingCard>)
                        }
                       
                    </tbody>
                    
                    

                </table>
            </div>
        </div>
    );
};

export default Bookings;