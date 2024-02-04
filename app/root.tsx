import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

import kirbyHeart from "~/images/kirby-heart.png";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gaegu&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-secondary p-10 flex flex-col items-center text-2xl">
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <img
            src={kirbyHeart}
            alt="Kirby holding a heart."
            width={80}
            className="w-14 sm:w-20"
          />
          <h1 className="text-primary text-6xl sm:text-8xl font-bold tracking-tighter">
            Kirbytine
          </h1>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
