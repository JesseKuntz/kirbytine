import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Kirbytine" },
    { name: "description", content: "A way to send Kirby-themed messages!" },
  ];
};

export default function Index() {
  return (
    <div className="p-10 flex flex-col items-center text-2xl">
      <h1 className="text-primary text-8xl font-bold tracking-tighter">
        Kirbytine
      </h1>
      <div className="rounded-lg bg-tertiary shadow-lg max-w-md min-h-40 p-8 mt-10">
        Roses are red, Kirby is pink. Happy Kirbytine&apos;s day!
      </div>
    </div>
  );
}
