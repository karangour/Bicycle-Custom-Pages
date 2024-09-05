import React from "react";
import { useLocation } from "react-router-dom";

export default function TravelLevelData3() {
  const location = useLocation();
  const { email } = location.state || {};

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1>This is the Travel Level 3 Data Page</h1>
      {email && <p>The email you entered is: {email}</p>}
    </div>
  );
}
