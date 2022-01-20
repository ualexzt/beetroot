import React from 'react'

interface SearchProps{
  searchText: string
  onSearch: (value: React.ChangeEvent<HTMLInputElement>) => void
}

function Search({searchText, onSearch}: SearchProps) {
  return (
    <div className="input-group m-3 w-auto">
      <input
        className="form-control"
        type="text"
        placeholder="Search here..."
        value={searchText}
        onChange={onSearch}
      />
    </div>
  )
}

export default Search
