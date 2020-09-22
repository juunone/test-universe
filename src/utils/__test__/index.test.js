import { deleteOne } from "../../utils";

describe("utils", () => {
  it("should delete one of list data", () => {
    const a = { list: ["a", "b", "c"], key: 0 };
    const b = deleteOne(a);
    expect(b).toStrictEqual(deleteOne(a));
  });
});
