import './App.scss'
import Header from './Widgets/Header/Header'
import { RouterProvider } from './app/Provider/Provider';

const App = () => {
  return <>
    <Header />
    <RouterProvider />
  </>
};

export default App;
