import Leftside from "./LeftSide";
import RightSide from "./RightSide";
import Content from "./Content";
import Footer from "./Footer";
function CombinationComponent() {
  return (
    <div>
      <div className="row" style={{ marginTop: 20 }}>
        <div className="col-md-4" style={{ marginLeft: "2vw" }}>
          {/* <Leftside /> */}
          <RightSide />
        </div>

        <div className="col-md-7 ">
          <Content />
        </div>
        {/* <div className="col-md-2">
         
        </div> */}
      </div>
      <Footer />
    </div>
  );
}
export default CombinationComponent;
