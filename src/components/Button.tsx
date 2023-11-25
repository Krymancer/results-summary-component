interface ButtonProps {
  label: string;
  onClick: () => void;
}

export default function Button(props: ButtonProps) {
  return (
    <button
      className="rounded-full bg-dark-gray-blue hover:bg-dark text-white text-lg font-bold py-4 flex items-center justify-center"
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}