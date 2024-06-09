import { EFFLongWordList } from './words';

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

  // Guarantees that password will not be missing one of the chosen config
  if (upper) password += upperAlphabet[rand(upperAlphabet.length)];
  if (numbers) password += numbersAlphabet[rand(numbersAlphabet.length)];
  if (symbols) password += symbolsAlphabet[rand(symbolsAlphabet.length)];

  const currentLength = password.length;
  for (let i = 0; i < length - currentLength; i++) {
    password += shuffledAlphabet[rand(alphabet.length)];
  }

  return password;
}

interface PassphraseConfig {
  wordsCount: number;
  separator: string;
  upper: boolean;
  numbers: boolean;
}

export function generatePassphrase({
  wordsCount,
  separator,
  upper,
  numbers,
}: PassphraseConfig): string {
  const words = [];

  for (let i = 0; i < wordsCount; i++) {
    let word = EFFLongWordList[rand(EFFLongWordList.length)];

    if (upper) {
      word = capitalizeFirstLetter(word);
    }

    if (numbers) {
      word = word + numbersAlphabet[rand(numbersAlphabet.length)];
    }

    words.push(word);
  }
  return words.join(separator);
}

/**
 * @param max_number
 * @returns Random number between 0 and max_number
 */
function rand(max_number: number): number {
  return Math.floor(Math.random() * max_number);
}

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
