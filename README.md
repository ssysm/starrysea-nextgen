# starrysea-nextgen
下一代星之海官网版本(国际版)

Starrysea International Ver.

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
 
