import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { getEmail } from "../../features/reset/emailRedux";
// import Spinner from "../Spinner";
import resetpassword  from "../../features/actions/Resetpassword";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { AiOutlineLeft } from "react-icons/ai";

const EnterEmail = ({ resetpassword, resetpasswordData = {} }) => {
  const [email, setEmail] = useState("");
  const { loading, message, error } = resetpasswordData;

  const handleSubmit = (event) => {
    event.preventDefault();
    resetpassword(email);
  };

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
          {loading && <p>Loading...</p>}
          {message && <p>{message}</p>}
          {error && <p>{error}</p>}
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  resetpasswordData: state.resetpassword,
});

export default connect(mapStateToProps, { resetpassword })(EnterEmail);
