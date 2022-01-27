import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const access_token = useSelector((state) => state.infoReducer.access_token);
  return (
    // Show the component only when the user is logged in
    // Otherwise, redirect the user to /login page
    <Route
      {...rest}
      render={(props) =>
        access_token ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
