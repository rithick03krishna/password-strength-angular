import { faqModel } from './faq';

export const faqValues: faqModel[] = [
  {
    question: `What is this site generally about?`,
    answer:
      'This site allows the user to enter his details mainly firstname, lastname and date of birth, and then allows the user to enter a password of his choice. We intimate the user with the mistakes after entering the password. The site also has a feature to create random password for the user.',
  },
  {
    question: 'What should the password generally contain?',
    answer: `A combination of uppercase letters, lowercase letters, numbers and symbols, which has a length of at least 8 characters atmost 14 characters.`,
  },
  {
    question: `What should the password doesn't contain?`,
    answer: `It should be a word that may or may not be found in a dictionary , it can be name of a person, character, product, or organization. Generally password shouldn't contain user details mainly their firstname, lastname or Date of Birth.`,
  },
  {
    question: 'Is this site secure to enter our details?',
    answer: 'We generally do not store cache, or information you enter.',
  },
];
