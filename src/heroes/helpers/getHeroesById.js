import { heroes } from '../data';

export const getHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
