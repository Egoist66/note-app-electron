import clsx, { ClassValue } from 'clsx'
import { ReactNode } from 'react'
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



/**
 * Maps an array of elements to an array of ReactNodes using a callback function.
 *
 * @template T - The type of elements in the input array.
 * @param {T[]} arr - The array of elements to be mapped.
 * @param {(item: T) => ReactNode} returnCallback - The callback function that returns a ReactNode for each element.
 * @returns {ReactNode[]} - The array of mapped ReactNodes.
 */
export const mapToElements: <T = any>(arr: T[], returnCallback: (item: T) => ReactNode) => ReactNode[] = (arr, returnCallback) => {
    return arr.map((item) => returnCallback(item))

}

export const formatDateFromTimestamp = (timestamp: number) => {
    const dateOptions = new Intl.DateTimeFormat(window?.context?.locale, {
        dateStyle: 'short',
        timeStyle: 'short',
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    })

    return dateOptions.format(timestamp)
    
}

/**
 * Retrieves the first element that matches the specified CSS selector from the document.
 *
 * @param {string} ref - The CSS selector to match against.
 * @return {Element | null} The first matching element, or null if no match is found.
 */
export const domRef = (ref: string) => {
    if(document.querySelector(ref)){
        return document.querySelector(ref)
    }

    return null
}