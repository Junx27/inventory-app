import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProtectedRoute = ({ children, allowedRoles }) => {
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role");

  // Check if the user is authenticated and if their role is allowed
  if (!token) {
    localStorage.removeItem("token");
    return <Navigate to="/" />;
  }

  // eslint-disable-next-line react/prop-types
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    localStorage.removeItem("token");
    return <Navigate to="/" />; // Redirect if the role is not allowed
  }

  return children; // Render the children if the checks pass
};

export default ProtectedRoute;
