import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createProfile } from '../../store/actions/profileActions'
import { Redirect } from 'react-router-dom'

class EditProfile extends Component {
  state = {
    location: '',
    height: '',
    playingage:'',
    languages:'',
    nationality:'',
    skills:''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProfile(this.state);
    this.props.history.push('/');
  }
  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Edit Your Profile</h5>
          <div className="input-field">
            <input type="text" id='location' onChange={this.handleChange} />
            <label htmlFor="location">Location</label>
          </div>
          <div className="input-field">
            <input type="text" id='height' onChange={this.handleChange} />
            <label htmlFor="height">Height</label>
          </div>
          <div className="input-field">
            <input type="text" id='playingage' onChange={this.handleChange} />
            <label htmlFor="playingage">Playing Age</label>
          </div>
          <div className="input-field">
            <input type="text" id='languages' onChange={this.handleChange} />
            <label htmlFor="languages">Languages</label>
          </div>
          <div className="input-field">
            <input type="text" id='nationality' onChange={this.handleChange} />
            <label htmlFor="nationality">Nationality</label>
          </div>
          <div className="input-field">
            <input type="text" id='skills' onChange={this.handleChange} />
            <label htmlFor="skills">Skills</label>
          </div>
         
         
          <div className="input-field">
            <button className="btn pink lighten-1">Save</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createProfile: (profile) => dispatch(createProfile(profile))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
