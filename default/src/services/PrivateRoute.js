import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isLoggedin = useSelector((state) => state.infoReducer.isLoggedin);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};
export default PrivateRoute;
