import React from "react";
import Entry from "./Entry";
import emojipedia  from "../emojipedia";
function createEntry(Emo){
  return(
    <Entry 
    key={Emo.id}
    emoji={Emo.emoji}
    name={Emo.name}
    description={Emo.meaning}
    
    />
  );
}
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
         {emojipedia.map(createEntry)}
     </dl>
    </div>
  );
}

export default App;
