import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userInfo: "Dummy",
            location: "Default",
            company: "Default",
            avatar_url: "null"
        }

        // console.log("Constructor called")
    }

    async componentDidMount() {
        // console.log("componentDidMount called")
        //Api call
        const data = await fetch("https://api.github.com/users/codealongME-Tech")
        const json = await data.json();
        this.setState(
            {
                userInfo: json,
            });

    }
    render() {


        const { name, location, company, avatar_url } = this.state.userInfo;
        // console.log("Render called")
        // debugger;
        return (

            <div className="card">
                <div className="user-card">
                    <img className="card-logo" src={avatar_url} alt="" />
                    <h2>Name: {name}</h2>
                    <h4>Location: {location}</h4>
                    <h4>Company: {company}</h4>
                    <h4>Contact: mehulyadav8299@gmail.com</h4>

                </div>
            </div>

        )
    }
}

export default UserClass;