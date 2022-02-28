import LimitedInt from "..";

describe("LimitedInt should", () => {
  it("return its costructor properties", () => {
    let limitedInt = new LimitedInt(5, 10, 1);

    expect(limitedInt.value).toBe(5);
    expect(limitedInt.min).toBe(1);
    expect(limitedInt.max).toBe(10);
  });

  it("set default min and max values if they aren't specified", () => {
    let limitedInt = new LimitedInt(5);

    expect(limitedInt.value).toBe(5);
    expect(limitedInt.min).toBe(0);
    expect(limitedInt.max).toBe(100);
  });

  it("throw an exception if min value is greater or equal than max value", () => {
    let errorThrown = false;
    
    try{
      let limitedInt = new LimitedInt(5, 10, 15);
    }
    catch(error){
      errorThrown = true;
    }

    expect(errorThrown).toBe(true);
  });

  it("limit value to max", () => {
    let limitedInt = new LimitedInt(500);

    expect(limitedInt.value).toBe(100);
  });

  it("limit value to min", () => {
    let limitedInt = new LimitedInt(0, 100, 10);

    expect(limitedInt.value).toBe(10);
  });

  it("increase value", () => {
    let limitedInt = new LimitedInt(50);
    limitedInt.increase(10);

    expect(limitedInt.value).toBe(60);
  });

  it("decrease value", () => {
    let limitedInt = new LimitedInt(50);
    limitedInt.decrease(10);

    expect(limitedInt.value).toBe(40);
  });

  it("increase percentage", () => {
    let limitedInt = new LimitedInt(50);
    limitedInt.increasePercentage(10);

    expect(limitedInt.value).toBe(55);
  });

  it("decrease percentage", () => {
    let limitedInt = new LimitedInt(50);
    limitedInt.decreasePercentage(10);

    expect(limitedInt.value).toBe(45);
  });

  it("increase value limiting it", () => {
    let limitedInt = new LimitedInt(95);
    limitedInt.increase(10);

    expect(limitedInt.value).toBe(100);
  });

  it("decrease value limiting it", () => {
    let limitedInt = new LimitedInt(5);
    limitedInt.decrease(10);

    expect(limitedInt.value).toBe(0);
  });

  it("return max indicator", () => {
    let limitedInt = new LimitedInt(100);

    expect(limitedInt.isMax()).toBe(true);
    limitedInt.decrease(10);

    expect(limitedInt.isMax()).toBe(false);
  });

  it("return min indicator", () => {
    let limitedInt = new LimitedInt(0);

    expect(limitedInt.isMin()).toBe(true);
    limitedInt.increase(10);

    expect(limitedInt.isMin()).toBe(false);
  });

  it("maximize the value", () => {
    let limitedInt = new LimitedInt(50);
    limitedInt.maximizeValue();

    expect(limitedInt.isMax()).toBe(true);
  });

  it("minimize the value", () => {
    let limitedInt = new LimitedInt(50);
    limitedInt.minimizeValue();

    expect(limitedInt.isMin()).toBe(true);
  });

  it("get an exact copy", () => {
    let limitedInt = new LimitedInt(50, 200, 5);
    let copy = limitedInt.copy();

    expect(copy.value).toBe(limitedInt.value);
    expect(copy.min).toBe(limitedInt.min);
    expect(copy.max).toBe(limitedInt.max);
  });
});
