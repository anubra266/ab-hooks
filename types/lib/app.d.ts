/**
 * Assign References to a collection
 * @param {array} list Collection to assign references
 */
export function useDynamicRefs(list: any[]): any;
/**
 * Scroll to an element
 * @param {object} ref Element to scroll to
 */
export function useScroll(ref: object): void;
/**
 * Sets App theme
 * @param {string} theme Light or dark theme
 * @param {object} extra additional theme variables
 */
export function useTheme(props: any): any;
/**
 * Get Less Variable from running theme
 * @param {string} variable Theme LESS variable to get
 */
export function useThemeVar(variable: string): any;
/**
 * Sets Title for Page
 * @param {string} title Page Title
 */
export function useTitle(title: string): string;
export function useDualRef(cbonly: boolean, callback: Function, cleanup: Function): any;
export function useExpose(ref: object, instances: object): any;
export function useIprops(): any;
export function useSmoothRefresh(refreshTime: any): void;
