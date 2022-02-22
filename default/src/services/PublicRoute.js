import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLoggedin = useSelector((state) => state.infoReducer.isLoggedin);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedin && restricted ? (
          <Redirect to="/mypage" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
