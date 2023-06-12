export const ItemReducer = (state, action) => {
    switch(action.type){
        case 'SET_ITEMS':
            return {
                items: action.payload
            }
        case 'ADD_ITEM':
            return {
                items: [...state.items, action.payload]
            }
        case 'DELETE_ITEM':
            return {
                items: state.items.filter(val => val._id !== action.payload)
            }
        case 'UPGRADE_TIER':
            return {
                items: state.items.map(val => { return val._id === action.payload._id ? action.payload : val })
            }
        case 'DOWNGRADE_TIER':
            return {
                items: state.items.map(val => { return val._id === action.payload._id ? action.payload : val })
            }
        default:
            return state
    }
}