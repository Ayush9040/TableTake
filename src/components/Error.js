import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return(
    <div>
      <h1>OOPS!!</h1>
      <h3>{err.status}</h3>
      <h4>{err.statusText}</h4>
    </div>
  )
}

export default Error;