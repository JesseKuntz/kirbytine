import { useState, useEffect } from "react";
import type {
  MetaFunction,
  LoaderFunctionArgs,
  ActionFunctionArgs,
} from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { Form, useLoaderData, Link, useNavigation } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

import { Button, Card } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Kirbytine" },
    { name: "description", content: "A way to send Kirby-themed messages!" },
  ];
};

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const messageId = url.searchParams.get("messageId");
  const error = url.searchParams.get("error");

  return json({
    messageId,
    error,
  });
}

export default function IndexPage() {
  const data = useLoaderData<typeof loader>();
  const [link, setLink] = useState("");
  const [currentMessage, setCurrentMessage] = useState("");
  const navigation = useNavigation();

  const isSubmitting = navigation.formAction === "/?index";

  useEffect(() => {
    if (data.messageId) {
      setLink(`${window?.origin}/${data.messageId}`);
    }
  }, [data.messageId]);

  if (data.error) {
    return (
      <>
        <p className="mt-10 text-center">
          {
            "Sorry, we weren't able to create that message. Please try again, and if the issue persists, please contact jessekuntz96@gmail.com."
          }
        </p>
        <Link to="/" className="mt-10">
          <Button text="Try Again" onClick={() => setCurrentMessage("")} />
        </Link>
      </>
    );
  }

  if (data.messageId) {
    return (
      <>
        <Card className="p-4">
          {"Send this link to whoever you'd like to send your Kirbytine to: "}
          <div className="my-4 py-2 px-4 bg-secondary rounded break-words">
            {link}
          </div>
          <div>
            <Button
              text="Copy Link"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(link);
                  window.EmojiSprinkle.sprinkleEmojis({
                    emoji: "📋",
                    fontSize: 30,
                  });
                } catch {
                  window.alert(
                    "Failed to copy link to clipboard, please copy manually."
                  );
                }
              }}
            />
          </div>
        </Card>
        <Link to="/" className="mt-10">
          <Button text="Send Another" onClick={() => setCurrentMessage("")} />
        </Link>
      </>
    );
  }

  return (
    <Form method="post" className="flex flex-col">
      <Card className="p-4">
        Type your message here:
        <textarea
          name="message"
          className="mt-4 p-2 bg-secondary rounded-lg border-white border-2 min-h-32 w-full"
          onChange={(event) => setCurrentMessage(event.target.value)}
        />
        <p className="text-right">{currentMessage.length}/1000</p>
        <div className="mt-4">
          <Button
            text={isSubmitting ? "Creating Kirbytine..." : "Get Link"}
            type="submit"
            disabled={
              isSubmitting ||
              currentMessage.length === 0 ||
              currentMessage.length > 1000
            }
          />
        </div>
      </Card>
    </Form>
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  const message = body.get("message");

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl!, supabaseKey!);

  const { data, error } = await supabase
    .from("notes")
    .insert({ note: message })
    .select("id");

  const messageId = data?.[0]?.id;

  if (error || !messageId) {
    return redirect(`/?error=1`);
  }

  return redirect(`/?messageId=${messageId}`);
}
