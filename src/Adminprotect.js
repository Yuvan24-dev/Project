import { useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";

export const AdminProtect = () => {
  const token = localStorage.getItem("admintoken");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && location.pathname !== "/adminlogin") {
      navigate("/adminlogin", {
        state: { from: location },
        replace: true,
      });
    }
  }, [token, location, navigate]);

  return token ? <Outlet /> : null;
};