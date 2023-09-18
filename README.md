# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Configuracion test

npm install jest babel-jest @babel/preset-env @babel/preset-react --save-dev
npm install @testing-library/react @types/jest jest-environment-jsdom --save-dev
npm install whatwg-fetch --save-dev

Referencia (Vite):

https://gist.github.com/Klerith/ca7e57fae3c9ab92ad08baadc6c26177

No olvidar: 

- Error decribe:  "jest/globals": true en el archivo .eslintrc.cjs

Recomendaciones test:

1. trazar ruta critica: es decir cuales son los componentes necesarios a testear minimos para poder sacar el desarrollo a produccion
2. Testear desde los componentes mas pequeños 

