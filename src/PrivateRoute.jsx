import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useCookies } from "react-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [cookies] = useCookies(["cookie-e"]); // Cookies ilə istifadəçi məlumatını əldə edirik

  return (
    <Route
      {...rest}
      render={(props) =>
        cookies["cookie-e"] ? ( // Əgər cookie varsa, yəni admin daxil olubsa
          <Component {...props} />
        ) : (
          <Redirect to="/login" /> // Əgər daxil olmamışsa, login səhifəsinə yönləndiririk
        )
      }
    />
  );
};

export default PrivateRoute;