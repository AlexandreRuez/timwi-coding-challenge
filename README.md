# Timwi Reindeer olympics Coding Challenge 

## Pré-requis

- Node/Npm

## Installation

Dans le dossier /reindeer-olympics

```shell
npm install
```

## Démarrage

```shell
npm start
```

## Aperçu du résultat

```shell
#################################
###########  RESULTS  ###########
#################################
0. Vixen made 2660 km in 2503 seconds.
1. Comet made 2639 km in 2503 seconds.
2. Rudolph made 2637 km in 2503 seconds.
3. Dasher made 2590 km in 2503 seconds.
4. Donner made 2565 km in 2503 seconds.
5. Blitzen made 2565 km in 2503 seconds.
6. Cupid made 2550 km in 2503 seconds.
7. Prancer made 2550 km in 2503 seconds.
8. Dancer made 2292 km in 2503 seconds.
```


# Timwi Marvel Coding Challenge 

## [Démo](http://146.59.153.148:4200/) en ligne

## Pré-requis

- Angular 14
- Node/Npm
- Docker

## Installation

### Génération d'un token

Vous devez générer vos clés d'API pour [l'API Marvel](https://developer.marvel.com/documentation/getting_started). Il faudra ensuite les saisir dans \frontend\src\environments\environment.ts.

```shell
    marvelPublicKey :"MARVEL_PUBLIC_KEY",
    marvelPrivateKey :"MARVEL_PRIVATE_KEY"
```

### Docker-compose

On vient modifier la valeur des variables *MARVEL_PUBLIC_KEY* et *MARVEL_PRIVATE_KEY* dans le fichier *install.sh* puis : 

```shell
$ chmod +x install.sh
```

```shell
$ ./install.sh
```

## Fabriqué avec

* Node.js [express](https://expressjs.com/) - Framework Node.js
* [Angular.js](https://angular.io/) - Framework Javascript
* [MysqlSQL](https://www.mysql.com/) - Base de données relationnelle

## Auteur

* **Alexandre RUEZ** _alias_ [@AlexandreRuez](https://github.com/AlexandreRuez)