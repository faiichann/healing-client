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
              <Route exact path="/intro" component={Intro}/>
              <Route exact path="/userinfo" component={UserInfo}/>
              <Route exact path="/gamecontent" component={GameContent}/>
              <Route exact path="/result" component={Result}/>
              <Route exact path="/test" component={Test}/>
              <Route exact path="/hangman-stage" component={HangmanStage}/>

        </Switch>
    )
}

export default Routing;