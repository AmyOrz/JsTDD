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
    describe("每个对象生成一个唯一uid",function () {
        it("tddjs 创建uid",function () {
            var id = tddjs.uid({name:123});
            expect(0).toEqual(id);
            var id1 = tddjs.uid({name:123});
            expect(1).toEqual(id1)
        });

        it("原始类型将不会产生uid",function () {
            var str = "what fck";
            expect(tddjs.uid(str)).toBeUndefined();

            var num = 123;
            expect(tddjs.uid(num)).toBeUndefined();
        })
    })
});
