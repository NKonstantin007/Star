import React from 'react';
import ItemList from '../item-list/item-list';
import withData  from '../../hoc-helper/with-data';
import withRenderItem from '../../hoc-helper/with-render-item';
import withSwapiService from '../../hoc-helper/with-swapi-service';
import compose from '../../hoc-helper/compose';

const renderName = ({ name }) => <span>{ name }</span>;
const renderNameAndModel = ({ name, model }) => <span>{ name } ({ model })</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = compose(withSwapiService(mapPersonMethodsToProps),
                           withData,
                           withRenderItem(renderName),
                          )(ItemList);

const PlanetList = compose(withSwapiService(mapPlanetMethodsToProps),
                           withData,
                           withRenderItem(renderName),
                          )(ItemList);

const StarshipList = compose(withSwapiService(mapStarshipMethodsToProps),
                             withData,
                             withRenderItem(renderNameAndModel),
                            )(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};