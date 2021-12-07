import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {Dashboard} from '../pages/Dashboard/index'
import { Filmes } from '../pages/Filmes'
import {Repository} from '../pages/Repository/index'

export const Routes: React.FC = () => {
    return (
        <Switch>
            <Route component={Dashboard} path="/" exact/>
            <Route component={Repository} path="/repository"/>
            <Route component={Filmes} path="/filmes"/>
        </Switch>
    )
} 

