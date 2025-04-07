# Mysql to Typescript interfaces | Lib

![alt](https://raw.githubusercontent.com/EdwinGeul01/database-to-typeScript-lib/refs/heads/main/banner.png)

Lib to help convert a database schema to typescript interfaces

## Databases Support

- Mysql

## Installation

```bash
$ npm i database-to-typescript-lib
```

## Example in code

```ts
import {
  connectionSettings,
  createInterfaceFile,
  getTablesRegisters,
} from "database-to-typescript-lib";

//create the config connection settings
const connectionSetting: connectionSettings = {
  database: "Database",
  user: "your_username", // Please enter your username
  password: "your_password", // Please enter your password
  host: "localhost",
  port: 3306,
  options: {
    path: "./database.d.ts",
    prefix: "db",
  },
};

const tables = await getTablesRegisters(connectionSetting);

console.log(tables);

const createInterfaceFilenew = await createInterfaceFile(
  tables,
  connectionSetting.options
); // this create the file
```

---

If it helps you, you can give me a star on [GitHub](https://github.com/EdwinGeul01/database-to-typeScript-lib) 😀
