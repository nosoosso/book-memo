import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import {url} from "../../conf/url/url";
import {Index} from "../routes/Index/Index";
import {Main} from "../routes/Main/Main";

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path={url.index.path} component={Index} exact strict/>
      <Route path={url.main.path} component={Main} exact strict/>
    </Switch>
  </BrowserRouter>
)