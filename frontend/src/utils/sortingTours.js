/* functions for sorting the list of tours in tabs */

/* sorting by price */
export const sortByPriceAsc = (tours) =>
  [...tours].sort((a, b) => a.price - b.price);

export const sortByPriceDesc = (tours) =>
  [...tours].sort((a, b) => b.price - a.price);

/* sorting by duration */
export const filterSingleDayTrips = (tours) =>
  tours.filter((t) => t.duration.includes("1 day"));

export const filterMultiDayTrips = (tours) =>
  tours.filter((t) => !t.duration.includes("1 day"));

/* sorting by difficulty */
export const sortDifficultyHard = (tours) =>
  [...tours].filter((t) => t.difficulty.includes("hard"));

export const sortDifficultyMiddle = (tours) =>
  [...tours].filter((t) => t.difficulty.includes("middle"));

export const sortDifficultyEasy = (tours) =>
  [...tours].filter((t) => t.difficulty.includes("easy"));

/* filtering only beginners friendly tours */
export const filterBeginnersFriendly = (tours) =>
  tours.filter((t) => t.forBeginners === "yes");

/* show all in random order */
export const shuffleTours = (tours) => {
  const shuffled = [...tours];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
