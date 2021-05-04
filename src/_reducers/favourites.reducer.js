import { favouritesConstants } from '../_constants';

export function favourites(state = {}, action) {
    switch (action.type) {
        case favouritesConstants.GETBYUSERNAME_REQUEST:
            return {
                loading: true
            };
        case favouritesConstants.GETBYUSERNAME_SUCCESS:
            return {
                items: action.favs
            };
        case favouritesConstants.GETBYUSERNAME_FAILURE:
            return {
                error: action.error
            };
        default:
            return state
    }
}