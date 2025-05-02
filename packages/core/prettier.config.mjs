/** @type {import('prettier').Config} */
const config = {
  printWidth: 120,
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^@/hooks/(.*)$",
    "",
    "^@/types/(.*)$",
    "",
    "^@/utils/(.*)$",
    "",
    "^@/(.*)$",
    "",
    "^[./]",
  ],
  plugins: ["@ianvs/prettier-plugin-sort-imports"],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
}

export default config
