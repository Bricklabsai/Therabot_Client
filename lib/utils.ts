import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 *
 * @param inputs default classnames
 * @param ClassValue[] overiding classnames
 * @returns resolved classnames using both clsx and taiwl
 */
export function tMerge(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}