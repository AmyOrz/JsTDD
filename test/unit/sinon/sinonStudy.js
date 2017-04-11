describe("sinon.js study",function () {
    it("sinon.stub() 创建桩函数",function () {
        //原来版本
        //1
        var observer1 = stuFn();
        //2
        var isLocal = stuFn(true);

        //sinon版本
        //1
        var observer1 = sinon.stub();
        //2
        var isLocal2 = sinon.stub().returns(true);


        expect(isLocal()).toEqual(isLocal2());
    })
    it("sinon.stub(obj,method) 给方法创建桩",function () {
        //原版本
        //beforeEach
        this.xhr = tddjs.create(getHttpRequest);
        this.ajaxCreate = ajax.create();
        this.urlParam = ajax.urlParams();

        ajax.urlParams = stuFn();
        ajax.create = stuFn(this.xhr);

        //afterEach
        ajax.create = this.ajaxCreate;
        ajax.urlParams = this.urlParam;


  /**   //sinon版本
        //beforeEach
        this.xhr = tddjs.create(getHttpRequest);
        sinon.stub(ajax,"create").returns(this.xhr);
        sinon.stub(ajax,"urlParams").returns();

        //afterEach
        ajax.create.restore();
        ajax.urlParams.restore();

        ajax.urlParams.calledWith({name:"arvin"}); //ajax.urlParams 接收参数{name:"arvin"}并仅被执行一次
   */
    })
    it("模拟对象sinon.mock()",function () {
        //原版本，使用observable添加throwsErrer的函数会报错
        /**  no1
         observale.addObservers(function () {
            throw new TypeError("watch fck");
        })

         no2:放弃beforeEach和afterEach中对ajax创建的桩

         */

        //sinon版本
        /**   no1
         observable.addObserver("click",sinon.mock().throwsException("what fck"));

         no2:创建ajax的模拟对象,然后执行一次create方法，并返回xhr对象，接收{name:"arvin"}参数执行一次urlParams。
         var mock = sinon.mock(ajax);
         mock.expects("create").returns(this.xhr);
         mock.expects("urlParams").withArgs({name:"arvin"});

         详细可以参考ajaxPostSpec

         还可以使用never,once,twice,atLeast,atMost,exactly等方法来测试执行一次或多次。

         mock.expects("create").once().returns(this.xhr);
          */

    });
});
