

interface SearchAction {
    type: 'search'
}

interface SuccessAction {
    type: 'success'
    payload: string[]
}

interface ErrorAction {
    type: 'error'
    payload: string
}

export type ActionInterfaces = SearchAction | SuccessAction | ErrorAction