import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RequireAuth({ Component }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return <Component />;
}

export default RequireAuth;