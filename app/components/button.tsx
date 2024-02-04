type Props = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="py-2 px-4 border-2 border-primary rounded-lg bg-primary text-white hover:bg-secondary hover:text-black"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
