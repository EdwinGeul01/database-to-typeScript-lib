import * as fs from "fs";
import { table } from "../../_interface/table.interface";
import { getColumnPropertyInTypeScript } from "../determine-Types/getColumnPropertyInTS";

export async function createInterfaceFile(
  tables: table[],
  options: createFileOptions
): Promise<void> {
  let fstring = " // updated " + new Date().toString() + "\n\n";

  //create the json_type interface
  fstring += `export interface json_type {
    [key: string]: any;
    }\n \n
  `;

  for (const t of tables) {
    fstring += `export interface ${options?.prefix ?? ""}${t.name} {\n`;

    for (const c of t.columns) {
      const columnString = getColumnPropertyInTypeScript(c);
      fstring += columnString;
    }
    fstring += "}\n\n";
  }

  //write the file
  fs.writeFileSync(options?.path ?? "./interfaces.d.ts", fstring);

  fs.closeSync(0);
}
