import { twMerge as tw } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const Card: React.FC<Props> = ({ children, className }) => {
  return (
    <div
      className={tw(
        "rounded-lg border-[#e791bf] border-4 bg-tertiary shadow-xl text-center mt-10 w-full max-w-lg",
        className
      )}
    >
      {children}
    </div>
  );
};
