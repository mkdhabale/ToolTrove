module.exports = {
  preset: "ts-jest",
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest", // Transform JS and JSX files with Babel
  },
  moduleNameMapper: {
    "\\.css$": "identity-obj-proxy", // Mock CSS imports
  },
  transformIgnorePatterns: [
    "/node_modules/(?!axios)/", // Make sure axios is not ignored
  ],
  testEnvironment: "jsdom",
};
