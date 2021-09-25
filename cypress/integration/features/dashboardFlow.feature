            # encoding: utf-8

            @dashboard_flow
            Feature: Flow
            As a user would like to validate the Historic

            @smoke
            @flow_dashboard_historic
            Scenario Outline: Status 200 Historic Samurai22
            Given already specific route to validate with '<situation>'
            When a GET request is executed correctly
            Then the API will return a '<message>' and code 200 successfully

            Examples:
            | situation         | message        |
            | Feature positive  | 797200806062   |
            | Feature negative  | Invalid token  |

            @flow_order_status_
            Scenario Outline: Order Status 200 
            Given already specific route to validate with '<situation>'
            When a status request is executed 
            Then the API will return a '<message>' showing the correct status

            Examples:
            | situation         | message        |
            | Feature positive  | 797200806062   |
            | Feature negative  | Invalid token  |