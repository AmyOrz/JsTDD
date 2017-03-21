import {type} from "./Type";

export class FlatArr {

    public flat(arr:any): number[] {
        return this._flat(arr);
    }

    private _flat(arr: any):number[] {

        var res:number[] = [];
        for(let item of arr){

            if(type(item) == "Number"){

                res.push(item);

            }else if(type(item) == "Array"){

                res = res.concat(this._flat(item));

            }
        }
        return res;
    }


}
