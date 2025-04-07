import { table } from "../_interface/table.interface";
import { connectionSettings } from "./main";
export declare function getTablesRegisters(connectionSettings: connectionSettings): Promise<table[]>;
