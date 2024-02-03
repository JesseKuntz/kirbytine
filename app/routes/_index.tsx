import type { MetaFunction } from "@remix-run/node";

import kirbyHeart from "./images/kirby-heart.png";
import kirbyChef from "./images/chef-kirby.png";
import kirbySleepy from "./images/sleepy-kirby.webp";

export const meta: MetaFunction = () => {
  return [
    { title: "Kirbytine" },
    { name: "description", content: "A way to send Kirby-themed messages!" },
  ];
};

export default function Index() {
  return (
    <div className="p-10 flex flex-col items-center text-2xl">
      <div className="flex items-center gap-6">
        <h1 className="text-primary text-8xl font-bold tracking-tighter">
          Kirbytine
        </h1>
        <img src={kirbyHeart} alt="Kirby holding a heart." width={80} />
      </div>

      <div className="rounded-lg border-[#e791bf] border-4 bg-tertiary shadow-lg text-center max-w-lg p-8 mt-10 relative">
        <img
          className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
          src={kirbySleepy}
          alt="Sleepy Kirby."
          width={80}
        />
        <img
          className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2"
          src={kirbyChef}
          alt="Chef Kirby."
          width={80}
        />
        Roses are red, Kirby is pink. Happy Kirbytine&apos;s day!
      </div>
    </div>
  );
}
