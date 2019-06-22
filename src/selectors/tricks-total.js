export default (tricks) => {
  return tricks
      .map((trick) => trick.duration)
      .reduce((sum, value) => sum + value, 0);
};
