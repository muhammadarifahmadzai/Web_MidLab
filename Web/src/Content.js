import { useState } from "react";
import ContentChild from "./ContentChild";
import photobig from './Baber.jpg';
function Content(){
    const [data, setData]= useState([
        {
         id:"1", image1:photobig, 
         title1:"Abrar Ahmad, Mohammad Ali get madian call-ups for England Tests; Fawad, Hasan, Yasir dropped", 
         subtitle1:"Shaeen shah Afridi is not fit and available for selection yet",
        },
        {
            id:"2", image1:photobig, 
            title1:"Abrar Ahmad, Mohammad Ali get madian call-ups for England Tests; Fawad, Hasan, Yasir dropped", 
            subtitle1:"Shaeen shah Afridi is not fit and available for selection yet",
          
           },
           {
            id:"2", image1:photobig, 
            title1:"Abrar Ahmad, Mohammad Ali get madian call-ups for England Tests; Fawad, Hasan, Yasir dropped", 
            subtitle1:"Shaeen shah Afridi is not fit and available for selection yet",
          
           },
           {
            id:"2", image1:photobig, 
            title1:"Abrar Ahmad, Mohammad Ali get madian call-ups for England Tests; Fawad, Hasan, Yasir dropped", 
            subtitle1:"Shaeen shah Afridi is not fit and available for selection yet",
          
           },
    ])
    return(
        <div>
           <ContentChild setData={data} control={setData} />
        </div>
    )
}
export default Content;