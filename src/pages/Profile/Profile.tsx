import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

const Profile: React.FC<{}> = () => {
  const { user } = useAuth0()

  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="m-8 relative w-full">
          <div className="flex">
            <div className="static flex-none">
              <img
                src={user?.picture}
                className="rounded-full w-36 h-36 p-1 ring-2 ring-rose-300"
              />
            </div>
            <div className="inline-block flex-auto p-4">
              <h2 className="text-3xl text-start">{user?.name}</h2>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Profile
