import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./logincontext";  // Import the context

const PrivateRoute = ({ children }) => {
  const { authToken } = useContext(AuthContext);  // Access the authToken from context
  const navigate = useNavigate();
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);  // Track if the auth check is done

  useEffect(() => {
    if (authToken) {
      setIsChecked(true);  // Token found, authentication check is complete
    } else {
      navigate('/login', {
        state: { from: location },
        replace: true,
      });
    }
  }, [authToken, navigate, location]);

  if (!isChecked) {
    return <div>Loading...</div>;  // Show loading until the token is checked
  }

  return children;  // Render the children if the user is authenticated
};

export default PrivateRoute;
