import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
      sent: false
    }
    this.namehandleChange = this.namehandleChange.bind(this)
    this.emailhandleChange = this.emailhandleChange.bind(this)
    this.messagehandleChange = this.messagehandleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  namehandleChange = e => {
    this.setState({
      name: e.target.value,

    })
  }


  emailhandleChange = e => {
    this.setState({
      email: e.target.value,

    })
  }



  messagehandleChange = e => {
    this.setState({
      message: e.target.value,

    })
  }



  handleSubmit(e) {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }

    axios.post('/api/form', data)
      .then(res => {
        this.setState({
          sent: true,
        }, this.resetForm())
      })
      .catch(() => {
        console.log("message not send")
      })

  }

  //for resetting the form data

  resetForm = () => {
    this.setState({
      name: '',
      message: '',
      email: ''
    })
    setTimeout(() => {
      this.setState({
        sent: false
      })
    }, 3000)

  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} style={{ width: '600px' }}>
          <FormGroup>
            <Label for="name">Name :</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.namehandleChange} />

          </FormGroup>

          <FormGroup>
            <Label for="name">E-mail :</Label>
            <Input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.emailhandleChange} />

          </FormGroup>

          <FormGroup>
            <Label for="name">Message :</Label>
            <Input
              type="textarea"
              name="message"
              value={this.state.message}
              onChange={this.messagehandleChange} />

          </FormGroup>

          <Button type="submit">Submit</Button>

        </Form>
      </div>
    )
  }
}



