import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
//import { signInWithGoogle } from '../firebase/firebase.utils'; // Import Google sign-in function
import gLogo from "../assets/google-logo.svg"
import { GoogleAuthProvider } from 'firebase/auth';
const googleProvider = new GoogleAuthProvider()

const SignUp = () => {
  const { createUser, signUpWithGmail } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log('Signup Email:', email);
    console.log('Signup Password:', password);
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert("User created successfully");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  const handleGoogleSignIn =  () => {
    try {
      signUpWithGmail( ).then((result)=>{
        const user= result.user;
        alert("User signed in with Google");
        navigate(from, { replace: true });
      });
    } catch (error) {
      const errMessage= error.message;
      const errCode= error.code;
      console.error("Error signing in with Google:", error.message);
      setError(errMessage)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Sign Up Form </h1>
              </div>
              <div className="divide-y  divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      value={email}
                      onChange={handleEmailChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-rose-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">
                      Password
                    </label>
                  </div>
                  <p>If you have an account, please <Link to="/login" className='text-blue-700 underline '>Login</Link> here</p>
                  <div className="flex space-x-4">
                    <button
                      onClick={handleSubmit}
                      className="bg-blue-500 text-white rounded-md px-2 py-1">
                      Submit
                    </button>
                    {/* Google Sign-In Button */}
                    <button
                      onClick={handleGoogleSignIn}
                      className="rounded-md px-2 py-1 flex items-center space-x-2">
                      <img src={gLogo} alt="Google Logo" className="w-4 h-4" />
                      Login with Google
                    </button>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
