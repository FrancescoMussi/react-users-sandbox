import React from 'react'

import Button from '../../components/Buttons/Button';
import Heading from '../../components/UI/Text/Heading'


const UserDetail = props => {
  // Debug Only
  // const user = {
  //   bio: 'asdasdasdasd',
  //   email: 'francesco.mussi@hotmail.it',
  //   gender: 'male',
  //   id: Math.random(),
  //   name: 'Francesco',
  //   newsletter: true,
  //   surname: 'Mussi',
  // }

  const user = props.location.user ? props.location.user : {}

  const goToUserForm = () => {
    props.history.push({
      pathname: '/user-edit',
      user,
    })
  }

  // Images and Icons are hardcoded
  return (
    <>
      <Heading text="User Details" />
      <div className="lg:flex justify-center m-8">
        <div
          className="h-64 lg:w-1/3 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            height: '24rem',
            backgroundImage: `url(https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350)`,
          }}
          title="User header pic"
        ></div>

        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <div className="mb-8">
            <div className="flex justify-between">
              <div className="text-gray-900 font-bold text-xl mb-2">
                {user.name + ' ' + user.surname}
              </div>
              <Button
                type="button"
                theme="info"
                text="Edit User"
                onClick={goToUserForm}
              />
            </div>
            

            <div className="flex items-center mb-4">
              <img
                className="w-10 h-10 rounded-full mr-4"
                src="https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Avatar"
              />
              <div className="text-sm">
                <p className="text-gray-900 leading-none">
                  {user.name + ' ' + user.surname}
                </p>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </div>

            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5 5a5 5 0 0 1 10 0v2A5 5 0 0 1 5 7V5zM0 16.68A19.9 19.9 0 0 1 10 14c3.64 0 7.06.97 10 2.68V20H0v-3.32z" />
              </svg>
              Gender: {user.gender}
            </p>
            <p className="text-sm text-gray-600 flex items-center">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M18 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h16zm-4.37 9.1L20 16v-2l-5.12-3.9L20 6V4l-10 8L0 4v2l5.12 4.1L0 14v2l6.37-4.9L10 14l3.63-2.9z" />
              </svg>
              Newsletter: {user.newsletter ? 'Yes' : 'No'}
            </p>

            <p className="text-sm text-gray-600 flex items-center mt-3">
              <svg
                className="fill-current text-gray-500 w-3 h-3 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M7 3H2v14h5V3zm2 0v14h9V3H9zM0 3c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3zm3 1h3v2H3V4zm0 3h3v2H3V7zm0 3h3v2H3v-2z" />
              </svg>
              Bio:
            </p>
            <p className="text-sm text-gray-600 flex items-center mt-0">
              {user.bio}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetail
