import { useRouteError } from "react-router-dom";

function SinglePageError() {
  const error = useRouteError();
  return <div>{error.message}</div>;
}

export default SinglePageError;
