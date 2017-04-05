var Observable = (function(){

    function _observers(obser,event){
        if(obser.observers == void 0)
            obser.observers = {};

        if(obser.observers[event] == void 0)
            obser.observers[event] = [];

        return obser.observers[event];
    }

    function addObserver(event,observer) {
        if(typeof observer != "function"){
            throw new TypeError("observer is not function");
        }

        var observers = _observers(this,event);
        observers.push(observer);
    }
    function hasObserver(event,observer) {
        var observers = _observers(this,event);
        if(observers == void 0)return false;

        return observers.indexOf(observer) > -1;
    }
    function notify(event) {
        var observers = _observers(this,event);
        if(observers == void 0)return;

        var arg = [].slice.call(arguments,1);

        for(var i = 0;i<observers.length;i++){
            try {
                observers[i].apply(this, arg);
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
