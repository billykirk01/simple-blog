/** @jsx h */
import { h } from "https://deno.land/x/sift@0.5.0/mod.ts";
import { GithubIcon, MailIcon, TwitterIcon } from "./components/Icons.tsx";
import { Avatar } from "./components/Avatar.tsx";

export interface BlogOptions {
  title: string;
  description: string;
}

export const App = ({ title, description }: BlogOptions) => (
  <html>
    <Head />
    <body>
      <div class="w-full bg-cover bg-center bg-no-repeat max-w-screen-sm px-6 mx-auto flex flex-col items-center justify-center">
        <Avatar />
        <h1 class="mt-3 text-4xl text-gray-900 font-bold">{title}</h1>
        <p class="mt-3 text-center text-lg text-gray-600">
          {description}
        </p>
        <nav class="mt-4 flex gap-2">
          <MailIcon />
          <GithubIcon />
          <TwitterIcon />
        </nav>
        <div class="divider" />
      </div>
    </body>
  </html>
);

const Head = () => (
  <head>
    <title>Hello from JSX</title>
    <link
      href="https://cdn.jsdelivr.net/npm/daisyui@2.17.0/dist/full.css"
      rel="stylesheet"
      type="text/css"
    />
    <script src="https://cdn.tailwindcss.com"></script>
  </head>
);

export const NotFound = () => (
  <div>
    <h1>Page not found</h1>
  </div>
);
