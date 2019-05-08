import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editName } from '../../store/actions/profileActions'
import { Redirect } from 'react-router-dom'
import SocialLinks from './SocialLinks'
const divStyle = {
  width: '80px', 
  minHeight: '80px',
  display: 'block',
  background: 'url("https://api.typeform.com/responses/files/5d1903f3bfb2b2fbf8e925fbf3b2b78b56978dbb5d4164159114d0a4ee5cbbab") center top / cover',
  borderRadius: '5px',
  marginTop: '20px'
};
const editbtnStyle={
  width:'20px',
  height:'20px',
  cursor:'pointer'
}
const nameFormStyle={
  padding:'0px',
  margin:'0px'
}


export class SideBarProfile extends Component {
  
  state={
    showEditForm:false,
    nameInput:''
  }
  
  
  toggleForm=(e) =>{
    const tempname=`${this.props.profile.firstName} ${this.props.profile.lastName}`
    this.setState({ showEditForm: true,nameInput:tempname });
    console.log('sdada',this.props.profile)
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(this.state);
    const name=this.state.nameInput.split(' ')
    const firstName=name[0]
    const lastName=name[1]
    this.props.editName({firstName:firstName,lastName:lastName});
    this.setState({ showEditForm: false });
  }
  
  render() {
    const {profile}=this.props
    console.log(profile)
    return (
        <div id="sideBarData" style={{opacity: 1, display: 'block'}}>
        <center>
          <div style={divStyle} id="mainPhoto" className="profile_497643354" />
         
          { this.state.showEditForm ? 
           <div className="input-field inline">
           <form style={nameFormStyle}  onSubmit={this.handleSubmit}>
             <input style={{textAlign:'center'}} id="name" type="text"  
             value={this.state.nameInput} onChange={(e) => {this.setState({nameInput: e.target.value})}}></input>  <button className="btn pink lighten-1">Save</button>
             </form>
           </div>
          :
          <h6 >{profile.firstName} &nbsp;{profile.lastName} <span><img onClick={this.toggleForm} style={editbtnStyle} src="img/edit.png" alt="editbutton"></img></span> </h6>
            }
         

          <br/><br/>
          <p> Actor<img src="/img/profile/shape.svg" /> {profile.location}</p>
          <SocialLinks/>
        </center>
        <hr  />
        <div  style={{width: 'Calc(100% + 40px)'}}><div className="col-md-12" style={{minHeight: '80px'}}>
            <div className="row col-md-6 col-xs-6">
              <p style={{color: '#aaa', fontFamily: 'sans-serif'}}>Height</p>
              <p id="height" style={{marginTop: '-5px'}}>{profile.height}</p>
            </div>
            <div className="row col-md-6 col-xs-6" style={{marginLeft: '10px', paddingRight: '0px'}}>
              <p style={{color: '#aaa', fontFamily: 'sans-serif'}}>Playing Age</p>
              <p id="playing_age" style={{marginTop: '-5px'}}>{profile.playingage}</p>
            </div>
          </div>
          <div className="col-md-12" style={{minHeight: '80px'}}>
            <div className="row col-md-12">
              <p style={{color: '#aaa', fontFamily: 'sans-serif'}}>Languages</p>
              <p id="languages" style={{marginTop: '-5px', overflowWrap: 'break-word'}}>{profile.languages}</p>
            </div>
          </div>
          <div className="col-md-12" style={{minHeight: '80px'}}>
            <div className="row col-md-12">
              <p style={{color: '#aaa', fontFamily: 'sans-serif'}}>Nationality</p>
              <p id="nationality" style={{marginTop: '-5px'}}>{profile.nationality}</p>
            </div>
          </div>
        </div>
        <div id="skills_parent" className="col-md-12" style={{minHeight: '80px', opacity: 1}}>
          <div className="row col-md-12">
            <p style={{color: '#aaa', fontFamily: 'sans-serif'}}>Skills</p>
            <p id="skills" style={{marginTop: '-5px'}}>{profile.skills}</p>
          </div>
        </div>
      </div>
    )
  }
}




const mapStateToProps = (state) => {
    // console.log(state);
    return{
      auth: state.firebase.auth,
      profile: state.firebase.profile
    }
  }
  
const mapDispatchToProps = dispatch => {
  return {
    editName: (name) => dispatch(editName(name))
  }
}

  
  export default connect(mapStateToProps,mapDispatchToProps)(SideBarProfile)
  