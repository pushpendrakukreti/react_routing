import React from "react";

const User = ({ match }) => {
    return (
        <div>
            <div>User's Page</div>
            <div>Hello, {match.params.username}</div>
        </div>
    )
}

export default User;