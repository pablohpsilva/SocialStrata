// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('strata', ['ionic', 'strata.controllers', 'strata.services'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
    // Tabs position
    $ionicConfigProvider.tabs.position('top');

    // Back button
    $ionicConfigProvider.backButton.text('').icon('strata-ios-back');

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
      })

    //setup an abstract state for the tabs directive
      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })

      // Each tab has its own nav history stack:
      .state('tab.groups', {
        url: '/groups',
        views: {
          'groups': {
            templateUrl: 'templates/groups.html',
            controller: 'GroupsController'
          }
        }
      })

      .state('tab.posts', {
        url: '/posts/:postsID',
        views: {
          'groups': {
            templateUrl: 'templates/posts.html',
            controller: 'PostsController'
          }
        }
      })

      .state('tab.lost_and_found', {
        url: '/lost-found',
        views: {
          'groups': {
            templateUrl: 'templates/posts.html',
            controller: 'LostFoundController'
          }
        }
      })

      .state('tab.public_space_booking', {
        url: '/public-space-booking',
        views: {
          'groups': {
            templateUrl: 'templates/posts.html',
            controller: 'PublicSpaceBookingController'
          }
        }
      })

      .state('tab.public_notices', {
        url: '/public-notices',
        views: {
          'groups': {
            templateUrl: 'templates/posts.html',
            controller: 'PublicNoticesController'
          }
        }
      })

      .state('tab.comments', {
        url: '/group/:groupID/post/:postID/comment',
        views: {
          'groups': {
            templateUrl: 'templates/comments.html',
            controller: 'CommentsController'
          }
        }
      })

      .state('tab.chats', {
        url: '/chats',
        views: {
          'chats': {
            templateUrl: 'templates/chats.html',
            controller: 'ChatsController'
          }
        }
      })

      .state('tab.chat', {
        url: '/chat/:chatID',
        views: {
          'chats': {
            templateUrl: 'templates/chat.html',
            controller: 'ChatController'
          }
        }
      })

      .state('tab.services', {
        url: '/services',
        views: {
          'services': {
            templateUrl: 'templates/services.html',
            controller: 'ServicesController'
          }
        }
      })

      // Service
      .state('tab.service', {
        url: '/service/:id',
        views: {
          'services': {
            templateUrl: 'templates/service.html',
            controller: 'ServiceController'
          }
        }
      })

      .state('tab.maintenance-requests', {
        url: '/maintenance-requests',
        views: {
          'maintenance-requests': {
            templateUrl: 'templates/maintenance-requests.html',
            controller: 'MaintenanceRequestsController'
          }
        }
      })

      .state('tab.maintenance-request', {
        url: '/maintenance-request/:maintenanceID',
        views: {
          'maintenance-requests': {
            templateUrl: 'templates/maintenance-request.html',
            controller: 'MaintenanceRequestController'
          }
        }
      });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
  });
