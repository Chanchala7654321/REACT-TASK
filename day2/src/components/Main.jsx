

function Main() {
    return (
        <main className='content'>
            <section className='hero'>
                <h2>Welcome to My React App</h2>
                <p>This is a simple React application to demonstrate the structure of a React component.</p>
                <p>Features of React</p>
            </section>
            <section className='features'>
                <p>
                    <ol>
                        <li>Component-Based: React allows you to build encapsulated components that manage their own state, then compose them to make complex UIs.</li>
                        <li>Declarative: React makes it easy to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</li>
                        <li>Learn Once, Write Anywhere: You can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.</li>
                    </ol>
                </p>
            </section>
        </main>
    )
}

export default Main