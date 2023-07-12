import useOnInit from "./hooks/useOnInit";
import githubModify from "./pageModifies/github";

function App() {
    useOnInit(() => githubModify());
  return <></>;
}

export default App;
