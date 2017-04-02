describe("namespace operation",function () {
    describe(" module 模式创建命名空间",function () {
        it("test should create non-existent object",function () {
            tddjs.namespace("fck");
            tddjs.fck.name = "arvin";
            expect("arvin").toEqual(tddjs.fck.name);
        });
        it("test should not overwrite existing namespace",function () {
            tddjs.nstest = {nested:{}};
            var result = tddjs.namespace("nstest.nested");
            expect(tddjs.nstest.nested).toEqual(result);
        })
    })
});
