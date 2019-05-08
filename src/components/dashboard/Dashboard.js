import React, { Component } from 'react'
import SideBarProfile from '../profile/SideBarProfile'
import PhotoContainer from '../profile/PhotoContainer'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'



class Dashboard extends Component {
  render() {
    const { projects, auth, notifications } = this.props;
    if (!auth.uid) return <Redirect to='/signin' /> 

    return (
      <div className="dashboard container">
       
        <div className="row">
          <div className="col-md-3" id="sidebarRef" style={{marginBottom: '50px', marginTop: '50px', minHeight: '600px', display: 'block', backgroundColor: 'white', boxShadow: '0 0.5px 7.5px 0 rgba(0, 0, 0, 0.04)', borderRadius: '8px'}}>
            <SideBarProfile />
          </div>
          <div className="col-md-9" style={{paddingTop: '50px'}}>
            <PhotoContainer/>
          </div>
                
        </div>
      

        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['createdAt', 'desc']},
    { collection: 'notifications', limit: 3, orderBy: ['time', 'desc']}
  ])
)(Dashboard)
