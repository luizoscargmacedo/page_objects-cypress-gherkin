            # encoding: utf-8

            @authentication
            Feature: Authentication
            As a user would like to perform the authentication procedure

            @smoke
            @authentication_by_basic_user
            Scenario Outline: Authentication - mobile
            Given already route for a user with '<situation>'
            When execute a basic request
            Then the API response will return with the '<message>'

            Examples:
            | situation           | message                  | 
            | positive scenario   | token_confirmed          | 
            | negative scenario   | Unauthorized             |
            

            @smoke
            @authentication_by_manager
            Scenario Outline: Authentication - mobile
            Given already route for a manager user with '<situation>'
            When execute a special request
            Then the API response will return with the dashboard '<message>'

            Examples:
            | situation           | message                  | 
            | positive scenario   | token_confirmed          | 
            | negative scenario   | Unauthorized             |