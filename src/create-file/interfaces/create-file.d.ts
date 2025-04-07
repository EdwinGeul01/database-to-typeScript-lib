interface createFileOptions {
  /**
   * thre prefix for all the interfaces , thats means if the table name is users , and  the prefix is "DB_" , the interface will be DB_users
   */
  prefix?: string;

  /**
   * the path where the interfaces file will be created
   */
  path?: string;
}
