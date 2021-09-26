import React, { useEffect, useState } from 'react';
import { Container, Table, Row, Col, FormGroup, FormControl,Form } from 'react-bootstrap'
import Header from '../../components/header';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../components/model';
import Input from '../../components/input';
import { addTask, deleteTaskById, changeStatusById } from '../../actions'
import DoneIcon from '@mui/icons-material/Done';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


 


const Home = (props) => {

  const tasks = useSelector(state => state.tasks);
  const [title, setTitle] = useState('')
  const [endDate, setEndDate] = useState('')

  const [show, setShow] = useState(false);
  const dispatch = useDispatch();


  // function to colose the model
  const handleClose = () => {
    setShow(false);
  }


  //form submit function
  const submitForm = () => {

    const payload = {
      title,
      endDate,

    };

    dispatch(addTask(payload));
    //console.log(payload);

    setShow(false);

  }

  // function to delete a task
  const deleteTask = (taskId) => {
    const payload = {
      taskId
    };
     
    dispatch(deleteTaskById(payload));
  };

  //function to change the status of a task

  const changeStatus = (_id) => {
    const payload = {
      _id
    }

    dispatch(changeStatusById(payload));


  }



  // function to show the add new task
  const showAddNewModel = () => setShow(true);

  //const handleShow = () => setShow(true);


  const renderAddTaskModal = () => {
    return (
      <Modal
        show={show}
        handleClose={handleClose}
        modalTitle={'Add new Task'}
        onSubmit={submitForm}
      >
        <Input
          label="Name"
          placeholder="Task Name"

          value={title}
          onChange={(e) => setTitle(e.target.value)}

        />
        <FormGroup controlId="date" bsSize="large">
        <Form.Label>End Date</Form.Label>
          <FormControl
            type="date"
            style={{ width: '100%' }}

            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormGroup>

      </Modal>
    );
  }


  /// table try content

  return (
    <>
      <Header />
      <Container>
        <Row>

          <Col md={{ offset: 8 }}>


            <Button variant="contained" size="large" startIcon={<AddCircleOutlineIcon />}  onClick={showAddNewModel}>  Add a new Task</Button>{' '}</Col>
        </Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Task Name</th>
              <th>States</th>
              <th>End date</th>
              <th>Change The Status</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>

            {tasks.tasks.map((task, index) => {
              return (
                <tr>
                  <td>{++index}</td>
                  <td>{task.title}</td>
                  <td>{task.activeStatus}


                  </td>
                  <td>{task.endDate}</td>
                  <td>  <Button variant="outlined" size="small" startIcon={<DoneIcon />} onClick={() => changeStatus(task._id)} >Mark as Done  </Button>  </td>

                  <Button variant="contained" endIcon={<DeleteForeverIcon />} onClick={() => deleteTask(task._id)} >Remove</Button>
                </tr>
              );
            })}
          </tbody>
        </Table>

      </Container>
      {renderAddTaskModal()}



    </>
  )
}

export default Home
