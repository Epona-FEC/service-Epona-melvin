# Project Name

> Project description

## Related Projects

  - https://github.com/Eponaaaa/repo

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Make sure to go through [requirements](#requirements) and [installing dependencies](#development) before using
- Create a config folder on the root directory and in this file add an index.js
- This config file should look like this:

```javaScript
module.exports = {
  mySQLusername: 'root',
  mySQLPassword: '',
};
```
By default the username is root and the password is an empty string. If you do have a different setup, change this config file to match your current mySQL server setup.

- Then run this command in your terminal:
```sh
npm run db:seed
```

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- Needs mySQL on you machine
For Windows: Here's a good [blog](https://cepa.io/2018/02/20/linuxizing-your-windows-pc-part2/) to install it
For macOS : MySQL [Docs](https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation-pkg.html)

  - If you have mySQL downloaded, start mySQL server:
    - For linux/macOS:
    ```sh
    sudo service mysql start
    ```
      Then enter your bash password
    - Or you can start it without sudo if it allows you too.
    ```sh
    service mysql start
    ```
    - Or: ```mysql-server start

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```






