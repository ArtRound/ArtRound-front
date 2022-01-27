import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const access_token = useSelector((state) => state.infoReducer.access_token);
  return (
    <Route
      {...rest}
      render={(props) =>
        access_token && restricted ? (
          <Redirect to="/mypage" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
