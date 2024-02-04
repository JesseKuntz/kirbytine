import { twMerge as tw } from "tailwind-merge";

type Props = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button: React.FC<Props> = ({
  text,
  onClick,
  type = "button",
  disabled,
}) => {
  return (
    <button
      className={tw(
        "py-2 px-4 border-2 border-primary rounded-lg bg-primary text-white hover:bg-secondary hover:text-black",
        disabled &&
          "cursor-not-allowed opacity-50 hover:bg-primary hover:text-white"
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
