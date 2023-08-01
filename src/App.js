import { medContext } from "./contexts/MedContext/medcontext";

import Home from "./pages/Home";

function App() {
  return (
    <medContext>
      <Home />
    </medContext>
  );
}

export default App;
