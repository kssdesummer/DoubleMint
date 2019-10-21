import React, { Component } from 'react';
import './App.css';
import {sortBy} from 'lodash';
import classNames from 'classnames'
const DEFAULT_QUERY = "eee";
const DEFAULT_HPP = "100";

const PATH_BASE = 'http://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';
// const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}`;
// const isSearched = (searchTerm) => (item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase());

const SORTS = {
    NONE: list => list,
    TITLE: list => sortBy(list, 'title'),
    AUTHOR: list => sortBy(list, 'author'),
    COMMENTS: list => sortBy(list, 'num_comments').reverse(),
    POINTS: list => sortBy(list, 'points').reverse(),

};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results:null,
            searchKey :'',
            searchTerm: DEFAULT_QUERY,
            error: null,
            isLoding: false,

        };
        this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
        this.setSearchTopStories = this.setSearchTopStories.bind(this);
        this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onSearchSubmit = this.onSearchSubmit.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
        // this.onSort = this.onSort.bind(this);
    }


    needsToSearchTopStories(searchTerm){
        return !this.state.results[searchTerm];
    }
    onSearchSubmit(event) {
        const { searchTerm } = this.state;
        // console.log("submit: "+searchTerm)
        this.setState({ searchKey: searchTerm});
        if (this.needsToSearchTopStories(searchTerm)){

            this.fetchSearchTopStories(searchTerm);
        }
        event.preventDefault();
    }

    setSearchTopStories(result) {
        // console.log("set :"+result.hits)
        const {
            hits,
            page
        } = result;
        const {
            searchKey,
            results
        } = this.state;
        const oldHits = results && results[searchKey]
            ? results[searchKey].hits
            : [];


        const updatedHits = [
            ...oldHits,
            ...hits
        ];



        this.setState(prevState =>{
            const { searchKey, results } = prevState;
            const oldHits = results && results[searchKey]
                ? results[searchKey].hits
                : [];
            const updatedHits = [
                ...oldHits,
                ...hits
            ];
            return {
                results: {
                    ...results,
                    [searchKey]: { hits: updatedHits, page }
                },
                isLoading: false
            };
        });
    }

    fetchSearchTopStories(searchTerm,page = 0){
        // if(url === `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`){
        //     console.log("quniniangdedan")
        // }
        // console.log(url)
        // console.log(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
        this.setState({ isLoading:true});
        fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
            .then(response => response.json())
            .then(result => this.setSearchTopStories(result))
            .catch(e => this.setState({error: e}));
    }
    componentDidMount() {
        const {searchTerm} = this.state;
        this.setState({ searchKey: searchTerm});
        this.fetchSearchTopStories(searchTerm);
    }


    onSearchChange(event){
        this.setState({searchTerm: event.target.value});
    }
    onDismiss(id) {
        const {
            results,
            searchKey
        } = this.state;
        const {
            hits,
            page
        } = results[searchKey];
        const isNotId = (item) => item.objectID !== id;
        const updateHits = hits.filter(isNotId);
        this.setState({

            results:{
                ...results,
                [searchKey]: {
                    hits: updateHits,
                    page
                }
            }
            });
    }


    render() {
        const {
            searchTerm,
            results,
            searchKey,
            error,
            isLoading,

        } = this.state;
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
        // console.log("render : "+result)
        // if(!results){
        //     return null;
        // }

        return (
            <div className="page">
                <div className="interactions">
                <Search
                    value={searchTerm}
                    onChange={this.onSearchChange}
                    onSubmit={this.onSearchSubmit}
                >
                    Search
                </Search>
                </div>
                {
                    error
                        ? <div className="interactions">
                            <p>Something went wrong.</p>
                        </div>
                        : <Table
                            list={list}
                            // sortKey={sortKey}
                            // onSort={this.onSort}
                            // isSortReverse={isSortReverse}
                            onDismiss={this.onDismiss}
                        />
                }
                <div className='interactions'>
                    <ButtonWithLoading
                        isLoading={isLoading}
                        onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
                        More
                    </ButtonWithLoading>
                </div>

            </div>
    );
    }
}



class Search extends Component{
    componentDidMount(){
        if(this.input){
            this.input.focus();
        }
    }
    render(){
        const {
            value,
            onChange,
            onSubmit,
            children
        } = this.props;
        return (
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={onChange}
                    ref={(node) => {this.input = node;}}
                />
                <button type="submit">
                    {children}
                </button>
            </form>
        )
    }
}



class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortKey: 'NONE',
            isSortReverse: false,
        };
        this.onSort = this.onSort.bind(this);
    }

    onSort(sortKey) {
        const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse;
        this.setState({ sortKey, isSortReverse });
    }

    render() {
        const {
            list,
            onDismiss
        } = this.props;
        const {
            sortKey,
            isSortReverse,
        } = this.state;
        const sortedList = SORTS[sortKey](list);
        const reverseSortedList = isSortReverse
            ? sortedList.reverse()
            : sortedList;
        return (
            <div className="table">
                <div className="table-header">
                    <span style={{width: '40%'}}>
                        <Sort
                            sortKey={'TITLE'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                           Title
                        </Sort>
                    </span>
                    <span style={{width: '30%'}}>
                        <Sort
                            sortKey={'AUTHOR'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                           Author
                        </Sort>
                    </span>
                    <span style={{width: '10%'}}>
                        <Sort
                            sortKey={'COMMENTS'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                            Comments
                        </Sort>
                    </span>
                    <span style={{width: '10%'}}>
                        <Sort
                            sortKey={'POINTS'}
                            onSort={this.onSort}
                            activeSortKey={sortKey}
                        >
                            Points
                        </Sort>
                    </span>
                    <span style={{width: '10%'}}>
                         Archive
                    </span>
                </div>

                {reverseSortedList.map(item =>
                    <div key={item.objectID} className="table-row">
                        <span style={{width: '40%'}}>
                            <a href={item.url}>{item.title}</a>
                        </span>
                        <span style={{width: '30%'}}>
                            {item.author}
                        </span>
                        <span style={{width: '10%'}}>
                            {item.num_comments}
                        </span>
                        <span style={{width: '10%'}}>
                            {item.points}
                        </span>
                        <span style={{width: '10%'}}>
                            <Button onClick={() => onDismiss(item.objectID)}
                                    className="button-inline"
                            >
                                Dismiss
                            </Button>
                        </span>
                    </div>
                )}
            </div>
        );
    }
}


const Button = ({onClick,className = "",children}) =>
    <button
        onClick={onClick}
        className={className}
        type="button"
    >
        {children}
    </button>

const Loading = () =>
    <div>Loading ...</div>

const withLoading = (Component) => ({ isLoading, ...rest }) =>
    isLoading
        ? <Loading />
        : <Component { ...rest } />
const ButtonWithLoading = withLoading(Button);

const Sort = ({
      sortKey,
      activeSortKey,
      onSort,
      children
}) => {
    const sortClass = classNames(
        'button-inline',
        { 'button-active': sortKey === activeSortKey }
    );
    return (
        <Button
            onClick={() => onSort(sortKey)}
            className={sortClass}
        >
            {children}
        </Button>
    );
}
export default App;
