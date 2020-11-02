import React, { Suspense, lazy, useState, useCallback } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { pathComponent, routePaths } from './pathComponent';
import { navigateTo, redirectTo, openWindow, historyPush } from './historyPush';
import getHistory from './history';
const Routers = (props) => {
    const [updateRoute, setUpdateRoute] = useState(0);
    const cb = useCallback(() => {
        const unlisten = getHistory.listen((location, action) => {});
    }, []);

    return (
        <Router
            basename=""
            forceRefresh={false}
            history={getHistory}
            getUserConfirmation={() => {
                console.log('getUserConfirmation=');
            }}
        >
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    {pathComponent.map((item, index) => {
                        console.log('item=', item);
                        return (
                            <Route
                                key={index}
                                exact
                                nam={item.name}
                                path={item.path}
                                component={item.component}
                            />
                        );
                    })}
                </Switch>
            </Suspense>
        </Router>
    );
};

export default Routers;
export {
    navigateTo,
    redirectTo,
    openWindow,
    historyPush,
    getHistory,
    routePaths,
};
