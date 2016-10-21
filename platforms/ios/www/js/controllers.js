angular.module('strata.controllers', [])

  .controller('LoginController', function ($scope, $state) {
    $scope.signIn = function (user) {
      console.log('Sign-In', user);
      $state.go('tabs.groups');
    };
  })

  .controller('GroupsController', function ($scope, $ionicModal, Modal, $http) {
    $scope.API = 'https://green-space-backend.herokuapp.com/groups';

    $scope.groups           = [];
    $scope.groupName        = '';
    $scope.groupDescription = '';

    $http({
      method : 'GET',
      url    : $scope.API
    }).then(function successCallback(response) {
      var data = response.data;

      for ( var i = 0, l = data.length; i < l; i++ ) {
        $scope.groups.push({
          'id'          : data[i].id,
          'type'        : data[i].type,
          'name'        : data[i].name,
          'description' : data[i].description
        });
      }
    });

    $scope.createGroup = function() {
      var name        = $scope.groupName,
          description = $scope.groupDescription;

      $http({
        method : 'POST',
        url    : $scope.API,
        data: {
          name        : name,
          description : description
        }
      }).then(function successCallback(response) {
        var data = response.data;

        for ( var i = 0, l = data.length; i < l; i++ ) {
          $scope.groups.push({
            'id'          : data[i].id,
            'type'        : data[i].type,
            'name'        : data[i].name,
            'description' : data[i].description
          });
        }
      });
    };

    Modal.all($scope, $ionicModal, 'templates/create-group.html');
  })

  .controller('LostFoundController', function ($scope, $http) {
    $scope.API = 'https://green-space-backend.herokuapp.com/lost_and_found';

    $scope.posts = [];

    $http({
      method : 'GET',
      url    : $scope.API
    }).then(function successCallback(response) {
      var data = response.data;

      /* for ( var i = 0, l = data.length; i < l; i++ ) {
        $scope.posts.push({
          'id'          : data[i].id,
          'type'        : data[i].type,
          'name'        : data[i].name,
          'description' : data[i].description
        });
      } */
    });

   /*  $scope.createGroup = function(name, description) {
      var data = {
        'name'        : name,
        'description' : description
      };

      $http.post($scope.API, data).then(
        function successCallback(response) {
          console.log(JSON.stringify(response));
        }, function errorCallback(response) {
          console.log(JSON.stringify(response));
        });
    }; */

    // Modal.all($scope, $ionicModal, 'templates/create-group.html');
  })

  .controller('PublicNoticesController', function ($scope, $http) {
    $scope.API = 'https://green-space-backend.herokuapp.com/public_notices';

    $scope.posts = [];

    $http({
      method : 'GET',
      url    : $scope.API
    }).then(function successCallback(response) {
      var data = response.data;

      /* for ( var i = 0, l = data.length; i < l; i++ ) {
        $scope.posts.push({
          'id'          : data[i].id,
          'type'        : data[i].type,
          'name'        : data[i].name,
          'description' : data[i].description
        });
      } */
    });

   /*  $scope.createGroup = function(name, description) {
      var data = {
        'name'        : name,
        'description' : description
      };

      $http.post($scope.API, data).then(
        function successCallback(response) {
          console.log(JSON.stringify(response));
        }, function errorCallback(response) {
          console.log(JSON.stringify(response));
        });
    }; */

    // Modal.all($scope, $ionicModal, 'templates/create-group.html');
  })

  .controller('PublicSpaceBookingController', function ($scope, $http) {
    $scope.API = 'https://green-space-backend.herokuapp.com/public_notices';

    $scope.posts = [];

    $http({
      method : 'GET',
      url    : $scope.API
    }).then(function successCallback(response) {
      var data = response.data;

      /* for ( var i = 0, l = data.length; i < l; i++ ) {
        $scope.posts.push({
          'id'          : data[i].id,
          'type'        : data[i].type,
          'name'        : data[i].name,
          'description' : data[i].description
        });
      } */
    });

   /*  $scope.createGroup = function(name, description) {
      var data = {
        'name'        : name,
        'description' : description
      };

      $http.post($scope.API, data).then(
        function successCallback(response) {
          console.log(JSON.stringify(response));
        }, function errorCallback(response) {
          console.log(JSON.stringify(response));
        });
    }; */

    // Modal.all($scope, $ionicModal, 'templates/create-group.html');
  })

  .controller('PostsController', function ($scope, $ionicModal, $stateParams, $http, Modal) {
    $scope.API = 'https://green-space-backend.herokuapp.com/groups';
    $scope.groupid = $stateParams.groupID;
    $scope.title = "Hello";
    $scope.description = "Lorem ipsum dolor sit amet, torquent cubilia amet, aliquam in eget tristique venenatis ligula, turpis pharetra a eget, velit inceptos nibh.";

    $http({
      method : 'GET',
      url    : $scope.API
    }).then(function successCallback(response) {
      var data = response.data;

      for ( var i = 0, l = data.length; i < l; i++ ) {
        $scope.groups.push({
          'id'          : data[i].id,
          'type'        : data[i].type,
          'name'        : data[i].name,
          'description' : data[i].description
        });
      }
    });

    $scope.groups = [
      {
        id: 1, title: 'Lost and found', description: 'Lorem ipsum dolor sit amet', posts: [
        {
          id: 1,
          avatar: './img/avatars/fernando.jpg',
          firstname: 'Fernando',
          lastname: 'Garcia',
          message: '',
          comments: []
        },
        {id: 2, avatar: '/img/avatars/mike.jpg', firstname: 'Mike', lastname: 'Garcia', message: '', comments: []},
        {
          id: 3,
          avatar: './img/avatars/pablo.jpg',
          firstname: 'Pablo Henrique',
          lastname: 'Silva',
          message: '',
          comments: []
        },
        {id: 4, avatar: '/img/avatars/tiago.jpg', firstname: 'Tiago', lastname: 'Martins', message: '', comments: []},
        {
          id: 5,
          avatar: './img/avatars/vilaboim.jpg',
          firstname: 'Lucas',
          lastname: 'Vilaboim',
          message: '',
          comments: []
        }
      ]
      }
    ];

    Modal.all($scope, $ionicModal, 'templates/create-post.html');
  })

  .controller('CommentsController', function ($scope, $ionicModal, $stateParams, Modal) {

    $scope.commentid = $stateParams.commentID;

    console.log($scope.groupid);

  })

  .controller('ChatsController', function ($scope, $http) {
    $scope.API = 'https://green-space-backend.herokuapp.com/users';
    $scope.users = [];

    $http({
      method : 'GET',
      url    : $scope.API
    }).then(function successCallback(response) {
      var data = response.data;

      for ( var i = 0, l = data.length; i < l; i++ ) {
        $scope.users.push(
          {
            'id': data[i].id,
            'name': data[i].name.split(' ')[0],
            'lastName': data[i].name.split(' ')[1],
            'telephone': '555-5555',
            'apartment': '303 D',
            'avatar': 'http://lorempixel.com/40/40/people/' + data[i].id
          }
        );
      }
    });
  })

  .controller('ChatController', function ($scope, $stateParams, $http) {
    $scope.API = 'https://green-space-backend.herokuapp.com/users/';
    $scope.id  = $stateParams.chatID;

    $scope.messages = [
      {
        'id': 1,
        'name': 'Lucas',
        'lastName': 'Vilaboim',
        'text': 'Hey, what\'s up?',
        'avatar': 'http://lorempixel.com/40/40/people/' + $scope.id,
        'sender': 0
      },
      {
        'id'       : 2,
        'name'     : 'Fernando',
        'lastName' : 'Garcia',
        'text'     : 'Not much. Do you feel like going out tonight?',
        'avatar'   : '/img/avatars/mike.jpg',
        'sender'   : 1
      },
      {
        'id'       : 3,
        'name'     : 'Lucas',
        'lastName' : 'Vilaboim',
        'text'     : 'Hell yeah! Where are we going?',
        'avatar': 'http://lorempixel.com/40/40/people/' + $scope.id,
        'sender'   : 0
      },
      {
        'id'       : 4,
        'name'     : 'Fernando',
        'lastName' : 'Garcia',
        'text'     : 'I\'ll call up the squad and we\'re going bowling',
        'avatar'   : '/img/avatars/mike.jpg',
        'sender'   : 1
      },
      {
        'id'       : 5,
        'name'     : 'Lucas',
        'lastName' : 'Vilaboim',
        'text'     : 'Nah I can\'t go. My wrist is hurting.',
        'avatar': 'http://lorempixel.com/40/40/people/' + $scope.id,
        'sender'   : 0
      }
    ];
  })

  .controller('ServicesController', function ($scope) {
    $scope.isCollapsed = 1;

    $scope.services = [
      {
        'id'     : 1,
        'name'   : 'Groceries',
        'show'   : false,
        'stores' : [
          {
            'id': 1,
            'name': 'Best Buy Canada',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 2,
            'name': 'Real Canadian Superstore',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 3,
            'name': 'No Frils',
            'description': 'Lorem ipsum dolor sit amet'
          }
        ]
      },
      {
        'id'     : 2,
        'name'   : 'Transport',
        'show'   : false,
        'stores' : [
          {
            'id': 1,
            'name': 'Best Buy Canada',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 2,
            'name': 'Real Canadian Superstore',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 3,
            'name': 'No Frils',
            'description': 'Lorem ipsum dolor sit amet'
          }
        ]
      },
      {
        'id'     : 2,
        'name'   : 'Gardening',
        'show'   : false,
        'stores' : [
          {
            'id': 1,
            'name': 'Best Buy Canada',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 2,
            'name': 'Real Canadian Superstore',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 3,
            'name': 'No Frils',
            'description': 'Lorem ipsum dolor sit amet'
          }
        ]
      },
      {
        'id'     : 2,
        'name'   : 'Cleaning',
        'show'   : false,
        'stores' : [
          {
            'id': 1,
            'name': 'Best Buy Canada',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 2,
            'name': 'Real Canadian Superstore',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 3,
            'name': 'No Frils',
            'description': 'Lorem ipsum dolor sit amet'
          }
        ]
      },
      {
        'id'     : 2,
        'name'   : 'Security',
        'show'   : false,
        'stores' : [
          {
            'id': 1,
            'name': 'Best Buy Canada',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 2,
            'name': 'Real Canadian Superstore',
            'description': 'Lorem ipsum dolor sit amet'
          },
          {
            'id': 3,
            'name': 'No Frils',
            'description': 'Lorem ipsum dolor sit amet'
          }
        ]
      }
    ];

    $scope.toggleService = function (service) {
      service.show = !service.show;
    };

    $scope.isServiceShown = function (service) {
      return service.show;
    };
  })

  .controller('ServiceController', function ($scope) {
    $scope.stores = [
      {
        'id'          : 1,
        'name'        : 'Best Buy Canada',
        'description' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      }]
  })

  .controller('MaintenanceRequestsController', function ($scope, $ionicModal, $stateParams, Modal) {

    $scope.maintenances = [
      {id: 1, 'title': 'Fix light bulb', 'description': 'Lorem ipsum dolor sit amet'},
      {id: 2, 'title': 'Replace fire extinguisher', 'description': 'Lorem ipsum dolor sit amet'},
      {id: 3, 'title': 'Short circuit', 'description': 'Lorem ipsum dolor sit amet'},
      {id: 4, 'title': 'Noisy dryer', 'description': 'Lorem ipsum dolor sit amet'},
      {id: 5, 'title': 'Plumming', 'description': 'Lorem ipsum dolor sit amet'},
      {id: 6, 'title': 'Intercom not buzzing', 'description': 'Lorem ipsum dolor sit amet'},
      {id: 7, 'title': 'Sink leaking', 'description': 'Lorem ipsum dolor sit amet'}
    ];

    Modal.all($scope, $ionicModal, 'templates/create-maintenance-request.html');

  })

  .controller('MaintenanceRequestController', function ($scope, $stateParams) {

    $scope.groupid = $stateParams.maintenanceID;
    $scope.messages = [
      {
        'id': 1,
        'name': 'Lucas',
        'lastName': 'Vilaboim',
        'text': 'Hey, what\'s up?',
        'avatar': './img/avatars/vilaboim.jpg',
        'sender': 0
      },
      {
        'id'       : 2,
        'name'     : 'Fernando',
        'lastName' : 'Garcia',
        'text'     : 'Not much. Do you feel like going out tonight?',
        'avatar'   : './img/avatars/fernando.jpg',
        'sender'   : 1
      },
      {
        'id'       : 3,
        'name'     : 'Lucas',
        'lastName' : 'Vilaboim',
        'text'     : 'Hell yeah! Where are we going?',
        'avatar'   : './img/avatars/vilaboim.jpg',
        'sender'   : 0
      },
      {
        'id'       : 4,
        'name'     : 'Fernando',
        'lastName' : 'Garcia',
        'text'     : 'I\'ll call up the squad and we\'re going bowling',
        'avatar'   : './img/avatars/fernando.jpg',
        'sender'   : 1
      },
      {
        'id'       : 5,
        'name'     : 'Lucas',
        'lastName' : 'Vilaboim',
        'text'     : 'Nah I can\'t go. My wrist is hurting.',
        'avatar'   : './img/avatars/vilaboim.jpg',
        'sender'   : 0
      }
    ];
  });
