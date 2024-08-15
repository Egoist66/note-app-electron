import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'


/**
 * Merges multiple class values into a single string using Tailwind's utility-first approach.
 *
 * @param {...ClassValue} args - Variable number of class values to be merged.
 * @return {string} A string representing the merged class values.
*/

export const cn = (...args: ClassValue[]): string => {
    return twMerge(clsx(args))
}