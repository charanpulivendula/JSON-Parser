const useJsonParser = require("../src/index");
const fs = require("fs/promises"); // Use promise-based file operations

const testFiles = [
  { path: "/step1/valid.json", expected: "valid" },
  { path: "/step1/invalid.json", expected: "invalid" },
  { path: "/step2/valid.json", expected: "valid" },
  { path: "/step2/invalid.json", expected: "invalid" },
  { path: "/step2/invalid2.json", expected: "invalid" },
  { path: "/step3/invalid.json", expected: "invalid" },
  { path: "/step3/valid.json", expected: "valid" },
  { path: "/step4/invalid.json", expected: "invalid" },
  { path: "/step4/valid.json", expected: "valid" },
  { path: "/step4/valid2.json", expected: "valid" },
];

// Helper function to read files
const readFile = async (filePath) => {
  try {
    return await fs.readFile(__dirname+filePath, "utf8");
  } catch (err) {
    throw new Error(`Failed to read file at ${filePath}: ${err.message}`);
  }
};

// Tests
describe("useJsonParser tests", () => {
  testFiles.forEach(({ path, expected }) => {
    test(`Testing file: ${path}`, async () => {
      const rawData = await readFile(path);

      if (expected === "valid") {
        await expect(useJsonParser(rawData)).resolves.toBeTruthy();
      } else {
        await expect(useJsonParser(rawData)).rejects.toThrow();
      }
    });
  });
});
