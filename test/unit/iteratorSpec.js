describe("iterator operation",function () {
    it("iter.next()应该返回第一个item",function () {
        var collection = [1,2,3,4,5];
        var iter = tddjs.iterator(collection);
        expect(iter.next()).toEqual(collection[0]);
        expect(iter.hasNext()).not.toBeNull();
    });

});

