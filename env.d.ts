declare const SRC: string;
declare const DATADIR: string | undefined;

declare module "inline:*" {
   const content: string;
   export default content;
}

declare module "*.scss" {
   const content: string;
   export default content;
}

declare module "*.blp" {
   const content: string;
   export default content;
}

declare module "*.css" {
   const content: string;
   export default content;
}

// Runtime modules provided by AGS/GJS at execution time.
declare module "ags";
declare module "ags/*";
declare module "gi://*";
declare module "gnim";

declare module "ags/gtk4/jsx-runtime" {
   export namespace JSX {
      interface Element {}
      interface IntrinsicElements {
         [elemName: string]: any;
      }
   }

   export const Fragment: unknown;
   export function jsx(type: any, props: any, key?: any): any;
   export function jsxs(type: any, props: any, key?: any): any;
   export function jsxDEV(type: any, props: any, key?: any): any;
}

declare function logError(...args: any[]): void;
