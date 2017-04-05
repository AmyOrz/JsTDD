var Observable = (function(){

    function addObserver(observer) {
        if(this.observers == void 0)this.observers = [];
        if(typeof observer != "function"){
            throw new TypeError("observer is not function");
        }
        this.observers.push(observer);
    }
    function hasObserver(observer) {
        if(this.observers == void 0)return false;
        return this.observers.indexOf(observer) > -1;
    }
    function notify() {
        if(this.observers == void 0)return;
        for(var i = 0;i<this.observers.length;i++){
            try {
                this.observers[i].apply(this, arguments);
            }catch (e){

            }
        }
    }
    return {
        addObserver:addObserver,
        hasObserver:hasObserver,
        notify:notify
    }
})();
