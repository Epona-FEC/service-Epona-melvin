# Etsy Review Service
> Review Service for  Etsy product page
<img src="./ui.png" alt="Reviews UI" width="75%"/>

# Related Projects
* https://github.com/eponaaaa/service-FEC-mary
* https://github.com/eponaaaa/fec-service-michael
* https://github.com/eponaaaa/service-Ashby

# Table of Contents

1. [Getting Started](#getting-started)
1. [Prerequesites](#prerequesites)
1. [Installation](#installation)
1. [Usage](#usage)
1. [License](#license)
1. [Tech Framework used](#tech-framework-used)

# Getting Started
These are the steps to get up and running with my service :+1:

# Prerequesites
Make sure you have installed the following prerequesites on your development machine:
* Git - [Download & Install Git](https://git-scm.com/downloads). OSX and Linux machines typically have this already installed.
* Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager. If you encounter any problems, you can also use this [GitHub Gist](https://gist.github.com/isaacs/579814) to install Node.js.
* mySQL server - Installation docs for: [macOS](https://dev.mysql.com/doc/mysql-osx-excerpt/5.7/en/osx-installation-pkg.html), [Windows](https://dev.mysql.com/doc/refman/8.0/en/windows-installation.html), for [WSL users](https://medium.com/@harshityadav95/installing-mysql-in-ubuntu-linux-windows-subsystem-for-linux-from-scratch-d5771a4a2496)
* Make sure mySQL server is running

## Installation
* Clone repository

`git clone https://github.com/Eponaaaa/service-Epona-melvin.git`

* Install dependencies

`npm install`

# Usage
* Create index.js in the config directory
  * In your config/index.js add the following code, with your own credentials:

  ```javascript
  module.exports = {
    mySQLPassword: `yourPassword`,
    mySQLusername: `userName`,
  };
  ```
  * Once your credentials are in this config file you can proceed to the next step.

* Run database seeding script

  `npm run db:seed`

* Build webpack bundle

  `npm run build`

* Start express server

  `npm run start`

The service will then run on http://localhost:3003. This serves up an index.html that displays the ReviewService. build.js file should also be in http://localhost:3003/build.js

# Tech Framework Used
* React
* Express
* mySQL
* Jest
* Enzyme
* webpack

