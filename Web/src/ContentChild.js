function ContentChild(props) {
  const handleDelete=(id)=>{
    const update= props.setData.filter((d)=>(
        d.id !== id
    ))
    props.control(update);
  }
  return (
    <div>
      {props.setData.map((d) => (
        <div style={{ width:"30vw", boxShadow:"3px 3px 2px rgb(0,0,2, 0.5)"}}>
          <div   style={{width:"30vw", borderRadius:"10px 10px 0 0"}}>

            <div style={{ width:"30vw", height:"40vh"}}> 

              <img src={d.image1} style={{width:"100%",height:"100%",borderRadius:"10px 10px 0 0"}} alt="cricket"/>

            </div>

            <div style={{width:"100%",height:"18vh", backgroundColor:"black", margin:"0 1px 0 1px"}}>

            <div style={{ color:"white", marginLeft:15}}><h5>{d.title1}</h5></div>
            <p style={{color:"lightgray",marginLeft:15}}>{d.subtitle1}</p>
            <button onClick={()=>handleDelete(d.id)} 
            style={{border:"none",
             boxShadow:"2px 2px 3px ",marginTop:"-50px", float:"right", marginRight:20}}>Delete</button>

            </div>
          </div>

        </div>
      ))}
    </div>
  );
}
export default ContentChild;
