let React = require('react');
let UserSearch = require('./FindUser');


class App extends React.Component {
    render() {
        return(
            <div className="container">
                <h1>Loadup</h1>
                <UserSearch />
            </div>
        )
    }
}

module.exports = App;