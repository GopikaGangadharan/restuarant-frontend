import { FAIL, SUCCESS } from "../constants/allrestuarantConstant";

export const allrestuarantReducer = (state={allrestuarants:[]},action)=>{
    switch(action.type){
            case SUCCESS:
            return{
                allrestuarants:action.payload
            }
            case FAIL:
                return{
                    allrestuarants:[]
                }
            default:
                return state
    }
}