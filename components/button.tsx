import { tMerge } from "@/lib/utils";
interface Props {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}


export default function Button(props: Props) {
  return (
    <button
      className={tMerge("bg-secondary py-2 px-4 outline-transparent rounded-full", props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
