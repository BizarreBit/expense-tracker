import LogDisplay from "./component/LogDisplay";
import LogEdit from "./component/LogEdit";

function App() {
  return (
    <div className="container mw-md">
      <LogEdit />
      <LogDisplay />

      <footer className="text-white-50 text-center py-3 fs-7">
        Copyright © 2021 Flyinggiraffe. All rights reserved.
      </footer>
    </div>
  );
}

export default App;