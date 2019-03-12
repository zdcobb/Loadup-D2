let React = require('react');
let api = require('../utils/Api');

let user = {};

function Searchbar (props) {
    function getString() {
        let string = document.getElementById('userSearchInput').innerHTML.toString();
        return string;
    }
    // add onClick event to button for firing search function
    return(
        <div className="control-group">
            <input type="text" id="userSearchInput" className="input"></input>
            <button className="btn">Search</button>
        </div>
    )
}

function UserList(props) {
    return(
        <div className="users-table">
            <ul className="users">
                {props.users.map(function(user, index) {
                    return (<li>{user}</li>)
                })}
            </ul>
        </div>
    )
}

class UserSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: []
        };
        this.findUsers = this.findUsers.bind(this);
    }
    findUsers(userString) {
        api.findMatchingUsers(userString).then((matches) => {
            this.setState({userList: matches});
        });
    }
    render() {
        return(
            <div class="users-comp">
                <Searchbar search={this.findUsers}/>
                <UserList users={this.state.userList} />
            </div>
        )
    }
};

module.exports = UserSearch;


// let val = document.querySelector('#userSearchInput').value.toString();
// let users = await searchUsers(val);
// console.log(users);

// let listElm = document.querySelector('#users');
// listElm.innerHTML = '';

// users.map((user) => {
//     let item = document.createElement('li');

//     if (user.blizzardDisplayName) {
//         let newSpan = document.createElement('span');
//         newSpan.classList = 'display-name';
//         newSpan.innerHTML = `Blizzard: ${user.blizzardDisplayName}`;
//         item.appendChild(newSpan);
//     }

//     if (user.psnDisplayName) {
//         let newSpan = document.createElement('span');
//         newSpan.classList = 'display-name';
//         newSpan.innerHTML = `Blizzard: ${user.psnDisplayName}`;
//         item.appendChild(newSpan);
//     }
    
//     if (user.xboxDisplayName) {
//         let newSpan = document.createElement('span');
//         newSpan.classList = 'display-name';
//         newSpan.innerHTML = `Blizzard: ${user.xboxDisplayName}`;
//         item.appendChild(newSpan);
//     }
    
//     listElm.appendChild(item);
// });
