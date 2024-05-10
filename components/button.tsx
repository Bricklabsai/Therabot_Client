import { tMerge } from "@/lib/utils";
import {Slot} from '@radix-ui/react-slot'

interface Props {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  onClick?: () => void;
}

/**
 *
 * @param className {string} class names to pass to parent, will be resolved using tailwind-merge
 * @param asChild {boolean} boolean self explanatory
 * @param onClick {() => void} onclick function
 * @returns JSX.Element
 */
export default function Button(props: Props) {
  const Parent = (props.asChild === true) ? Slot : 'button'
  return (
    <Parent
      className={tMerge("bg-secondary py-2 px-4 outline-transparent rounded-full", props.className)}
      onClick={props.onClick}
    >
      {props.children}
    </Parent>
  );
}
