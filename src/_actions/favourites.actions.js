import { userConstants } from '../_constants';
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
    return favouriteService.getByUsername(username);
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

    function request(id) { return { type: userConstants.DELETE_REQUEST, id } }
    function success(id) { return { type: userConstants.DELETE_SUCCESS, id } }
    function failure(id, error) { return { type: userConstants.DELETE_FAILURE, id, error } }
}