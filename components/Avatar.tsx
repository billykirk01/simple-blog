/** @jsx h */
import { h } from "https://deno.land/x/sift@0.5.0/mod.ts";

export const Avatar = () => (
  <div class="avatar mt-5">
    <div class="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
      <img
        src="https://avatars.githubusercontent.com/u/30280510?v=4"
        alt="avatar"
      />
    </div>
  </div>
);
