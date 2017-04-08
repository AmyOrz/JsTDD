describe("ajax post operation",function () {

   describe("测试桩创建",function () {
      var ajaxCrteate,xhr;
      var urlParam;
      beforeEach(function () {
         ajaxCrteate = ajax.create;
         xhr = tddjs.create(postHttpRequest);
         ajax.create = stuFn(xhr);

         urlParam = ajax.urlParams;
      });

      afterEach(function () {
         ajax.create = ajaxCrteate;

         ajax.urlParams = urlParam;
      });

      it("该测试应该得到XMLHttpRequest对象",function () {
         ajax.post("/url");

         expect(ajax.create.called).toBeTruthy();
         expect(["POST","/url",true]).toEqual(xhr.open.args);
         expect(xhr.onreadystatechange).toBeFunction();

      });
      it("test should encode data",function () {
         ajax.urlParams = stuFn();
         var obj = {name:"arvin",age:24};
         ajax.post("/url",{data:obj});
         expect(obj).toEqual(ajax.urlParams.args[0]);
      })
      it("test should send data on URL for GET",function () {
         var url = "/url";
         var obj = {name:"arvin",age:24};
         var expects = url + "?" + urlParam(obj);
         ajax.get(url,{data:obj});

         expect(expects).toEqual(xhr.open.args[1]);
      })
   })
});
