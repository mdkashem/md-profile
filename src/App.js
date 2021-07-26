import logo from './logo.svg';
import './App.css';
import {Route}from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

function App() {
  return (
    <div className="container">
    <Route
        path="/"
        component={HomeComponent}
        exact
    />
    <Route
        path="/dashboard"
        component={DashboardComponent}
    />
</div>
  );
}

export default App;
