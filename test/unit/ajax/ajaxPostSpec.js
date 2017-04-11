describe("ajax post operation",function () {

   describe("模拟对象",function () {
      var xhr;

      beforeEach(function () {
         xhr = tddjs.create(postHttpRequest);
      });

      afterEach(function () {

         ajax.create.restore();
         ajax.urlParams.restore();

      });

      it("创建ajax的模拟对象，期望urlParams方法接受参数并被调用一次",function () {
         var obj = {name:"arvin",age:24};
         var mock = sinon.mock(ajax);
         mock.expects("create").returns(xhr);
         // mock.expects("create").once().returns(xhr);
         mock.expects("urlParams").withArgs(obj);

         ajax.post("/url",{data:obj});
      })
   });

   describe("测试桩创建",function () {
      var xhr;
      beforeEach(function () {
         xhr = tddjs.create(postHttpRequest);
         sinon.stub(ajax,"create").returns(xhr);
         sinon.stub(ajax,"urlParams");

      });

      afterEach(function () {

         ajax.create.restore();
         ajax.urlParams.restore();
      });

      it("该测试应该得到XMLHttpRequest对象",function () {
         ajax.post("/url");

         expect(ajax.create.called).toBeTruthy();
         expect(["POST","/url",true]).toEqual(xhr.open.args);
         expect(xhr.onreadystatechange).toBeFunction();

      });

      it("test should encode data",function () {
         var obj = {name:"arvin",age:24};
         ajax.post("/url",{data:obj});

         expect(ajax.urlParams.calledWith(obj)).toBeTruthy();
      });

      it("test should send data on URL for GET",function () {
         var url = "/url";
         var obj = {name:"arvin",age:24};
         var expects = url + "?" + ajax.urlParams(obj);
         ajax.get(url,{data:obj});

         expect(expects).toEqual(xhr.open.args[1]);
      })
   })
});
