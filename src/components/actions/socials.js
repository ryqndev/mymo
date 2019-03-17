export const updateUser = (selection) => {
    console.log("gets here");
    return {
        type: 'ADD',
        payload: selection
    }
}