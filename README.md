![Heima for Vue][Heima-Vue]Heima for [Vue]
============
![Version](https://img.shields.io/badge/version-v0.1.4-orange.svg)
## Translations
* [Spanish]

## Introduction
![Heima][Heima]eima is a development skeleton series designed to allow a faster starting for the JavaScript frameworks use.
Heima for [Vue] allows you to get a quick start for your projects into powerful [Vue] framework.

## Starting
Clone the repository in a local path.
See deployment section in order to run the project in production environment.

### Pre-requisites
- NodeJS v10+
Installing nodeJS:
```bash
$ sudo apt-get update
$ sudo apt-get install nodejs
```

- NPM v6+
Installing npm:
```bash
$ sudo apt-get install npm
$ npm -v
```

If npm version is under the recomended:
```bash
$ sudo npm install npm@latest -g
```

If nodeJS version is under the recomended:
```bash
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```

NOTE: nodeJS binary is "nodejs" instead of "node". In order to change this, and use it as "node":
```bash
$ sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/nodejs
```
Where ```<VERSION>``` is the last installed version.

### Project installation
#### Clone repository:
```bash
$ git clone https://github.com/onca-vega/Heima-Vue.git
```

#### Place in the project root path:
```bash
$ cd Heima-Vue
```

#### npm dependencies installation:
```bash
$ npm install
```

### Project customization:
In order to deliver your own project, you must update some things in the next files according to your application characteristics:
* **```package.json```:**
* **```README.md```:**
* **```docs/README.md```:**

## Development
```bash
npm run serve-o
```

## Testing
In order to use the project in a development environment or manual testing, you should run the command:
```bash
$ npm run build
```

## Deployment
In order to use the project in a productive environment, you should run the command:
```bash
$ npm run build-prod
```

## Versioning
For further information, read [semver].

## Authors
* **Marcos Jesús Chávez V** - [onca-vega]

## License
MIT license.

[Spanish]: https://github.com/onca-vega/Heima-Vue/blob/master/docs/README.md
[semver]: https://semver.org/spec/v2.0.0.html
[Heima-Vue]: https://github.com/onca-vega/Heima-Vue/blob/master/app/image/icon/header30.png
[Heima]: https://github.com/onca-vega/Heima-Vue/blob/master/app/image/icon/favicon30.png
[Vue]: https://vuejs.org/
[onca-vega]: https://github.com/onca-vega
