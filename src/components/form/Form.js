import Form from "react-bootstrap/Form";
import { useState } from 'react';

const Main = (props)=>{
    const [formData, setFormData] = useState({
        'id':'',
        'name':'',
        'price':'',
        'quantity':'',
    })
  
    const handleChange = (event)=>{
      setFormData(
        {
          ...formData,
          [event.target.name]:event.target.value
        }
      )
    }
    
    const submitHendler = (event)=>{
      event.preventDefault();
      props.onSave(formData)
    }
  
    console.log(formData);  
    return(
        <Form className="form" onSubmit={submitHendler}>
            <div className="form-group">
                <textarea name="name" placeholder="Prekes pavadinimas" className="m-1 form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <textarea name="price"placeholder="Kaina" className="m-1 form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
            <textarea name="quantity" placeholder="Kiekis" className="m-1 form-control" onChange={handleChange}/>
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Saugoti</button>
            </div>
        </Form>
    );
}
 
export default Main;