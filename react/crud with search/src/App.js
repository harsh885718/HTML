import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


function App() {
  const [amp , setamp] = useState()
  const [show, setShow] = useState(false);
  const [name , setname] = useState()
  const [email , setemail] = useState()
  const [lgShow, setLgShow] = useState(false);

  const [editid , seteditid] = useState();
  const [editname , seteditname] = useState();
  const [editemail , seteditemail] = useState() ;

  const [find , setfind] = useState("")


  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>{return res.json()})
    .then((data)=>{
      setamp(data)
    })
  }, [])

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handlesave = ()=>{

    fetch("https://jsonplaceholder.typicode.com/users", {
      method : "POST" , 
      headers : {"Contant-Type" : "application/json"},
      body : JSON.stringify(
        {
          name : name ,
          email : email
        }
      )
    })
    .then((res)=>{return res.json()})
    .then((data)=>{
      setamp([...amp, {
        id : amp.length+1,
        name : name , 
        email :email  
      }])
    })

    setname("")
    setemail("")


    setShow(false)
  }

  const handleedit = (id,name,email)=>{
    setLgShow(true)

    seteditid(id);
    seteditname(name);
    seteditemail(email)

  

  }
  const handlesaveedit = ()=>{
    const saveduser = amp.map((el) =>

      el.id === editid
       ? {...el, name:editname , email:editemail } : el

    );
    setamp(saveduser);
    setLgShow(false)
  }

  const handledelete =(deletedid)=>{
  
    fetch(`https://jsonplaceholder.typicode.com/users/${deletedid}`,{
      method : "DELETE" , 
      headers : { "Contant-Type" : "Application/Json"  } 
       })
       .then((res)=>{
        if(res)
        {
          setamp(amp.filter((el)=>(el.id !== deletedid)))
          alert("Deleted successfully")
        }
       })
     
     

  }


  return (
    <div className="App p-5">
      <button onClick={handleShow} className='btn btn-primary m-3'>Add Karigar</button><br />

      <label>Find Karigar :</label>
      <input value={find} onChange={(e)=>setfind(e.target.value)} type="text" className='m-3 ' />
      <table className="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>

    {amp && amp.filter((item)=>item.name.toLowerCase().startsWith(find))
    .map((item,i)=>(
       <tr key={i}>
       <th scope="col">{item.id}</th>
       <th scope="col">{item.name}</th>
       <th scope="col">{item.email}</th>
     <th>
       <button  onClick={()=>{handleedit(item.id,item.name,item.email)}} className='btn btn-success me-3 '>Edit</button>
       <button className='btn btn-danger  ' onClick={()=>{handledelete(item.id)}}>Delete</button>
     </th>
   </tr>
    ))
    }
  </tbody>
</table>


<Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Karigar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
                type="text"
                placeholder="enter name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handlesave}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Id</Form.Label>
              <Form.Control
                value={editid}
                type="text"
                disabled
                autoFocus
              />
              <Form.Label>Name</Form.Label>
              <Form.Control
              value={editname}
              onChange={(e)=>{seteditname(e.target.value)}}
                type="text"
                placeholder="enter name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email </Form.Label>
              <Form.Control
              value={editemail}
              onChange={(e)=>{seteditemail(e.target.value)}}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          
          <Button variant="primary" onClick={handlesaveedit}>
            Save edit
          </Button>
        </Modal.Footer>
      </Modal>



    </div>
  );
}

export default App;
