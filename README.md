# React Component Lib

A simple ReactJS component library example, using Rollup as JavaScript module
bundler.

## Dependencies

- Material UI / Material Icons
- Typescript

## Run Locally

Clone the project

```bash
  git clone https://github.com/VitorMendesco/react-component-lib.git
```

Go to the project directory

```bash
  cd react-component-lib
```

Install dependencies

```bash
  npm install
```

Go to **package.json** and change the _name_ property to

```json
{
  "name": "@YOUR_NPM_OR_GITHUB_USERNAME/LIB_NAME"
}
```

Build with **rollup**

```bash
  npm run rollup
```

If there wasn't any error, log into NPM

```bash
  npm login
```

Then publish the lib

```bash
  npm publish
```
