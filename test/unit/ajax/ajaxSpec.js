describe("ajax operation",function () {
   beforeEach(function () {

   })

   it("create method should return XMLHttpRequest Object",function () {
      var xhr = ajax.create();

      expect(xhr.readyState).toBeNumber();

      expect(xhr.open).toBeFunction();
      expect(xhr.send).toBeFunction();
      expect(xhr.setRequestHeader).toBeFunction();
   })
   it("get method 接受一个url参数",function () {
      expect(ajax.get(),"TypeError");
   });

   describe("测试桩创建",function () {
      var ajaxCrteate = null;
      beforeEach(function () {
         ajaxCrteate = ajax.create;
      });

      afterEach(function () {
         ajax.create = ajaxCrteate;
      });

      it("该测试应该得到XMLHttpRequest对象",function () {
         var openStub = stuFn();

         ajax.create = stuFn({
             open:openStub
         });
         ajax.get("/url");

         expect(ajax.create.called).toBeTruthy();
         expect(["GET","/url",true]).toEqual(openStub.args);
      })
   })
});
