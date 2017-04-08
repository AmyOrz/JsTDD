describe("ajax operation",function () {
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
      var ajaxCrteate,xhr;
      beforeEach(function () {
         ajaxCrteate = ajax.create;
         xhr = Object.create(fakeHttpRequest);
         ajax.create = stuFn(xhr);
      });

      afterEach(function () {
         ajax.create = ajaxCrteate;
         isLocal = stuFn(false);
      });

      it("该测试应该得到XMLHttpRequest对象",function () {
         ajax.get("/url");

         expect(ajax.create.called).toBeTruthy();
         expect(["GET","/url",true]).toEqual(xhr.open.args);
         expect(xhr.onreadystatechange).toBeFunction();

      });
      it("send方法应该被调用,传入参数null",function () {
         ajax.get("/url");
         expect(xhr.send.called).toBeTruthy();
         expect(xhr.send.args[0]).toBeNull();
      });
      it("readystatechange handler test",function () {
         xhr.readyState = 4;
         xhr.status = 200;
         var success = stuFn();
         ajax.get("/url",{success:success});
         xhr.onreadystatechange();

         expect(success.called).toBeTruthy();
      });
      it("测试是否为本地请求",function () {
          xhr.readyState = 4;
          xhr.status = 0;
          var success = stuFn();
          isLocal = stuFn(true);

          ajax.get("fck.txt",{success:success});
          xhr.onreadystatechange();
          expect(success.called).toBeTruthy();
      })
      it("test should call success handler for status 200",function () {
         var request = forceStateAndReadyState(xhr,200,4);
         expect(request.success).toBeTruthy();

         isLocal = stuFn(true);
         var request2 = forceStateAndReadyState(xhr,0,4);
         expect(request2.success).toBeTruthy();
      })
   })
});
