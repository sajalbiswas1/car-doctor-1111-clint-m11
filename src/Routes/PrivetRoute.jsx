import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const {user,loading}= useContext(AuthContext)
    if(loading){
        return <span className="loading loading-spinner text-warning"></span>
    }
    if(user.email){
        return children;
    }
    return <Navigate to={'/login'}></Navigate>
    
};

export default PrivetRoute;