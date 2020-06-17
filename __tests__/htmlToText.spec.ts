import { htmlToText } from '../src';

test('removes html markup', () => {
  expect(htmlToText(`<b>Name</b>`)).toBe('Name');
});

test('removes html markups', () => {
  expect(htmlToText(`<main><b>Name:</b><u>Britney</u></main>`)).toBe(
    'Name:Britney'
  );
});

test('replace line breaks with spaces', () => {
  expect(htmlToText(`<main><b>Name:</b><br/>Britney<br>Spears</main>`)).toBe(
    'Name: Britney Spears'
  );
});
