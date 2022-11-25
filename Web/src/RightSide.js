import { useState } from "react";
import RightChild from "./RightChild";

function RightSide(){
    const[data, setData]= useState([
        
        {id:"1", detail:"Stumpa", name1:"Englind *",overs1:"46.7", score1:"253", wicket1:"4",
         name2:"Austarlia",overs2:"48", score2:"280", wicket2:"10"
        },
        { id:"2", detail:"INNINGS BREAK", name1:"India *",overs1:"46.7", score1:"260", wicket1:"4",
        name2:"New Zealand",overs2:"50", score2:"320", wicket2:"5" },
        // {id:"3", detail:"Not covered Live", name1:"Panjab *",overs1:"46.7", score1:"239", wicket1:"8",
        // name2:"Blochistan",overs2:"50", score2:"290",wicket2:"10" },
        // {id:"4", detail:"Not covered Live", name1:"Sindh *",overs1:"5.3", score1:"20", wicket1:"6",
        // name2:"Blochistan",overs2:"50", score2:"198", wicket2:"5" },
    ])
    return(
        <div style={{marginLeft:"20px"}}>
          <RightChild sendData={data} controlData={setData} />
        </div>
    )
}
export default RightSide;