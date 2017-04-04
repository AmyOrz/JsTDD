describe("strfTime", function () {
    var date = new Date(2009,11,5);
    beforeEach(function () {

    });

    afterEach(function () {

    });

    describe("date", function () {
        it("return 05", function () {
            expect("05").toEqual(date.strftime("%d"));
        });
        it("return 12", function () {
            expect("12").toEqual(date.strftime("%m"));
        });
        it("return the mouth as two digits", function () {
            expect("09").toEqual(date.strftime("%y"));
        });
        it("return Full year", function () {
            expect("2009").toEqual(date.strftime("%Y"));
        });
        it("%F should return %y-%m-%d", function () {
            expect("2009-12-05").toEqual(date.strftime("%F"));

        });
    });
});
