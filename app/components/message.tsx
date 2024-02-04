import { useState } from "react";

import { Card, Button } from "~/components";
import kirbyChef from "~/images/chef-kirby.png";
import kirbySleepy from "~/images/sleepy-kirby.webp";

type Props = {
  text: string;
};

export const Message: React.FC<Props> = ({ text }) => {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <Card className="p-12">
        You got a Kirbytine!
        <div className="mt-4">
          <Button
            onClick={() => {
              setOpen(true);
              window.EmojiSprinkle.sprinkleEmojis({ emoji: "❤️" });
            }}
            text="Open ❤️"
          />
        </div>
      </Card>
    );
  }

  return (
    <Card className="p-8 relative animate-fade-in">
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
      {text}
    </Card>
  );
};
