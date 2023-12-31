

const BookingCard = ({ booking, bookings,setBooking, handleBookingConfirm }) => {
    const { _id, customerName, date, price, service, img, status } = booking;
    const handleDelete = id => {
        const proceed = confirm('Are You sure')
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount > 0){
                        const remaining = bookings.filter(book => book._id !== id)
                        setBooking(remaining)
                    }
                })
        }
    }
    const handleBooking = id =>{
        handleBookingConfirm(id)
    }
    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">

                    <div className=" w-24 h-24">
                        {
                            img && <img className="rounded-lg" src={img} alt="" />
                        }
                    </div>

                    <div>
                        <div className="font-bold">{customerName}</div>

                    </div>
                </div>
            </td>
            <td>
                {service}
            </td>
            <td>{date}</td>
            <td>{price}</td>
            <th>
                {
                    status === 'confirm'? <span className="font-bold text-blue-400">Confirm</span>:
                    <button onClick={()=>handleBooking(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
                
            </th>
        </tr>
    );
};

export default BookingCard;