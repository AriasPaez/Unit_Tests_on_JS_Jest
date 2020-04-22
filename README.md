##  :page_facing_up: Instalación y uso 
###  :one: 
>Iniciamos Git :
```
    git init
```
>Instalamos ...cosas de npm :P :
```
    npm init
```
>Instalamos Jest en modo desarrollador :
```
    npm install jest --save-dev
```
>En el archivo *package.json*, añadir en **"scripts"**:
```
    "test": "jest"
```
###  :two:
### :page_facing_up: Correr todas las pruebas: 
>Run Test :
```
    npm run test
```
>Or :
```
    npm test
```

###  :three: :page_facing_up: Correr pruebas especificas: 
#### :page_facing_up: Configurar comando Jest: 
>Para poder ejecutar pruebas sobre archivos o funciones especificas, sin necesidad de ejecutar todas las demás, se instala lo siguiente:
```
    npm install -g jest
```

>Una vez configurado, se procede a realizar las pruebas. Para ello se indica la ruta del archivo en la cual se tienen  las pruebas a correr, en este caso es el archivo *index.test.js*
```
jest src/__test__/index.test.js
```
## :page_facing_up: Automatizar Pruebas
>En el archivo *package.json*, añadir en **"scripts"**:
```
    "test:watch": "jest --watch"
```
>Ahora procedemos a lanzarlo por consola:
```
    npm run test:watch 
```

## :page_facing_up: Generando Reporte
```
    jest --coverage 
```

### :four: :page_facing_up: Installar Babel
```
    npm install --dev babel-jest @babel/core @babel/preset-env
```
## :page_facing_up: Configuración
>En la raíz del proyecto crear el archivo *babel.config.js* y añadir lo siguiente:
```
    // babel.config.js
    module.exports = {
        presets: [
        [
            '@babel/preset-env',
            {
            targets: {
                node: 'current',
            },
            },
        ],
        ],
    };
```