describe("this operation",function () {
    var circle = null;
    describe("this ",function () {
        beforeEach(function () {
            circle = {
                x:2,
                y:function () {
                    return this.x * 2;
                }
            }
        })
        it("fck = circle.y,这个时候this指向当前it作用域链，所以获取x从当前作用域链获取",function () {
            x = 2;
            var fck = circle.y;
            expect(4).toEqual(fck())
        })
        it("上面方法还可以使用bind绑定circle对象，把this指向circle",function () {
            var fck = circle.y.bind(circle);
            expect(4).toEqual(fck());
        })
    })
});
