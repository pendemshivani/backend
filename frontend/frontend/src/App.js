import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Add from './components/adduser/Add';
import User from './components/getuser/User';
import Edit from './components/updateuser/Edit';
function App() { 
  const route=createBrowserRouter([
  {
    path:"/",
    element: <User/>
  },
  {
    path:"/add",
    element: <Add/>
  },
  {
    path:"/edit/:id",
    element: <Edit/>
  },
])
  return (
    <div className="App">
      <RouterProvider router={route}>
      </RouterProvider>
    </div>
  );
}

export default App;