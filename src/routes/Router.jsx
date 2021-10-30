import React from 'react'
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import LoginContainer from '../pages/LoginContainer'
import Restore from '../pages/RestorePassword/RestoreContainer'
import Email from '../pages/EmailRestore/EmailRestoreContainer'
import Dashboard from '../pages/Dashboard/DashboardContainer'
import Category from '../pages/Categories/CategoryContainer'
import Product from '../pages/Product/ProductContainer'

 const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact  component={LoginContainer}/>
                <Route path='/restore' exact  component={Restore}/>
                <Route path='/email' exact  component={Email}/> 
                <Route path='/dashboard' exact  component={Dashboard}/> 
                <Route path='/category' exact  component={Category}/>
                <Route path='/product:id' exact  component={Product}/>
            </Switch>
        </BrowserRouter>
    )
}
export default Router;