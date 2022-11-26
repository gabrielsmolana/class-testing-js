const users = [
  {
    id: 1,
    name: "A",
  },

  {
    id: 2,
    name: "B",
  },
  {
    id: 3,
    name: "C",
  },
];

const findUserById = (id) => {
  if (id !== undefined && typeof id == "number") {
    return users.find((user) => id == user.id);
  }

  return id === undefined ? "Parameter missing" : "Parameter must be a number";
};
module.exports = findUserById;
