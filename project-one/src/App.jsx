import Header from "./header";
import Card from "./Card";
function App() {
  const items = [
    {
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript, the most popular programming language for web development."
    },
    {
      title: "Understanding Flexbox",
      description: "A deep dive into CSS Flexbox layout and how it can simplify your web designs."
    },
    {
      title: "React Components 101",
      description: "Discover how to build reusable UI components using the React framework."
    },
    {
      title: "REST API Explained",
      description: "Understand the principles behind RESTful APIs and how to use them in your applications."
    },
    {
      title: "Async/Await in JavaScript",
      description: "Learn how asynchronous programming works in JavaScript using async/await syntax."
    }
  ];

  return (
    <div>
      <Header />
      <h1>Hello World</h1>
      <h2>I am Hekkadka Tanmai</h2>
      <h2>2023 passout.</h2>
      {
        items.map((item) => {
          return <Card title={item.title} desp={item.description} />;
        })
      }
    </div>
  )
}

export default App;

