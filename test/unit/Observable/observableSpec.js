describe("observable 观察者模式",function () {
   var observable,observer1,observer2,observer3;

   beforeEach(function () {

      observable = new tddJs.observable();
      observable.observers = [];

      observer1 = function (name) {console.log("obser1"+name)}
      observer2 = function (name) {console.log("obser2")}
      observer3 = function (name) {console.log("obser3"+name)}

      observable.addObserver(observer1);
      observable.addObserver(observer3);
   });

   it("能够添加观察者以及判断某个观察者是否存在",function () {

      expect(observable.hasObserver(observer1)).toBeTruthy();
      expect(observable.hasObserver(observer2)).toBeFalsy();
      expect(observable.hasObserver(observer3)).toBeTruthy();

   });
   
   it("提供notify(通知)Observers 方法调用每个观察者",function () {

      observable.notifyObservers("fck");

   })
});
