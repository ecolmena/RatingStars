/*
 * @Description: 
 * @version: 1.0
 * @Author: shaomin fei
 * @Date: 2020-08-24 19:27:26
 * @LastEditors: shaomin fei
 * @LastEditTime: 2020-08-24 19:36:23
 */
import React from "react"

import Color from "./Color";

const ColorList=function({colors=[]}){

    if(!colors.length){
        return (<div>No Color Listed</div>);
    }
    return (
        <div>
            {
                colors.map(color=>{
                   return (<Color key={colors.id} {...color}></Color>)
                })
            }
        </div>
    );
}
export default ColorList;