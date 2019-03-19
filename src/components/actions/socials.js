export const updateUser = (selection) => {
    return {
        type: 'ADD',
        payload: selection
    }
}
export const setupPlan = (plan) => {
    return {
        type: 'ADD',
        payload: plan
    }
}