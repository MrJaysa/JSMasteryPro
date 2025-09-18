/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  printWidth: 80,
  trailingComma: "es5",
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: false,
  jsxSingleQuote: false,
  arrowParens: "always",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
