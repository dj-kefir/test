angular.module("myapp", ['ui.grid', 'ngContextMenu'])
    .controller("MainCtrl", function($scope) {
        $scope.helloTo = {};
        $scope.helloTo.title = "AngularJS";

        $scope.myData = [
            {
                "firstName": "Cox",
                "lastName": "Carney",
                "company": "Enormo",
                "employed": true
            },
            {
                "firstName": "Lorraine",
                "lastName": "Wise",
                "company": "Comveyer",
                "employed": false
            },
            {
                "firstName": "Nancy",
                "lastName": "Waters",
                "company": "Fuelton",
                "employed": false
            }
        ];

        $scope.oneAtATime = true;
        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };

        $scope.names = ['name1', 'name2', 'name3'];

        $scope.messages = [
            { subject: 'Really it is Possible? I want to believe...', from: 'Carla', date: new Date() },
            { subject: 'Facebook.com: New Message', from: 'Simon', date: new Date() },
            { subject: 'I Recommend "JavaScript: The Good Parts"!', from: 'Alison', date: new Date() }
        ];

        $scope.replyTo = function replyTo(name) {
            $log.info('Reply to ' + name);
        };



    })

    .controller("AccordionDemoCtrl", function($scope) {
        $scope.oneAtATime = true;

        $scope.groups = [
            {
                title: 'Dynamic Group Header - 1',
                content: 'Dynamic Group Body - 1'
            },
            {
                title: 'Dynamic Group Header - 2',
                content: 'Dynamic Group Body - 2'
            }
        ];

        $scope.items = ['Item 1', 'Item 2', 'Item 3'];

        $scope.addItem = function() {
            var newItemNo = $scope.items.length + 1;
            $scope.items.push('Item ' + newItemNo);
        };

        $scope.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
    });
