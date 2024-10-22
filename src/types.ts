

export type TestInput = {
  engine: string;
  regex: string;
  replacement: string;
  extras?: string[];
  options: string[];
  inputs: string[];
};

export type TestOutput = {
  success: boolean;
  html?: string;
  message?: string;
};

export type runTestFn = (input: TestInput) => Promise<TestOutput>;