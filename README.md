# starrysea-nextgen
下一代星之海官网版本(国际版)

Starrysea International Ver.

[![Build Status](https://travis-ci.org/ssysm/starrysea-nextgen.svg?branch=master)](https://travis-ci.org/ssysm/starrysea-nextgen)

## Usage

-> API Server [API Documentation](https://starseaproject.github.io/starrysea-international/#starrysea-international-api)(Chinese Only)

## Setup

### Dependencies:
  - NodeJS Ver. 7+
  - NPM Ver. 4.2+
  - MongoDB Ver. 3.4+
  - Python Ver. 3.5

#### Run API Server(Folder:`server`):
- Run MongoDB Server
- Config in `config.js`
   - `database`: MongoDB Connection uri
   - `trustOrigin`: Origin that will responses an acceptable CROS header 
- Install Private Key in `/keys` to decrypt for Cucu's image
- `npm install`
- `node migrate.js`
- `npm run start`
- API Server Listen @ Port `3000`(You can edit in `./bin/www`)

#### Compile API Documentation(Folder:`docs`):
- `npm install`
- `npm run build`
- Compiled Documentation is in root (`index.html`)

#### Compile Front End(Folder:`client`)
 - `npm install`
 - `npm run build`
 - Compiled File is in `dist` folder

## Error Reporing

Issues and PR are welcomed :)  
