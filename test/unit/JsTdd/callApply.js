describe("call and apply and bind", function () {
    var apple, banana, foo, bar, fck, obj;

    describe("call and apply", function () {
        beforeEach(function () {
            apple = {
                color: "red",
                show: function (a, b) {
                    return this.color + a + b;
                }
            };
            banana = {
                color: "yellow"
            };
        });
        it("apple show should return color red", function () {
            expect("red12").toEqual(apple.show(1,2));
        });
        it("method call should give the two param", function () {
            expect("yellow12").toEqual(apple.show.call(banana,1,2));
        });

        it("method apply should give the two param", function () {
            expect("yellow12").toEqual(apple.show.apply(banana,[1,2]));
        });

        it("method bind should give the two param", function () {
            expect("yellow12").toEqual(apple.show.bind(banana,1,2)());
        });
    });
    describe("number 没有max方法,所以我们借助call来求最大值",function () {
        it("当参数确定时使用call", function () {
            expect(245).toEqual(Math.max.call(Math,3,5,7,9,245));
        });
        it("当参数不确定时使用apply", function () {
            var numbers = [2,4,6,2,245]
            expect(245).toEqual(Math.max.apply(Math,numbers));
        });
    })
    describe("bind 会创建一个函数（绑定函数）,当调用这个绑定函数时，绑定函数会以创建时传入的第一个参数作为this，其他参数作实参调用",function () {
        beforeEach(function () {
            foo = {
                x:123
            };

            bar = function () {
                return this.x;
            };
        });
        it("使用bind新创建func函数，this指向foo，所以可以获取x", function () {
            var func = bar.bind(foo);
            expect(123).toEqual(func());
        });
    })
    describe("3个函数第一个参数都是this指向的对象即上下文",function () {
        beforeEach(function () {
            obj = {
                x :81
            };
            fck = {
                getX:function () {
                    return this.x;
                }
            };
        });
        it("call方法直接调用，参数依次传入", function () {
            expect(81).toEqual(fck.getX.call(obj));
        });
        it("apply方法直接调用，参数为数组", function () {
            expect(81).toEqual(fck.getX.apply(obj));
        });

        it("bind方法返回函数，参数依次传入", function () {
            expect(81).toEqual(fck.getX.bind(obj)());
        });
    })
});