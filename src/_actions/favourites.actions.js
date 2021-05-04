import { favouritesConstants } from '../_constants';
import { favouriteService } from '../_services';
import { alertActions } from '.';
import { history } from '../_helpers';

export const favouritesActions = {
    addFavourite,
    getById,
    getByUsername,
    delete: _delete
};

function addFavourite(username, radioname) {
    return dispatch => {

        favouriteService.addFavourite(username, radioname)
            .then(
                favourite => { 
                    dispatch(alertActions.success('Favourite added successfully'));
                },
                error => {
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };
}

function getById(id) {
    return favouriteService.getById(id);
}

function getByUsername(username) {

      return dispatch => {
        dispatch(request());

        favouriteService.getByUsername(username)
            .then(
                favs => dispatch(success(favs)),
                error => dispatch(failure(error.toString()))
            );
    };

    function request() { return { type: favouritesConstants.GETBYUSERNAME_REQUEST } }
    function success(favs) { return { type: favouritesConstants.GETBYUSERNAME_SUCCESS, favs } }
    function failure(error) { return { type: favouritesConstants.GETBYUSERNAME_FAILURE, error } }
    
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));

        favouriteService.delete(id)
            .then(
                user => dispatch(success(id)),
                error => dispatch(failure(id, error.toString()))
            );
    };

    function request(id) { return { type: favouritesConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: favouritesConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: favouritesConstants.DELETE_FAILURE, id, error } }
}