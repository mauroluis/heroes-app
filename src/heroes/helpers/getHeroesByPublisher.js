import { heroes } from '../data';

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ['DC Comics', 'Marvel Comics'];
  if (!validPublisher.includes(publisher)) {
    throw new Error(`Invalid publisher: ${publisher}`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher);
};
