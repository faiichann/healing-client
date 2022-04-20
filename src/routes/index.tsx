import { Switch, Route } from 'react-router-dom';
import Home from 'pages/home/home';
import Intro from 'pages/intro/intro';
import UserInfo from 'pages/userinfo/userinfo';
import GameContent from 'pages/gamecontent/gamecontent';
import Result from 'pages/result/result';
import PrivateRoute from './privateroute';
import Test from 'pages/test';
import HangmanStage from 'pages/gamecontent/hangmanStage';
import Gallery from 'pages/gallery/gallery';

function Routing(){
    return(
        <Switch>
              <Route exact path="/" component={Home}/>
              <PrivateRoute exact path="/gallery" component={Gallery}/>
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