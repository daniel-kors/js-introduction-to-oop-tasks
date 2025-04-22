export class ParseError extends Error {
  constructor(message) {
    super(message);
    this.name = "ParseError";
  }
}

// BEGIN
export function parseJson(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    throw new ParseError(error.message);
  }
}
// END
