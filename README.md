# use-json-parser

A custom asynchronous JSON parser with validation capabilities, designed to parse JSON strings or objects and validate their structure.

## 🌟 Features

- Asynchronous JSON parsing with Promise-based handling
- Strict validation of JSON structure
- Support for JSON strings and plain JavaScript objects
- Detailed error handling for invalid JSON
- Type checking for keys and values

## 📦 Installation

```bash
npm install use-json-parser
```

## 🚀 Quick Start

### Importing the Parser

```javascript
const useJsonParser = require("use-json-parser");
```

### Basic Usage

```javascript
// Parsing a JSON string
const jsonString = '{"name": "Alice", "age": 30, "active": true}';
useJsonParser(jsonString)
  .then(result => console.log("Parsed Data:", result))
  .catch(error => console.error("Error:", error.message));

// Parsing a JavaScript object
const jsonObject = { name: "Alice", age: 30, active: true };
useJsonParser(jsonObject)
  .then(result => console.log("Parsed Data:", result))
  .catch(error => console.error("Error:", error.message));
```

## 🔍 Key Differences from `JSON.parse()`

| Feature | useJsonParser | JSON.parse |
|---------|---------------|------------|
| Error Handling | Detailed validation errors | Basic syntax errors |
| Input Types | Strings & objects | Strings only |
| Validation | Strict type checking | No validation |
| Asynchronous | Promise-based | Synchronous |

## 🧪 Testing

The project includes comprehensive test cases:

```bash
# Install Jest
npm install jest --save-dev

# Run tests
npm test
```

## 📂 Project Structure

```
use-json-parser/
├── src/
│   └── index.js
├── test/
│   └── useJsonParser.test.js
├── package.json
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## 📄 License

 Licensed. See `LICENSE` file for details.

## 🛠️ Error Handling Examples

```javascript
// Handling invalid JSON
const invalidJson = '{"name": "Alice", age: 30, "active": true}';
useJsonParser(invalidJson)
  .catch(error => {
    // Catch and handle specific parsing errors
    console.error("Parsing failed:", error.message);
  });
```

## 💡 Best Practices

- Always use `.catch()` to handle potential parsing errors
- Validate input before parsing when possible
- Use in non-blocking asynchronous contexts

## 🔗 Related Resources

- [JSON Specification](https://www.json.org/)
- [MDN Web Docs: JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)