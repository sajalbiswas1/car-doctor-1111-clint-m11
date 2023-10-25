import { Link } from 'react-router-dom';
import logo from '../../assets/images/login/login.svg';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const {userLogin } = useContext(AuthContext)
    const handleForm = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        userLogin(email,password)
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-10">
                    <img src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-3xl font-bold text-center pt-10">Login now!</h1>
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='px-8 pb-6'>
                    <p>Have an Account? <Link className='font-bold text-[#FF3811]' to={'/signUp'}>Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;