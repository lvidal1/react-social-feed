
/**
 * Get persisted state from localStorage
 * 
 * @returns object state
 */
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

/**
 * Persist state into localstorage
 * 
 * @param {object} state 
 */
export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    } catch {
        console.log("Error persisting data")
    }
};