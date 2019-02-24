angular.module('hackathon').filter('getPrettyBuildingStatus', function () {
    return function(status) {
        if (!status) {
            return null;
        }
        switch (status) {
            case 'ACTIVE':
                return 'Active';
            case 'INACTIVE':
                return 'Inactive';
            case 'DELETED':
                return 'Deleted';
            default:
                throw new Error('Unexpected building status: ' + status);
        }
    };
});
