describe("poller operation",function () {
   function forceStateAndReadyState(xhr,status,res) {
      var success = stuFn();
      var failure = stuFn();
      var complete = stuFn();

      ajax.request("/url",{
         success:success,
         failure:failure,
         complete:complete
      });

      xhr.status = status;
      xhr.readyStateChange(res);

      return {
         success:success.called,
         failure:failure.called,
         complete:complete.called
      }
   }
   beforeEach(function () {
      this.ajaxCreate = ajax.create;
      this.xhr = tddjs.create(pollerHttpRequest);
      ajax.create = stuFn(this.xhr);
   });

   afterEach(function () {
       ajax.create = this.ajaxCreate;
   });

   it("该测试应该得到poller轮询器及start方法",function () {

      ajaxPoller.start("/url11");

      expect(this.xhr.open.called).toBeTruthy();
      expect("/url11",this.xhr.open.args[1])
      expect(this.xhr.send.called).toBeTruthy();

   })
   it("test should call complete hander for status 200",function () {
      var request = forceStateAndReadyState(this.xhr,200,4);

      expect(request.complete).toBeTruthy();
   })
   it("test should call complete hander for status 404",function () {
      var request = forceStateAndReadyState(this.xhr,404,4);

      expect(request.complete).toBeTruthy();
   })
});
