// Simple math captcha generation and validation

export type CaptchaOperation = "+" | "×";

export interface CaptchaProblem {
  num1: number;
  num2: number;
  operation: CaptchaOperation;
  answer: number;
  question: string;
}

// Generate a random math problem
export function generateCaptcha(): CaptchaProblem {
  const operations: CaptchaOperation[] = ["+", "×"];
  const operation = operations[
    Math.floor(Math.random() * operations.length)
  ] as CaptchaOperation;

  let num1: number;
  let num2: number;
  let answer: number;

  if (operation === "+") {
    // Addition: numbers 1-20
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    answer = num1 + num2;
  } else {
    // Multiplication: numbers 2-10
    num1 = Math.floor(Math.random() * 9) + 2;
    num2 = Math.floor(Math.random() * 9) + 2;
    answer = num1 * num2;
  }

  return {
    num1,
    num2,
    operation,
    answer,
    question: `What is ${num1} ${operation} ${num2}?`,
  };
}

// Calculate the answer from operands (for server-side validation)
export function calculateAnswer(
  num1: number,
  num2: number,
  operation: CaptchaOperation
): number {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "×") {
    return num1 * num2;
  }
  return -1;
}

// Validate the captcha answer
export function validateCaptcha(
  userAnswer: number,
  num1: number,
  num2: number,
  operation: CaptchaOperation
): boolean {
  const correctAnswer = calculateAnswer(num1, num2, operation);
  return userAnswer === correctAnswer;
}
