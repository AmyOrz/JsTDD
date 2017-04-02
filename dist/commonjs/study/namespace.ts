var tddjs = (()=>{
    function namespace(name:string){
        var me = this;
        var level:string[] = name.split(".");

        for(let i = 0;i<level.length;i++){
            if(me[level[i]] == void 0){
                me[level[i]] = {};
            }
            me = me[level[i]];
        }
        return me;
    }

    return {
        namespace:namespace
    }
})();
export default tddjs;
