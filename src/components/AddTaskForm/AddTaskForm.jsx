import React, { Component, PropTypes } from 'react';
import { Modal, FormControl, FormGroup, Button, ControlLabel } from 'react-bootstrap';
import { reduxForm } from 'redux-form'

@reduxForm({
  form: 'AddTaskForm',
  fields: [
    'title',
    'description',
    'status',
  ],
})
export default class AddTaskForm extends Component {
  static propTypes = {
    show: PropTypes.bool,
    createTask: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);

    this.submitHandler = this.submitHandler.bind(this);
  }
  
  submitHandler(values, dispatch) {
    this.props.createTask(values);

    this.props.onClose();
  }

  render() {
    const {
      handleSubmit,
      submitting,
      resetForm,
      fields: { title, description, status },
    } = this.props;
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onClose}
      >
        <Modal.Header closeButton={true}>
          <Modal.Title>Create new task</Modal.Title>
        </Modal.Header>
        <form onSubmit={handleSubmit(this.submitHandler)}>
          <Modal.Body>
            <FormGroup controlId="formNewTaskTitle">
              <ControlLabel>Title</ControlLabel>
              <FormControl
              name="taskTitle"
              placeholder="Task title"
              {...title}
            />
            </FormGroup>
            <FormGroup controlId="formNewTaskDescription">
              <ControlLabel>Description</ControlLabel>
              <FormControl
                name="taskDescription"
                placeholder="Task description"
                {...description}
              />
            </FormGroup>
            <FormGroup controlId="formNewTaskStatus">
              <ControlLabel>Task status</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                {...status}
                value={status.value || ''}
              >
                <option value="new">New</option>
                <option value="complete">Complete</option>
              </FormControl>
            </FormGroup>
          </Modal.Body>
          <Modal.Footer>  
            <Button onClick={this.props.onClose}>Close</Button>
            <Button onClick={resetForm}>Clear</Button>
            <Button type="submit" bsStyle="primary">Create</Button>
          </Modal.Footer>  
        </form>
      </Modal>
    );
  }
}
