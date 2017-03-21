describe("flat array", function () {

    var arr = new Amy.FlatArr();
    var type = Amy.type;
    
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
        it("[] type should be Array", function () {
            expect("Array").toEqual(type([1,2,3]));
        });
        it("{} type should be Object", function () {
            expect("Object").toEqual(type({a:123}));
        });
        it("'asd' type should be String", function () {
            expect("String").toEqual(type("asd"));
        });
        it("123 type should be Number", function () {
            expect("Number").toEqual(type(123));
        });
        it("true type should be Boolean", function () {
            expect("Boolean").toEqual(type(true));
        });
        it("null type should be Null", function () {
            expect("Null").toEqual(type(null));
        });
        it("undefined type should be Undefined", function () {
            expect("Undefined").toEqual(type(undefined));
        });
    });
});
