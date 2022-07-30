import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export default function PrivateRoute({
  authorization,
  redirectTo,
  protectedComponent,
}) {
  const { userData } = useAuth();
  return (authorization ? authorization : userData) ? (
    protectedComponent
  ) : (
    <Navigate to={redirectTo ? redirectTo : "/"} />
  );
}
