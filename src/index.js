const fs = require("fs");
const path = require("path");

function useJsonParser(rawdata) {
  const objValidator = (object) => {
    const types = { boolean: true, string: true, number: true };

    for (let [key, value] of Object.entries(object)) {
      if (typeof key !== "string") {
        return false;
      }
      if (typeof value === "object" && value !== null) {
        if (!objValidator(value)) {
          return false;
        }
      } else if (value !== undefined && value !== null && !types[typeof value]) {
        return false;
      }
    }
    return true;
  };

  const objParser = (data) => {
    try {
      const parsedData = JSON.parse(data);
      if (!objValidator(parsedData)) {
        throw new Error("Invalid JSON structure.");
      }
      return parsedData;
    } catch (err) {
      throw new Error(err.message);
    }
  };

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (!rawdata || (typeof rawdata === "string" && rawdata.trim() === "")) {
          reject(new Error("Invalid data or no data provided."));
          return;
        }
        if (typeof rawdata === "object" && !Array.isArray(rawdata)) {
          if (objValidator(rawdata)) {
            resolve(rawdata);
          } else {
            reject(new Error("Invalid JSON structure."));
          }
        } else if (typeof rawdata === "string") {
          const parsedData = objParser(rawdata.trim());
          resolve(parsedData);
        } else {
          reject(new Error("Unsupported data type."));
        }
      } catch (err) {
        reject(err);
      }
    }, 0);
  });
}

module.exports = useJsonParser;
