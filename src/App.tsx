// import { useCompanies } from "src/api/companies";

import { Feed } from "./components/Feed";
import { Header } from "./components/Header";

function App() {
  // const { isLoading, data } = useCompanies();

  return (
    <div>
      <h1>Good luck!</h1>

      <p>Here is an example of data we hold on a company</p>
      <Header></Header>
      <Feed></Feed>

      {/* <pre>{!isLoading && JSON.stringify(data?.slice(0, 1), null, 2)}</pre> */}
    </div>
  );
}

export default App;
