const Profile = (props) => {
    <div>
        <img src="http://i.pravatar.cc/300" />
        <h1>{this.props.name} {this.props.surname}</h1>
        <p>Возраст: {this.props.age}</p>
        <p>Пол: {this.props.gender}</p>
        <p>О себе: {this.props.about}</p>
    </div>
}

export default Profile