import React from 'react'
import {TextField} from '@mui/material'

interface SearchProps {
  searchText: string
  onSearch: (value: React.ChangeEvent<HTMLInputElement>) => void
}

function Search({searchText, onSearch}: SearchProps) {
  return (
    <div className="w-auto">
      <TextField
        sx={{width: 1}}
        type="text"
        label="Search here..."
        value={searchText}
        variant={'outlined'}
        onChange={onSearch}
      />
    </div>
  )
}

export default Search
