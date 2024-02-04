import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import { Button } from "~/components";

import kirbyHeart from "./images/kirby-heart.png";
import kirbyChef from "./images/chef-kirby.png";
import kirbySleepy from "./images/sleepy-kirby.webp";

export const meta: MetaFunction = () => {
  return [
    { title: "Kirbytine" },
    { name: "description", content: "A way to send Kirby-themed messages!" },
  ];
};

const baseCardStyle =
  "rounded-lg border-[#e791bf] border-4 bg-tertiary shadow-xl text-center mt-10 w-full max-w-lg";

export default function Index() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <div className="p-10 flex flex-col items-center text-2xl">
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

      <div className={`${baseCardStyle} p-4 flex flex-col`}>
        Type your message here:
        <textarea
          ref={textAreaRef}
          className="my-4 p-2 bg-secondary rounded-lg border-white border-2 min-h-32"
        />
        <Button
          text="Get Link"
          onClick={() => console.log(textAreaRef?.current?.value)}
        />
      </div>

      <div className={`${baseCardStyle} p-8 relative`}>
        <img
          className="absolute top-0 left-0 -translate-x-1/4 -translate-y-1/2"
          src={kirbySleepy}
          alt="Sleepy Kirby."
          width={80}
        />
        <img
          className="absolute bottom-0 right-0 translate-x-1/4 translate-y-1/2"
          src={kirbyChef}
          alt="Chef Kirby."
          width={80}
        />
        Roses are red, Kirby is pink. Happy Kirbytine&apos;s day!
      </div>
    </div>
  );
}
