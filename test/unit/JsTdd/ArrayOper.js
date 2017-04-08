describe("flat array", function () {

    var arr = new Amy.FlatArr();
    var type = Amy.type;
    var sanbox = sinon.sandbox.create();

    beforeEach(function () {

    });
    afterEach(function () {

    });

    describe("flat the array", function () {
        it("method flat should remove the repeat array", function () {
            expect([1,2,3,4,5]).toEqual(arr.flat([1,2,3,[4,5]]));
        });
    });
    describe("{}.toString get the type", function () {
        it("[] type should be array", function () {
            expect("array").toEqual(type([1,2,3]));
        });
        it("{} type should be object", function () {
            expect("object").toEqual(type({a:123}));
        });
        it("'asd' type should be string", function () {
            expect("string").toEqual(type("asd"));
        });
        it("123 type should be number", function () {
            expect("number").toEqual(type(123));
        });
        it("true type should be boolean", function () {
            expect("boolean").toEqual(type(true));
        });
        it("null type should be null", function () {
            expect("null").toEqual(type(null));
        });
        it("undefined type should be undefined", function () {
            expect("undefined").toEqual(type(undefined));
        });
    });
});
