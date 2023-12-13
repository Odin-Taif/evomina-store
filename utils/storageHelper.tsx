// Import a module that ensures this code runs only on the client side, not during server-side rendering
import "client-only";

// Function to retrieve a value from local storage
export function getLocalStorage(key: string, defaultValue: any){
    // Attempt to retrieve the value from local storage
    const stickyValue = localStorage.getItem(key);

    // Parse the value from JSON, or return the default value if it doesn't exist
    return (stickyValue !== null && stickyValue !== 'undefined')
        ? JSON.parse(stickyValue)
        : defaultValue;
}

// Function to set a value in local storage
export function setLocalStorage(key: string, value: any){
    // Store the value in local storage, converting it to a JSON string
    localStorage.setItem(key, JSON.stringify(value));
}