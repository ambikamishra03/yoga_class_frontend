import React from "react";

function BasicInfo({ setData }) {
  return (
    <form className="col-10 mx-auto mt-3" style={{placeItems:'center',height:'60vh',
    display:'grid', width:'100vh', marginTop:'15px',marginLeft:'150px'}}>
      <div style={{ display:'flex'}}>
        <label for="name" className="form-label"
         style={{fontSize:'24px',marginRight:'60px',marginTop:'15px'}}>
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          style={{width:'50vh',height:'7vh',margin:'10px',fontSize:'16px',borderRadius:'0px 15px',outline:'none',border:'1px solid gray'}}
          onChange={(e) =>
            setData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      </div>

      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label" style={{fontSize:'24px',marginTop:'15px'}}>
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          style={{width:'50vh',height:'7vh',margin:'10px',fontSize:'16px',borderRadius:'0px 15px',outline:'none',border:'1px solid gray'}}
          onChange={(e) =>
            setData((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <div id="emailHelp" className="form-text" style={{fontSize:'18px',marginTop:'10px'}}>
          We'll never share your email with anyone else.
        </div>
      </div>

      <div className="mb-3">
        <label for="age" className="form-label" style={{fontSize:'24px',marginRight:'95px',marginTop:'15px'}}>
          Age
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          style={{width:'50vh',height:'7vh',marginTop:'10px',fontSize:'16px',borderRadius:'0px 15px',outline:'none',border:'1px solid gray'}}
          onChange={(e) =>
            setData((prev) => ({ ...prev, age: e.target.value }))
          }
        />
      </div>

      <div className="mb-3">
        <label for="age" className="form-label" style={{fontSize:'24px',marginRight:'100px',marginTop:'15px'}}>
          Gender
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          value="0"
          style={{width:'40vh',height:'7vh',margin:'10px',outline:'none',border:'1px solid gray',fontSize:'16px'}}
          onChange={(e) =>
            setData((prev) => ({ ...prev, gender: e.target.value }))
          }
        >
          <option value="0">Select Gender</option>
          <option value="male">Male</option>  
          <option value="female">Female</option>
          <option value="Not wish to share">Does Not Wish to Share</option>
        </select>
      </div>
    </form>
  );
}

export default BasicInfo;
