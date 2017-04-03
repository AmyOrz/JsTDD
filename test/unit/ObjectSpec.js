describe("Object operation",function () {
    it("Object.create 创建一个继承它的新对象",function () {
        var circle = {
            radius:5,
            area:function () {
                return this.radius * this.radius;
            }
        };

        var sphere = Object.create(circle);
        sphere.area = function () {
            return 4 * circle.area.call(this);
        };
        expect(100).toEqual(sphere.area());


        var sphere2 = Object.create(circle);
        sphere2.radius = 8;
        expect(64).toEqual(sphere2.area())
    });

    it("Object.extend 可以扩展对象上的属性",function () {

    })

});

