export interface connectionSettings {
  filePath?: string;
  user?: string;
  password?: string;
  host?: string;
  port?: number;
  database?: string;
  options?: {
    prefix?: string;
    path?: string;
  };
}
