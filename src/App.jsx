
import { CORE_CONCEPTS } from "./data.js";
import  Header  from './components/Header.jsx'; 
import CoreConcepts from "./components/coreconcepts.jsx";
import TabButton from "./components/TabButton.jsx"; 
import { useState } from "react"; 
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState(); 

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton.toLowerCase()); 
    console.log("Clicked:", selectedButton);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"> 
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} img={CORE_CONCEPTS[0].image}/>
            <CoreConcepts title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} img={CORE_CONCEPTS[1].image}/>
            <CoreConcepts title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} img={CORE_CONCEPTS[2].image} />
            <CoreConcepts {...CORE_CONCEPTS[3]}img={CORE_CONCEPTS[3].image} />
          </ul>
        </section> 
        <h2>Time to get started!</h2>
        <section id="examples"> 
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() =>handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() =>handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() =>handleSelect("state")}>State</TabButton>
          </menu>
            {!selectedTopic && <p>Please select a topic.</p>}
          {selectedTopic && <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
          </section> 
      </main>
    </div>
  );
}

export default App;