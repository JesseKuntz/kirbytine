import type { MetaFunction } from "@remix-run/node";
import { useRef } from "react";

import { Button, Card } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Kirbytine" },
    { name: "description", content: "A way to send Kirby-themed messages!" },
  ];
};

export default function IndexPage() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  return (
    <>
      <Card className="p-4 flex flex-col">
        Type your message here:
        <textarea
          ref={textAreaRef}
          className="my-4 p-2 bg-secondary rounded-lg border-white border-2 min-h-32"
        />
        <div>
          <Button
            text="Get Link"
            onClick={() => console.log(textAreaRef?.current?.value)}
          />
        </div>
      </Card>
    </>
  );
}
