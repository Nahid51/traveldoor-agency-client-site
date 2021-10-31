import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import OrderReview from './Pages/PlaceOrder/OrderReview';
import NotFound from './Pages/NotFound/NotFound';
import OrderComplete from './Pages/OrderComplete/OrderComplete';
import AuthProvider from './Context/AuthProvider';
import Login from './Pages/Login/Login';
import PrivateRoute from './Redirect/PrivateRoute';
import AllUsers from './Pages/AllUsers/AllUsers';
import Cart from './Pages/Cart/Cart';
import SingleUser from './Pages/SingleUser.js/SingleUser';
import Locations from './Pages/Locations/Locations';
import Places from './Pages/Places/Places'

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/locations">
              <Locations></Locations>
            </Route>
            <Route path="/destinations">
              <Places></Places>
            </Route>
            <PrivateRoute path="/orderReview/:orderId">
              <OrderReview></OrderReview>
            </PrivateRoute>
            <Route path="/orderComplete">
              <OrderComplete></OrderComplete>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/cart">
              <Cart></Cart>
            </Route>
            <Route path="/allUsers">
              <AllUsers></AllUsers>
            </Route>
            <Route path="/singleUser/:id">
              <SingleUser></SingleUser>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
