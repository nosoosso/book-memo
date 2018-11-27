import React from 'react'
import {Redirect} from 'react-router-dom'

import {url} from "../../../conf/url/url";

export const Index = () => (
  <Redirect to={url.main.path}/>
)