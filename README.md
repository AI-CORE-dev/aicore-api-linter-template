## AiCore APIs - Linter Template

Con los archivos de este repo, en especial los siguientes:

```
./.vscode/settings.json
.eslintrc.js
.prettierrc

```

y las devDependencies listadas en el package.json, las APIs de AiCore hechas sobre Nest pueden gozar de formateo de código automático y homogéneo para todos los colaboradores.

Para añadirlo a un proyecto:
  1. Copiar al proyecto deseado los archivos mencionados anteriormente
  2. Añadir las dependencias correspondientes al archivo package.json
  3. En Visual Studio Code, instalar la extensión [Prettier ESLint](https://marketplace.visualstudio.com/items?itemName=rvest.vs-code-prettier-eslint) (fundamental para el formateo)

Proyectos que inicien de 0, también pueden basarse en [este template](https://github.com/AI-CORE-dev/worknmates-api-template). Si bien fue definido para las APIs de Worknmates, es facilmente adaptable a cualquier proyecto de AiCore. Contiene las mismas config de este repo y, además, el scaffolding inicial de Nest + TypeScript.
