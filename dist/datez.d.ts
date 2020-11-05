/**
 * Converts date to human readable format
 * @param {object} date Date Object to format
 */
export function useHumanDate(date: object): string;
/**
 * Converts date to format acceptable in database
 * @param {object} date date object to format
 */
export function useDbDate(date: object): string;
/**
 * Formats date in ant form to normal format
 * @param {object} data form form data to be submitted
 */
export function useAntDate(data: object): any;
