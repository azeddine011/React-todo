import AddNoteModal from "./AddNoteModal";



const Body = ()=>{
    return (
      
        <div className="row g-0">
          <div className="col-md-3"></div>
          <div className="col-md-6 align-self-center container rounded-3" style={{backgroundColor:"#FFF"}}>
            
            <AddNoteModal/>
          </div>
          <div className="col-md-3"></div>
        </div>
    );
}

export default Body;