import { createSlice } from "@reduxjs/toolkit";
import {data} from "./Data"



const Usereduser = createSlice(
    {
        name : "user",
        initialState : data,
        reducers : {
            adddata : (state, action)=>{
                // console.log(state)
                state.push(action.payload)
            },
            editdata : (state ,action)=>{
                const {id ,name , email , mobile} = action.payload
                    console.log(id)
                const user = state.find(data =>(
                    data.id == id
                ))
                if(user){
                    user.name=name
                    user.email=email
                    user.mobile=mobile
                }
            },
            deletedata : (state , action)=>{
                const {id} = action.payload

                const deletdata = state.find((item)=> item.id == id)
                
                if(deletdata)
                {
                    return state.filter((data)=> data.id !== id)
                }

            }
            
            
        }
    
    }
)

export const{adddata , editdata, deletedata} = Usereduser.actions
export default Usereduser.reducer ;