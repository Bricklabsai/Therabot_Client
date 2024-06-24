import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  asChild?: boolean;
  onClick?: () => void;
  [key: string]: any;
}

/**
 *
 * @param className {string} class names to pass to parent, will be resolved using tailwind-merge
 * @param asChild {boolean} boolean self explanatory
 * @param onClick {() => void} onclick function
 * @returns JSX.Element
 */
export default function Button({
  children,
  className,
  asChild,
  onClick,
  ...props
}: Props) {
  const Parent = asChild === true ? Slot : "button";
  return (
    <Parent
      {...props}
      className={cn("bg-secondary py-2 px-4 outline-transparent", className)}
      onClick={onClick}
    >
      {children}
    </Parent>
  );
}
