import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getEmail } from "../../features/reset/emailRedux";
import Spinner from "../Spinner";
import { Link } from "react-router-dom"
import { AiOutlineLeft } from "react-icons/ai";

const EnterEmail = () => {
  const [email, setEmail] = useState("");

  const { gettingE, gottenE, lostE, message } = useSelector(
    (state) => state.email
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (gottenE) {
      toast.success('Check your Email for the reset password link')
      navigate("/home");
    }
  }, [gottenE, navigate]);

  const dispatch = useDispatch();

  const data = { email };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (lostE) {
      toast.error(message);
    }
    dispatch(getEmail(data));
    console.log(data);
  };

  if (gettingE) {
    return <Spinner />;
  }


  return (
    <div className="mt-7 w-[90%] mx-auto md:w-[80%]">
      <div className="flex text-[#29335C] mt-20 mb-5 mx-4">
        <Link className="w-[5%] md:text-3xl text-3xl font-bold" to="/login">
          <AiOutlineLeft />
        </Link>
        <div className="w-[95%] text-center text-3xl font-bold">
          Change Password
        </div>
      </div>
      <div className="text-center text-[#29335C] text-4xl font-bold mt-24">
        <h1>Enter Email</h1>
      </div>
      <div className="form md:w-[50%] mx-auto">
        <form method="put" action=" " onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter your email address"
          />
          <br />
          <button type="submit">Send Reset Passworrd Link</button>
        </form>
      </div>
    </div>
  );
};

export default EnterEmail