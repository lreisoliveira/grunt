# Grunt

Aplicação de linha de comando para automatizar tarefas feito em javascript.

## Referências

- http://blog.caelum.com.br/automacao-de-build-de-front-end-com-grunt-js/
- http://tableless.com.br/grunt-voce-deveria-estar-usando/

## Pré-requisitos

- Npm
- Node.js

## Instalação

```
$ npm install -g grunt-cli
$ npm install grunt --save-dev
```

## Plugins

```
$ npm install grunt-contrib-uglify --save-dev
$ npm install grunt-contrib-less --save-dev
```

## Init

Cria o arquivo package.json

```
$ npm init
```

## Minificar

A partir da raiz do projeto

```
$ grunt uglify
```
