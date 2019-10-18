
import React, {Component} from 'react';

const list = [
    {
        title: 'React',
        url: 'https://facebook.github.io/react/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
        },
]

const isSearched = searchTerm => item =>
item.title.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            list,
            searchTerm: '',
            };

        this.onDismiss  = this.onDismiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
    }
    
    onDismiss(id) {
        const isNotId = item=>item.objectID !== id;
        const updatedList = this.state.list.filter(isNotId)

        this.setState({list:updatedList});
    }

    onSearchChange(event){
        this.setState({searchTerm: event.target.value});
    }


    render(){
        const {searchTerm, list} = this.state;
        return(
            <div className="App">
                    <Search 
                        value={searchTerm}
                        onChange={this.onSearchChange}
                    >
                        Search
                    </Search>
                    <Table 
                        list = {list}
                        pattern = {searchTerm}
                        onDismiss = {this.onDismiss}
                    />
                <form>
                    <input type = 'text'
                    value = {searchTerm}
                    onChange={this.onSearchChange}
                    />
                </form>
                {list.filter(isSearched(this.state.searchTerm)).map(item =>
                    <div key={item.objectID}>
                    <span>
                        <a href={item.url}>{item.title}</a>
                    </span>
                    <span>{item.author}</span>
                    <span>{item.num_comments}</span>
                    <span>{item.points}</span>
                    <span>
                        <button
                            onClick={() => this.onDismiss(item.objectID)}
                            type = 'button'
                        >
                            Dismiss                         
                        </button>
                    </span>
                    </div>
                    )}
            </div>
        );
    }
}

class Search extends Component{
    render() {
        const { value, onChange, children } = this.props;

        return(
            <form>
                {children} <input
                    type = 'text'
                    value = {value}
                    onChange = {onChange}
                >
                    
                </input>
            </form>
        )
    }
}

class Table extends Component {
    render() {
    const { list, pattern, onDismiss } = this.props;
    return (
    <div>
    {list.filter(isSearched(pattern)).map(item =>
    <div key={item.objectID}>
    <span>
    <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
    <span>
    <button
    onClick={() => onDismiss(item.objectID)}
    type="button"
    >
    Dismiss
    </button>
    </span>
    </div>
    )}
    </div>
    );
    }
    }

export default App;

