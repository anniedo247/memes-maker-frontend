import AlertMsg from 'components/AlertMsg';
import PublicNavBar from 'components/PublicNavBar'
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import GalleryPage from 'containers/GalleryPage';
import CreateMemePage from 'containers/CreateMemePage';
import NotFoundPage from 'components/NotFoundPage';


const Routes = () => {
  return (
    <div>
      <PublicNavBar/>
      <AlertMsg/>
      <Switch>
        <Route exact path = "/" component={GalleryPage}/>
        <Route exact path = "/memes/add" component={CreateMemePage}/>
        <Route component = {NotFoundPage}/>
      </Switch>
    </div>
  )
}

export default Routes
