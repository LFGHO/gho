import { Link, useRouteError } from "react-router-dom";
import {color} from './theme'
import Button from "./components/Button";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="flex flex-col justify-center items-center h-screen" style={{backgroundColor: color.background}}>
      <h1 className="text-3xl font-semibold mb-5" style={{color: color.danger}}>Oops!</h1>
      <p style={{color: color.text}}>Sorry, an unexpected error has occurred.</p>
      <p style={{color: color.text}}>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="my-4">
      <Button text="Return to Home"></Button>
      </Link>
    </div>
  );
}