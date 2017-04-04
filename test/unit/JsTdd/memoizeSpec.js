describe("memoize operation",function () {
    it("memoize 方法返回fibonacci树，并记忆在缓存中",function () {
        var fibo = fibonacci.memoize();
        expect(fibo(5)).toEqual(8);
        expect(fibo(4)).toEqual(5);
    });
});

