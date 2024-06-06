const lowerAlphabet = 'abcdefghijklmnopqrstuvwxyz';
const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbersAlphabet = '0123456789';
const symbolsAlphabet = ' .,:;!?-+=#~_*(){}[]<>/|@$%&';

interface PasswordConfig {
  length: number;
  upper: boolean;
  numbers: boolean;
  symbols: boolean;
}

export function generatePassword({
  length,
  upper,
  numbers,
  symbols,
}: PasswordConfig): string {
  // creates a single string with all select alphabets
  const alphabet = [
    lowerAlphabet,
    upper ? upperAlphabet : '',
    numbers ? numbersAlphabet : '',
    symbols ? symbolsAlphabet : '',
  ].join('');

  // shuffles entire alphabet
  const shuffledAlphabet = alphabet
    .split('')
    .sort(() => 0.5 - Math.random())
    .join('');

  let password = '';
  for (let i = 0; i < length; i++) {
    const randIndex = Math.floor(Math.random() * alphabet.length);

    password += shuffledAlphabet[randIndex];
  }

  return password;
}
