describe("observable 观察者模式",function () {
   var observable,observer1,observer2,observer3;

   beforeEach(function () {

      observable = Object.create(Observable);
      observer1 = function (name) {}
      observer2 = function (name) {}
      observer3 = function (name) {}

      observable.addObserver("click",observer1);
      observable.addObserver("mousedown",observer3);
   });

   it("能够添加观察者以及判断某个观察者是否存在",function () {

      expect(observable.hasObserver("click",observer1)).toBeTruthy();
      expect(observable.hasObserver("click",observer2)).toBeFalsy();
      expect(observable.hasObserver("mousedown",observer3)).toBeTruthy();

   });
   
   it("提供notify(通知)Observers 方法调用每个观察者",function () {

      var args = [];
      observable.addObserver("click",function () {
         args = [].slice.call(arguments);
      })
      observable.notify("click","fck",1,23,4);

       expect(["fck",1,23,4]).toEqual(args)
   });

   it("当添加对象时addObserver无法解析",function () {
       expect(function(){
          var obj = {};
          observable.addObserver("click",obj);
       },"TypeError");

      observable.addObserver("click",function () {
         throw new Error("fck");
      });
      observable.notify();
   })
});
