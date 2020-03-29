import React, { useState, useEffect } from 'react'; 
import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriendsForm = props => {
    const [friends, setFriends] = useState ([]);

    useEffect(() => {
        axiosWithAuth ()
            .get ('/friends')
            .then (res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))
    },[])


    const deleteFriend = (e, id) => {
        e.preventDefault();
        axiosWithAuth()
            .delete(`/friends/${id}`)
            .then(res => {
                setFriends(res.data)
            })
            .catch(err => console.log(err))

    }

    return (
        <div>
            <AddFriendsForm {}
            <div className='container'>
                {friends.map(friend => (
                    <div className='friends' key={friend.id}>
                        <h2>{friend.name}</h2>
                        <p>Age: {friend.age}</p>
                        <p>Email: {friend.email}</p>
                        <button>Edit</button>
                        <button onClick={e => deleteFriend(e, friend.id)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    )




}

export default FriendsList;