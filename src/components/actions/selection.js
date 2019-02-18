export const updateSelection = (selection) => {
    return {
        type: 'UPDATE',
        payload: selection
    }
}
export const deleteSelection = (entry) => {
    return {
        type: 'DELETE',
        payload: entry
    }
}