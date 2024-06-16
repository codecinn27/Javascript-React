import Colorbox from "./Colorbox";
import './Boxlist.css';

function Boxlist({colors}){
    const boxes = [];
    for(let i = 0 ; i<25; i++){
        boxes.push(<Colorbox key={i} colors={colors}/>);
    }
    return(
        <div className="boxlist">
           {boxes}
        </div>
    )
}

export default Boxlist;