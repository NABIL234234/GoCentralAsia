import RouterView from './router';
import Layout from "./Layout/Layout.tsx";

const App = () => {
  return (

    <div>
     <Layout>
       <RouterView/>
     </Layout>
    </div>
  );
};

export default App;
