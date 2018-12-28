![Heima for Vue][Heima-Vue]Heima for [Vue]
============
![Version](https://img.shields.io/badge/version-v0.1.5-orange.svg)
## Traducciones
* [Inglés]

## Introducción
![Heima][Heima]eima se refiere a una serie de esqueletos de desarrollo, diseñados para facilitar un comienzo más rápido para el uso de los frameworks de JavaScript. Heima for [Vue] the permite iniciar de una forma más rápida tus proyectos mediante el poderoso framework [Vue].

## Comenzando
Clonar el repositorio en un directorio local.
Ver la sección despliegue para saber como usarlo en un ambiente productivo.

### Pre-requisitos
- Node.js v10+
Instalación de nodeJS:
```bash
$ sudo apt-get update
$ sudo apt-get install nodejs
```

- Npm v6+
Instalación de npm:
```bash
$ sudo apt-get install npm
$ npm -v
```

Si la versión de npm es menor a la recomendada, proceder con:
```bash
$ sudo npm install npm@latest -g
```

Si la versión de nodeJS es menor a la recomendada, proceder con:
```bash
$ sudo npm cache clean -f
$ sudo npm install -g n
$ sudo n stable
```

NOTA: Particularmente en ubuntu el binario para nodeJS es "nodejs" en vez de "node" debido a otro paquete. Si se requiere llamarlo como "node" se procederá con:
```bash
$ sudo ln -sf /usr/local/n/versions/node/<VERSION>/bin/node /usr/bin/nodejs
```
En donde ```<VERSION>``` es la última versión instalada.

### Instalación de proyecto
#### Clonar el repositorio:
```bash
$ git clone https://github.com/onca-vega/Heima-Vue.git
```

#### Entrar en el proyecto:
```bash
$ cd Heima-Vue
```

#### Instalar dependencias npm:
```bash
$ npm install
```

#### Personalizar tu proyecto:
Para poder generar tu propio proyecto, deberás actualizar algunas cosas en los archivos listados a continuación, según las características de tu aplicación.
* **```package.json```:**
* **```README.md```:**
* **```docs/README.md```:**

## Desarrollo
```bash
npm run serve-o
```

## Pruebas
Para usar el proyecto en ambiente de desarrollo o pruebas manuales, deberás usar el comando:
```bash
$ npm run build
```

## Despliegue
Para usar el proyecto en ambiente productivo, deberás usar el comando:
```bash
$ npm run build-prod
```

## Versionamiento
Para más información, puedes leer [semver].

## Autores
* **Marcos Jesús Chávez V** - [onca-vega]

## Licencia
Licencia MIT.

[Inglés]: https://github.com/onca-vega/Heima-Vue/blob/master/README.md
[semver]: https://semver.org/spec/v2.0.0.html
[Heima-Vue]: https://github.com/onca-vega/Heima-Vue/blob/master/app/image/icon/header30.png
[Heima]: https://github.com/onca-vega/Heima-Vue/blob/master/app/image/icon/favicon30.png
[Vue]: https://vuejs.org/
[onca-vega]: https://github.com/onca-vega
