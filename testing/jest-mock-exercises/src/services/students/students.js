import { validateStudent } from './validator'; // zależność

/**
 * @typedef {object} Student
 * @property {number} id
 * @property {string} name
 * @property {string[]} notes
 */

/**
 *
 * @param {Student} student
 */
export const generateStudentReport = async (student) => {
  const isValid = await validateStudent(student);

  const average = (numbers) =>
    numbers.reduce((value, acc) => value + acc, 0) / numbers.length;

  return `
        Name: ${student.name},
        Average notes: ${average(student.notes)},
        Has passed validation: ${isValid ? '✅' : '❌'}
    `;
};
