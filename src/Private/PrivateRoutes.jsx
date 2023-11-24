import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <p className="flex justify-center">
        <span className="loading loading-infinity loading-md"></span>
      </p>
    );
  }

  if (user) {
    return children;
  }

  return <Navigate to="/signIn" state={location.pathname} />;
};

export default PrivateRoutes;
