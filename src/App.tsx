// import { useCompanies } from "src/api/companies";

import { Feed } from "./components/Feed";

function App() {
  // const { isLoading, data } = useCompanies();

  return (
    <div>
      <h1>Good luck!</h1>

      <p>Here is an example of data we hold on a company</p>
      <Feed></Feed>
      {/* <pre>{!isLoading && JSON.stringify(data?.slice(0, 1), null, 2)}</pre> */}
    </div>
  );
}

export default App;
