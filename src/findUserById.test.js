const findUserById = require("./findUserById");

describe("findUserById", () => {
  test("finds user with given id", () => {
    const user = findUserById(2);

    expect(user.id).toBe(2);
    expect(user.name).toBe("B");
  });

  test("throws error when parameter is not provided", () => {
    expect(findUserById()).toBe("Parameter missing");
  });

  test("throws error when parameter is not a number", () => {
    expect(findUserById("b")).toBe("Parameter must be a number");
  });
});
