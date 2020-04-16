import React, {useState} from 'react';
import {Modal} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

function Example() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Create a portfolio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={(event) => this.formSubmit(event)}>
                <input 
                    type="text" 
                    name="name"
                    value={this.state.name} 
                    onChange={(event) => this.onChange(event)} 
                    placeholder="Portfolio Name"/>
                <input 
                    type="text" 
                    name="description"
                    value={this.state.description} 
                    onChange={(event) => this.onChange(event)} 
                    placeholder="Portfolio Description"/>
                <button>Create portfolio</button>             
            </form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  


export default Example;