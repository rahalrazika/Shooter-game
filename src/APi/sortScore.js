const sort = (data) =>
  data.sort((first, next) => next.score - first.score).splice(0, 5);

export default sort;
