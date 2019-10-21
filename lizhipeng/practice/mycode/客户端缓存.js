
import React, {Component} from 'react';
import './App.css';
const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage='


// const list = [
//     {
//         title: 'React',
//         url: 'https://facebook.github.io/react/',
//         author: 'Jordan Walke',
//         num_comments: 3,
//         points: 4,
//         objectID: 0,
//         },
//     {
//         title: 'Redux',
//         url: 'https://github.com/reactjs/redux',
//         author: 'Dan Abramov, Andrew Clark',
//         num_comments: 2,
//         points: 5,
//         objectID: 1,
//         },
// ]


class App extends Component{
    constructor(props){
        super(props)

        this.state = {
            result: null,
            searchKey: '',
            searchTerm: DEFAULT_QUERY,
            };
        this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
        
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        this.onDismiss  = this.onDismiss.bind(this)
        this.onSearchChange = this.onSearchChange.bind(this)
        this.onSearchSubmit = this.onSearchSubmit.bind(this)
    }
    
    needsToSearchTopStories(searchTerm) {
        return !this.state.results[searchTerm];
        }
    
    setSearchTopStories(result) {
        const {hits, page} = result;
        const {searchKey, results} = this.state;
        const oldHits = results &&results[searchKey]
            ? results[searchKey].hits
            : [] ;

            const updatedHits = [
                ...oldHits,
                ...hits
            ];

            this.setState({
                results: {
                    ...results,
                    [searchKey]: { hits: updatedHits, page }
                }
            })
    }
 
    fetchSearchTopStories(searchTerm, page = 0) {
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${
            page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(e => e);
    }

    componentDidMount() {
        const { searchTerm } = this.state;
        this.setState({ searchKey: searchTerm });
        this.fetchSearchTopStories(searchTerm);
    }

    onDismiss(id) {
        const { searchKey, results } = this.state;
        const { hits, page } = results[searchKey];
        
        const isNotId = item=>item.objectID !== id;
        const updatedHits = hits.filter(isNotId);

        this.setState({
            results: {
                ...results,
                [searchKey]: { hits: updatedHits, page }
            }
        });
    }

    onSearchChange(event){
        this.setState({searchTerm: event.target.value});
    }

    onSearchSubmit(event){
        const{ searchTerm } = this.state;
        this.setState({ searchKey: searchTerm });

        if (this.needsToSearchTopStories(searchTerm)) {
            this.fetchSearchTopStories(searchTerm);
        }
        event.preventDefault();

        
    }


    render(){
        const { searchTerm, results,searchKey } = this.state;
        const page = (
                results &&
                results[searchKey] &&
                results[searchKey].page
            ) || 0;
        const list = (
            results &&
            results[searchKey] &&
            results[searchKey].hits
        ) || [];
        return(
            <div className="page">
                <div className='interactions'>
                    <Search 
                        value={searchTerm}
                        onChange={this.onSearchChange}
                        onSubmit={this.onSearchSubmit}
                    >
                        Search
                    </Search>
                </div>
                <div className="interactions">
                    <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
                        More
                    </Button>
                </div>
                <Table
                    list={list}
                    onDismiss={this.onDismiss}
                />
            </div>
        );
    }
}

const Search = ({ value, onChange, onSubmit,children}) =>
    <form onSubmit={onSubmit}>
        {children} <input
            type="text"
            value={value}
            onChange={onChange}
        />
        <button type = "submit">
            {children}
        </button>
    </form>

const Table = ({ list, onDismiss }) =>
    <div className = 'table'>
        {list.map(item =>
            <div key={item.objectID} className="table-row">
                <span style={{ width: '40%' }}>
                    <a href={item.url}>{item.title}</a>
                </span>
                <span style={{ width: '30%' }}>
                    {item.author}
                </span>
                <span style={{ width: '10%' }}>
                    {item.num_comments}
                </span>
                <span style={{ width: '10%' }}>
                    {item.points}
                </span>
                <span style={{ width: '10%' }}>
                    <Button
                        onClick={() => onDismiss(item.objectID)}
                        className="button-inline"
                    >
                        Dismiss
                    </Button>
                </span>
            </div>
        )}
    </div>


// class Search extends Component{
//     render() {
//         const { value, onChange, children } = this.props;

//         return(
//             <form>
//                 {children} <input
//                     type = 'text'
//                     value = {value}
//                     onChange = {onChange}
//                 >
                    
//                 </input>
//             </form>
//         )
//     }
// }

// class Table extends Component {
//     render() {
//         const { list, pattern, onDismiss } = this.props;
//         return (
//             <div>
//                 {list.filter(isSearched(pattern)).map(item =>
//                     <div key={item.objectID}>
//                          <span>
//                             <a href={item.url}>{item.title}</a>
//                         </span>
//                         <span>{item.author}</span>
//                         <span>{item.num_comments}</span>
//                         <span>{item.points}</span>
//                         <span>
//                         <Button onClick={() => onDismiss(item.objectID)}>
//                             Dismiss
//                         </Button>
//                         </span>
//                     </div>
//                 )}
//             </div>
//         );
//     }
// }

    class Button extends Component{
        render(){
            const{
                onClick,
                className = '',
                children,
            } = this.props;

            return(
                <button
                    onClick={onClick}
                    className={className}
                    type="button"
                >
                    {children}
                </button>
            )
        }
    }

export default App;

