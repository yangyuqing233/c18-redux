import './App.css';
//别忘了npm i
function App() {
    const redux_ulr = 'https://redux.js.org/tutorials/essentials/part-1-overview-concepts'
  return (
    <div className="App">
      <h1>Redux intro</h1>
      <p>1. 3rd party library to manage global states</p>
      <p>2. React useContext(react) hook-set a global state</p>
      <p>3. example:amazon music store -web based player</p>
      <span>background</span>
      <p>There are many components/library (MUI) for react</p>
      <p>one of the library is for state management</p>
      <p>Redux is not specifically used to react(can be used in other frameworks such as Angular and Vue)</p>
      <span>Cores of redux: Store(states),actions,reducer</span>
        <p>workflow: <a href={redux_ulr}>https://redux.js.org/tutorials/essentials/part-1-overview-concepts</a></p>
        <p>action->state->view->actions...</p>
      <span>Creat react-redux project</span>
        <p>npx creat-react-app@latest project-name</p>
        <p>cd project-name, run: npm i redux</p>
        <p>run, npm i react-redux</p>
        <span>thunk--middleware</span>
        <a href={"https://www.npmjs.com/package/redux-thunk"}>https://www.npmjs.com/package/redux-thunk</a>
        <a href={"https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60"}>https://medium.com/fullstack-academy/thunks-in-redux-the-basics-85e538a3fe60</a>
        <p>npm i redux-thunk</p>
        <p>index.js import methods</p>
    </div>
  );
}

export default App;
