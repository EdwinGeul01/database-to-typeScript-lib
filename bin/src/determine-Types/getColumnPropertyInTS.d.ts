import { column } from "../../_interface/column.interface";
/**
 * Get the property of the column but in typescript interface
 * @param c the column to determine the type
 * @returns the property of the column in interface like  " [key: string]: any "
 */
export declare function getColumnPropertyInTypeScript(c: column): string;
