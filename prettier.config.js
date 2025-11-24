/** @type {import("prettier").Config} */
module.exports = {
    semi: true, // ✅ Always add semicolons
    singleQuote: true, // ✅ Preferred in JS/TS community for consistency
    tabWidth: 4, // ✅ Matches your Expo rule: indent: ["error", 4]
    trailingComma: 'all', // ✅ Improves diff readability; safer in multi-line edits
    bracketSpacing: true, // ✅ Keeps spacing inside object literals: { a: 1 }
    printWidth: 100, // ✅ Recommended for readability without breaking layout
    arrowParens: 'always', // ✅ Ensures clarity and consistency in arrow functions
    endOfLine: 'lf', // ✅ Avoids cross-platform issues (esp. on Windows/macOS/Linux)
    jsxSingleQuote: false, // ✅ Use double quotes in JSX (default JSX convention)
    quoteProps: 'as-needed', // ✅ Keeps object property quotes clean unless required
};
