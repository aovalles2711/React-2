### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router? React Router is a Javascript framework that lets the developer handle client and server-side routing in React applications.

- What is a single page application? An SPA is a web app implementation that loads only a single web document and updates the body content via JavaScript APIs.

- What are some differences between client side and server side routing? Client-side routing involves JavaScript handling the routing process internally. Server-side versus client-side refers to the location where processes are carried out in the web application.

- What are two ways of handling redirects with React Router? When would you use each? Two ways of handling redirects include using the <Redirect> component which allows you to render based on changes to the local state of the component in question. The other way is by using the History API (history.push). This keeps track of session history. History works when the component is being rendered by React Router, bypassing the componenet as a Component prop to a Route.

- What are two different ways to handle page-not-found user experiences using React Router? You can use a Client-side Redirect which can be useful after certain user actios (e.g. submitting a form). This can include the <Redirect> component or calling .push method on the history object.

- How do you grab URL parameters from within a component using React Router? You can grab URL parameters from within a component by using hooks such as React's useEffect.

- What is context in React? When would you use it? Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered "global" for a tree of React components, such as the current authenticated user, theme, or preferred language.

- Describe some differences between class-based components and function components in React. A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element via JSX. A class component requires you to extend from React.

- What are some of the problems that hooks were designed to solve? React Hooks were added to solve wrappers, huge componenets and confusing classes.
