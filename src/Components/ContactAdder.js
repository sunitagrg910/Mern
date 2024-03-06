import { useState } from "react";

//import { Chris, Dev, John } from "./Persons";
const ContactAdder = (props) => {
  //const[name,setName]=useState("John");
  //let name="John"
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const [location, setLocation] = useState("");

  const onFormSubmitHandler = (e) => {
    e.preventDefault();
    const contactData = {
      id: Math.random(),
      name,
      mobile: mobile,
      location: location,
    };
    if (name.length < 1 || mobile.length < 1 || location.length < 1) {
      alert("Please fill all the fields");
    } else {
      props.onContactAdded(contactData);
      setName("");
      setMobile("");
      setLocation("");
    }

    //console.log(contactData);
    //setName("Chris");
    //console.log(name);
    //console.log("Clicked");
  };

  /* let result;

    if(name==="Dev"){
        result= <Dev></Dev>

    
    }else if(name==="John"){
        result=<John></John>
    }
else if (name==="Chris"){
    result=<Chris></Chris>
}*/

  return (
    <>
      <div className="simpleAddder">
        Contact adder:
        <form onSubmit={onFormSubmitHandler}>
          <input
            type="text"
            value={name}
            placeholder="Contact Name"
            onChange={(e) => setName(e.target.value)}
          ></input>
          <input
            type="text"
            value={mobile}
            placeholder="Mobile"
            onChange={(e) => setMobile(e.target.value)}
          ></input>
          <input
            type="text"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          ></input>
          <br />
          <br />
          <button>Add Contact</button>
        </form>
      </div>
    </>
  );
};
export default ContactAdder;
