var tddJs = (function(){

    function observable() {

    }
    observable.prototype = {
        constructor:observable,
        observers:[],
        addObserver:function (observer) {
            this.observers.push(observer);
        },
        hasObserver:function (observer) {
            return this.observers.indexOf(observer) > -1;
        },
        notifyObservers:function () {
            for(var i = 0;i<this.observers.length;i++){
                this.observers[i].apply(this,arguments);
            }
        }
    };

    return {
        observable:observable
    };
})();