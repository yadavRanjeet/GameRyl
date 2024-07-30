import "./App.css";
import { createBrowserRouter, Outlet } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Header from "./components/Header";
import Body from "./components/Body";
import { LeaderBoard } from "./pages/LeaderBoard";
import { MyMatches } from "./pages/MyMatches";
import { Pricing } from "./pages/Pricing";
import Footer from "./components/Footer";
import { PayNow } from "./pages/PayNow";
import { WithdrawMoney } from "./pages/WithdrawMoney";
import GamePage from "./pages/GamePage";
import { AccountInfo } from "./pages/AccountInfo";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/mymatches",
        element: <MyMatches />,
      },
      {
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/pricing",
        element: <Pricing />,
      },
      {
        path: "/payNow",
        element: <PayNow />,
      },
      {
        path: "/withdraw",
        element: <WithdrawMoney />,
      },
      {
        path: "/gameinfo",
        element: <GamePage />,
      },
      {
        path: "/account",
        element: <AccountInfo />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function App() {
  return <div className="App">{appRouter}</div>;
}

export default App;
