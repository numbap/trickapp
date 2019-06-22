import moment from 'moment';

// Get visible tricks

export default (tricks, { text, sortBy, startDate, endDate }) => {
  return tricks.filter((trick) => {
    const createdAtMoment = moment(trick.createdAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
    const textMatch = trick.name.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'duration') {
      return a.duration < b.duration ? 1 : -1;
    }
  });
};