import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isLogin = useSelector((state) => state.infoReducer.id);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? (
          <Redirect to="/mypage" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PublicRoute;
