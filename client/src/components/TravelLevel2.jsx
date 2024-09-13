import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TravelLevel2() {
  const [email, setEmail] = useState("");
  const name = "Karan Gour";
  const org = "Yatra";

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/travel3bizz", { state: { email, name, org } }); // Navigate to Level 3 with email
  };

  return (
    <div className="flex flex-col items-center h-screen relative">
      <h1 className="heading text-dark-grey">Travel Level 2 Page</h1>
      <span className="sub-heading text-dark-grey">(to be designed later)</span>
      <div className="absolute flex flex-col h-full w-full justify-center items-center">
        <p className="sub-heading text-dark-grey uppercase">Enter your email</p>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border rounded-lg border-red p-2"
          />
          <button
            type="submit"
            className="body bg-light-blue m-4 p-2 text-center rounded-lg  text-dark-grey"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
