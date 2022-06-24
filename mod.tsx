/** @jsx h */
import { h, json, jsx, serve } from "https://deno.land/x/sift@0.5.0/mod.ts";
import { App, NotFound } from "./App.tsx";

export interface BlogOptions {
  title: string;
  description: string;
}

export function blog(options: BlogOptions) {
  serve({
    "/": () => jsx(<App {...options} />),
    "/time": () => json({ "time": new Date().toLocaleTimeString() }),
    404: () => jsx(<NotFound />, { status: 404 }),
  });
}

blog({
  title: "Billy Kirk",
  description:
    "I love building applications for the web primarily with Deno 🦕 and Svelte 🧡 and I occasionally dabble in systems programming with Rust 🦀 and Go 💙",
});
