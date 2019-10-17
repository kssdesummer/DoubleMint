import React, {Component} from 'react';

function isSearched(searchTearm){
    return function(item){
        // some condition which returns true or false
        return item.title.toLowerCase().includes(searchTearm.toLocalCase());
    }
}

class App extends Component {
    constructor(props) {
        super (props);

        this.state = {
            list,
            searchTerm = '',
        }

        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event){
        this.setState({searchTerm: event.target.value});
    }

    render (){
        return (
            <div className="App">
                <form>
                    <input type = 'text' 
                    onChange= {this.onSearchChange}
                    />        
                </form>
                {this.state.list.filter(isSearched(this.state.searchTerm)).map(item =>{} )}
            </div>
        )

    }
}

export default App;