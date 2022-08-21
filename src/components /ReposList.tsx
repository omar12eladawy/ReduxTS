import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ActionCreators, AppDispatch } from '../state'
import { useSelector } from 'react-redux'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { useActions } from '../hooks/useActions'


const ReposList: React.FC = () => {
  const [term, setTerm] = useState('')
  const { SearchRepos } = useActions();
  const {data, error, loading}  = useTypedSelector((state) => state.repos)

const onSubmit=  (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault()

    SearchRepos(term)
}
  return (
    <div>
        <form onSubmit={onSubmit}>
            <input value={term} onChange={(e) => setTerm(e.target.value)}/>
        <button >Search</button>
        </form> 
        {error && <h3>{error}</h3>}
        {loading && <h3>loading</h3>}

        {!loading && !error && data}
    </div>
  )
}

export default ReposList