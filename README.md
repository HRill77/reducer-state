# Reducer vs State
Generally for `useReducer` you need to write more codes than `useState` but there are definitely benefits in doing so.

1. Handling of complicated logic
    - `useState` - handles it inside your component
    - `useReducer` - handles it outside your component
2. Other/Child components need to update your state
    - `useState` - needs to pass the `value` and the `setState` function.
    - `useReducer` - just need to pass the `dispatch`. Good thing here is that `dispatch` is always the same object in every re-render. If you use optimizations like `memo`, you will benefit from this.
3. Debugging
    - `useState` - hard to know where the state was set incorrectly. If you have a huge application with lots of `useState` and `complicated logic`, it is hard to tell where the issue occurs.
    - `useReducer` - just add a logging on the `reducer` function and you'll see quickly if the issue is on the `reducer logic`. Yes, you can create a `handler function` for `useState` to achieve the same effect but the fact that you created a `handler function`, why not use `useReducer` which is intended for that use case.
4. Testing
    - `useState` - all the testing should be on the component
    - `useReducer` - you can also test the reducer function separately to make sure it does what it is intended to do# Reducer vs State
Generally for `useReducer` you need to write more codes than `useState` but there are definitely benefits in doing so.

1. Handling of complicated logic
    - `useState` - handles it inside your component
    - `useReducer` - handles it outside your component
2. Other/Child components need to update your state
    - `useState` - needs to pass the `value` and the `setState` function.
    - `useReducer` - just need to pass the `dispatch`. Good thing here is that `dispatch` is always the same object in every re-render. If you use optimizations like `memo`, you will benefit from this.
3. Debugging
    - `useState` - hard to know where the state was set incorrectly. If you have a huge application with lots of `useState` and `complicated logic`, it is hard to tell where the issue occurs.
    - `useReducer` - just add a logging on the `reducer` function and you'll see quickly if the issue is on the `reducer logic`. Yes, you can create a `handler function` for `useState` to achieve the same effect but the fact that you created a `handler function`, why not use `useReducer` which is intended for that use case.
4. Testing
    - `useState` - all the testing should be on the component
    - `useReducer` - you can also test the reducer function separately to make sure it does what it is intended to do