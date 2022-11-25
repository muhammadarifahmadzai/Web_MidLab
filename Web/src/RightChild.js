function RightChild(props) {
  
  const handleDelete=(id)=>{
    const update= props.sendData.filter((ID)=>(
        ID.id !== id
    ))
    props.controlData(update);
  }
   
  return (
    <div style={{ width: "25vw", backgroundColor: "lightgrey" }}>
     
      {props.sendData.map((data) => (
        <>
          {" "}
          <div
            style={{
              boxShadow: "3px  1px 5px",
              height: "20vh",
              backgroundColor: "white",
            }}
          >
            <p style={{ color: "red", marginTop: "0px" ,marginLeft:10 }}>{data.detail}</p>
            <p style={{marginLeft:10}}>
              {" "}
              {data.name1}{" "}
              <span
                style={{
                  marginLeft: "50px",
                  marginRight: "30px",
                  float: "right",
                }}
              >
                <sub>({data.overs1}) </sub> {data.score1}/{data.wicket1}
              </span>
            </p>

            <p style={{ color: "red" }}> {data.detail2}</p>
            <p style={{ marginTop: "-15px", marginLeft:10 }}>
          
              {data.name2}
              <span
                style={{
                  marginLeft: "50px",
                  marginRight: "30px",
                  float: "right",
                }}
              >
                <sub>({data.overs2})</sub>
                {data.score2}/{data.wicket2}
              </span>
             
            </p>
            <button onClick={()=>handleDelete(data.id)} 
            style={{border:"none",
             boxShadow:"2px 2px 3px ", float:"right", marginRight:20}}>Delete</button>
          </div>
        </>
      ))}
    </div>
  );
}
export default RightChild;
