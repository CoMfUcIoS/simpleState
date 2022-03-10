import { expect } from "chai";

import index from "./index";

describe("index", () => {
  it("should export a function", () => {
    expect(typeof index).to.equal("function");
  });
});
