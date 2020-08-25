/*
 * @Description: 
 * @version: 1.0
 * @Author: shaomin fei
 * @Date: 2020-08-24 19:27:26
 * @LastEditors: shaomin fei
 * @LastEditTime: 2020-08-24 22:05:12
 */
import React from "react"

import Color from "./Color";

const ColorList=function({colors=[],
    onRemoveColor=f=>f,
    onRateColor=f=>f
}){

    if(!colors.length){
        return (<div>No Color Listed</div>);
    }
    return (
        <div className="color-list">
            {
                colors.map(color=>{
                   return (<Color key={colors.id} {...color} 
                    onRemove={onRemoveColor}
                    onRate={onRateColor}
                    ></Color>)
                })
            }
        </div>
    );
}
export default ColorList;