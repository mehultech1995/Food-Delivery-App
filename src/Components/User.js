const User = ({name, Location, Email}) => {
    return (
        <div className="user-card">
            <h2>Name: {name}</h2>
            <h3>Location: {Location}</h3>
            <h4>Email: {Email}</h4>

        </div>
    )
}

export default User;