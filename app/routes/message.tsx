import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { Message, Button } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Message ❤️ | Kirbytine" },
    { name: "description", content: "This is your message!" },
  ];
};

export default function MessagePage() {
  return (
    <div className="p-10 flex flex-col gap-8 items-center text-2xl">
      <Message text="Kirby kirby kirby! Roses are red, Kirby is pink. Happy Kirbytine's day!" />
      <Link to="/">
        <Button text="Send One Back" onClick={() => {}}></Button>
      </Link>
    </div>
  );
}
