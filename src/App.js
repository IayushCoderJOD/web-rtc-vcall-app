import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Lobby from './components/Lobby';
import VideoCallLobby from './components/VideoCallLobby';

function App() {
  const appRouter=createBrowserRouter([
    {
      path:"/",
      element:<Lobby />
    },{
      path:"/call",
      element:<VideoCallLobby />
    }
  ])
  return (
    <>
    <Header />
    <RouterProvider router={appRouter}/>
    </>
  );
}

export default App;
