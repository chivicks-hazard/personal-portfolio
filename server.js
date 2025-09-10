import fs from "fs/promises";
import express from "express";

const isProduction = process.env.NODE_ENV === "production";
const port = process.env.PORT || 5173;
const base = process.env.BASE || "/";

const templateHTML = isProduction
  ? await fs.readFile("./dist//client/index.html", "utf-8")
  : "";

const app = express();

let vite;

if (!isProduction) {
  const { createServer } = await import("vite");
  vite = await createServer({
    server: { middlewareMode: true },
    appType: "custom",
    base,
  });

  app.use(vite.middlewares);
} else {
  const compression = (await import("compression")).default;
  const sirv = (await import("sirv")).default;
  app.use(compression());
  app.use(base, sirv("./dist/client/", { extensions: [] }));
}

const serveHTML = async (req, res) => {
  try {
    const url = req.originalUrl.replace(base, "");

    if (req.originalUrl.startsWith("/.well-known/")) {
      return res.status(404).send("Not Found");
    }

    let template;
    let render;

    if (!isProduction) {
      template = await fs.readFile("./index.html", "utf-8");
      template = await vite.transformIndexHtml(url, template);
      render = (await vite.ssrLoadModule("/src/server.jsx")).render;
    } else {
      template = templateHTML;
      render = (await import("./dist/server/server.js")).render;
    }

    const rendered = await render(url);

    const html = template.replace("<!--app-html-->", rendered ?? "");

    res.status(200).set({ "Content-Type": "text/html" }).end(html);
  } catch (error) {
    vite?.ssrFixStacktrace(error);
    console.log(error.stack);
    res.status(500).end(error.stack);
  }
};

app.use("*all", serveHTML);

app.listen(port, () => {
  console.log(
    `Server is running in ${
      isProduction ? "production" : "development"
    } mode on http://localhost:${port}`
  );
});
