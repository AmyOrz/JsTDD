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
});
