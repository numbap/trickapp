export default (tricks) => {
  return tricks
      .map((trick) => trick.amount)
      .reduce((sum, value) => sum + value, 0);
};
