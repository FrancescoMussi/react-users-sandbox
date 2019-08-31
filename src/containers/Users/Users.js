import React from 'react'
import { connect } from 'react-redux'

import Button from '../../components/Buttons/Button'
import Table from '../../components/UI/Table/Table'
import * as actionTypes from '../../store/actions'

const Users = props => {

  const columns = ['name', 'surname', 'email']

  const goToUserForm = () => {
    props.history.push('/user_add')
  }

  const onUserEdit = user => {
    // props.userEdit(user)
    props.history.push({
      pathname: '/user_edit',
      user,
    })
  }

  const onUserDelete = user => {
    props.userDelete(user)
  }

  return (
    <div className="w-full mx-auto">
      <span className="text-3xl mr-4">User List</span>
      <Button
        type="button"
        theme="info"
        text="Add User"
        onClick={goToUserForm}
        extraClasses={['mr-3']}
      />
      {props.userList.length > 0 ? (
        <Table
          columns={columns}
          list={props.userList}
          showActions
          showEditButton
          showDeleteButton
          onEdit={onUserEdit}
          onDelete={onUserDelete}
        />
      ) : (
        <p className="text-center mt-10">No users</p>
      )}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userList: state.userList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    userAddToStore: user =>
      dispatch({ type: actionTypes.USER_ADD, payload: user }),
    userDelete: user =>
      dispatch({ type: actionTypes.USER_DELETE, payload: user }),
    userEdit: user =>
      dispatch({ type: actionTypes.USER_EDIT, payload: user }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Users)
