// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  updateSearchInput = value => {
    this.setState({searchInput: value})
  }

  onChangeSearchInput = e => {
    this.setState({searchInput: e.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {SuggestionList} = this.props
    const searchResult = SuggestionList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <div className="google">
          <img
            className="img"
            alt="search-icon"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          />
          <div>
            <div>
              <img
                className="search-icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
                alt="search icon"
              />
              <input
                value={searchInput}
                onChange={this.onChangeSearchInput}
                type="text"
                className="int"
              />
            </div>
            <ul>
              {searchResult.map(each => (
                <SuggestionItem
                  key={each.id}
                  suggestionDetails={each}
                  updateSearchInput={this.updateSearchInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
