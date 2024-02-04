import type { MetaFunction, LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";

import { Message, Button } from "~/components";

export const meta: MetaFunction = () => {
  return [
    { title: "Your Message ❤️ | Kirbytine" },
    { name: "description", content: "This is your message!" },
  ];
};

export async function loader({ params }: LoaderFunctionArgs) {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl!, supabaseKey!);

  const { data, error } = await supabase
    .from("notes")
    .select("note")
    .eq("id", params.message);

  const message = data?.[0]?.note;

  if (error || !message) {
    return json({ error: "Message not found", message: null });
  }

  return json({
    message,
    error: null,
  });
}

export default function MessagePage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      {data.error ? (
        <p className="mt-10 text-center">
          {
            "Sorry, we couldn't find that message. Please make sure that the link you're using isn't malformed."
          }
        </p>
      ) : (
        <Message text={data.message} />
      )}

      <Link to="/" className="mt-10">
        <Button text="Send One Back" onClick={() => {}}></Button>
      </Link>
    </>
  );
}
