import "../DocsContent/DocsContent.css";
import "../DataManage/DataManage.css";
const GettingStarted = () => {
  return (
    <div className="Docs-Main-container">
      <div className="docs-Content-container">
        <h1>Getting Started Page </h1>
        <p className="light-colored-paragraph">
          This page is an overview of the React documentation and related
          resources.
        </p>
        <p>
          React is a JavaScript library for building user interfaces. Learn what
          React is all about on our homepage or in the tutorial.
        </p>
        <hr/>
        <ul>
          <li>
            <span>Try React</span>
          </li>
          <li>
            <span>Learn React</span>
          </li>
          <li>
            <span>Staying Informed</span>
          </li>
          <li>
            <span>Versioned Documentation</span>
          </li>
          <li>
            <span>Something Missing?</span>
          </li>
        </ul>
        <hr/>
      </div>
      
    </div>
  );
};

export default GettingStarted;
