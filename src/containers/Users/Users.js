import React from 'react'
import { connect } from 'react-redux'

import Button from '../../components/Buttons/Button'
import Heading from '../../components/UI/Text/Heading'
import Table from '../../components/UI/Table/Table'
import * as actionTypes from '../../store/actionsTypes'

const Users = props => {
  const columns = ['name', 'surname', 'email']

  // Debug only
  // useEffect(() => {
  //   const user = {
  //     bio: 'asdasdasdasd',
  //     email: 'francesco.mussi@hotmail.it',
  //     gender: 'male',
  //     id: Math.random(),
  //     name: 'Francesco',
  //     newsletter: true,
  //     surname: 'Mussi',
  //   }
  //   props.userAddToStore(user)
  // }, [])

  const goToUserForm = () => {
    props.history.push('/user-add')
  }

  const onUserEdit = user => {
    props.history.push({
      pathname: '/user-edit',
      user,
    })
  }

  const onUserDelete = user => {
    props.userDelete(user)
  }

  const onGoToView = user => {
    props.history.push({
      pathname: `/user/${user.id}`,
      user,
    })
  }

  const iconAddUser = (
    <svg
      className="fill-current w-4 h-4 mr-2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
    >
      <path d="M2 6H0v2h2v2h2V8h2V6H4V4H2v2zm7 0a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0V6zm11 9.14A15.93 15.93 0 0 0 12 13c-2.91 0-5.65.78-8 2.14V18h16v-2.86z" />
    </svg>
  )

  return (
    <div className="w-full mx-auto">
      <Heading text="User List" />
      <Button
        type="button"
        theme="info"
        text="Add User"
        onClick={goToUserForm}
        icon={iconAddUser}
        extraClasses={['mr-3', 'float-right', 'inline-flex', 'items-center']}
      />
      {props.userList.length > 0 ? (
        <Table
          columns={columns}
          list={props.userList}
          showActions
          showGoToPageButton
          showEditButton
          showDeleteButton
          onEdit={onUserEdit}
          onDelete={onUserDelete}
          onGoToView={onGoToView}
        />
      ) : (
        <p className="text-center mt-32 text-gray-500 text-xl">
          No users yet. <br />
          Feel free to add more.
        </p>
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
    userEdit: user => dispatch({ type: actionTypes.USER_EDIT, payload: user }),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users)
