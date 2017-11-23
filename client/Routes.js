import React from 'react'
import { Route } from 'react-router-dom'
import Home from '@/components/Home'

const Router = () => (
  <div>
    <Route path='/' component={Home} exact={true} />
    <Route path='/hi' component={()=>'Hi'} />
  </div>
)

export default Router