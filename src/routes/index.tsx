import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home/home';
import Intro from 'pages/intro/intro';
import UserInfo from 'pages/userinfo/userinfo';
import GameContent from 'pages/gamecontent/gamecontent';
import Result from 'pages/result/result';
import PrivateRoute from './privateroute';
import Landing from 'pages/home/landing';
import Test from 'pages/test';
import HangmanStage from 'pages/gamecontent/hangmanStage';

function Routing(){
    return(
        <Switch>
              <Route exact path="/landing" component={Landing}/>
              <PrivateRoute exact path="/" component={Home}/>
              <PrivateRoute exact path="/intro" component={Intro}/>
              <PrivateRoute exact path="/userinfo" component={UserInfo}/>
              <PrivateRoute exact path="/gamecontent" component={GameContent}/>
              <PrivateRoute exact path="/result" component={Result}/>
              <Route exact path="/test" component={Test}/>
              <PrivateRoute exact path="/hangman-stage" component={HangmanStage}/>

        </Switch>
    )
}

export default Routing;