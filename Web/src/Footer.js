import {Link}  from "react-router-dom";
function Footer(){
     return(
        <div style={{backgroundColor:"lightgrey", position:"relative"}}>
            
            <div className="row " style={{margin:"0px 50px 0 50px", backgroundColor:"white", borderTop:"2px solid black"}}>

               
               <div className="col-md-3" style={{marginTop:20 }}> 
               <h6>QEA Tropy</h6>
                 <hr style={{width:200}}/>
                 <ul style={{listStyle:"none"}}>
                    <li><Link to="/qeaTropy">T20 Timeout </Link></li>
                    <li><Link to="qeaTropy">T20 Time out </Link></li>
                    <li>Fantasy</li>
                    <li>ICC Ranking</li>
                   
                 </ul>
               </div>
               <div className="col-md-2" style={{marginTop:20 }}>
               <h6>ESPNCricinfo App</h6>
                 <hr style={{width:150}}/>
                 <ul style={{listStyle:"none"}}>
                    <li> <Link to="/iosApp">Android App </Link></li>
                    <li> <Link to="/iosApp">iOS App </Link></li>
                   
                   
                 </ul>
               </div>
               <div className="col-md-2" style={{marginTop:20 }}>
               <h6>Follow ESPNCricinfo</h6>
                 <hr style={{width:150}}/>
                 <ul style={{listStyle:"none"}}>
                    <li>Instragram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                    <li>Youtube</li>
                   
                 </ul>
               </div>
               <div className="col-md-2" style={{marginTop:20 }}>
               <h6>ESPN Sites</h6>
                 <hr style={{width:150}}/>
                 <ul style={{listStyle:"none"}}>
                    <li>The Cricket Monthly</li>
                    <li>ESPN</li>
                   
                   
                 </ul>
               </div>

            </div>

            <div className="col-md-12" style={{backgroundColor:"grey", height:"6vh"}}>
               <p style={{marginLeft:"4vw",paddingTop:10}}>Terms of Use | Privacy Policy | Interest-Based Ads | Feedback</p>

            </div>
        </div>
     )
}
export default Footer;