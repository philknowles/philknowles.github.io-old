app.config(function ($routeProvider) {
 
    $routeProvider
    
    .when('/bookart', {
        templateUrl: 'views/bookart.html',
    })
    
});

app.controller('headerController', ['$scope', function($scope) {
    $scope.appDetails = {
        title:"Bookart",
        tagline:"I have million books"
    }
}]);

app.controller('bookListController', ['$scope', '$http', function($scope,$http) {
    $scope.books = [
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        },
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        },
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        },
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        },
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        },
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        },
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        },
        {
            url:'http://2.bp.blogspot.com/-EYC26iVe44E/VC0870UTimI/AAAAAAAAGos/KV3rWZ6ckpA/s1600/Jack%2BHiggins.jpg',
            name:'The Last Place God Made',
            author:'Jack Higgins',
            details:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis turpis massa, auctor vitae elit nec, dictum porta velit. Donec et ultrices ante. Nunc malesuada dapibus sodales. Cras sit amet quam quis elit aliquam scelerisque. Cras varius ornare elit in mollis. Nullam cursus eros vitae diam volutpat, et scelerisque dolor dapibus. Maecenas et est ut risus lacinia hendrerit vitae at massa. Fusce vel nulla auctor, egestas lacus nec, fermentum purus.'
        }
    ];
    
    $scope.addToKart = function(book) {
        console.log('add to kart', book);
    }
}])