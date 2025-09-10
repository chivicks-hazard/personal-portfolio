import { renderToString } from "react-dom/server";
import App from "./App";
import pkg from "react-router-dom";

export function render(url) {
  const { StaticRouter } = pkg;

  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
