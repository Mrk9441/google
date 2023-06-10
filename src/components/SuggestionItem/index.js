// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button
        type="button"
        className="arrow-button"
        onChange={onClickSuggestion}
      >
        <img
          className="arrow"
          alt="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
        />
      </button>
    </li>
  )
}

export default SuggestionItem
