export interface Book {
  title: string;
  author: string;
  note?: string;
}

export const books: Book[] = [
  {
    title: 'The Pragmatic Programmer',
    author: 'David Thomas & Andrew Hunt',
    note: 'Timeless advice on craftsmanship.',
  },
  {
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    note: 'The reference for distributed systems.',
  },
  {
    title: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
  },
  {
    title: 'The Almanack of Naval Ravikant',
    author: 'Eric Jorgenson',
  },
];
