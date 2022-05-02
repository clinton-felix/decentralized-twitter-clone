//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract UserStorage {
    mapping (uint => Profile) public profiles;
    /* Instantiate a struct for profile and a way to fetch them 
        using a mapping declaratiion when a unique ID is provided
    */
    struct Profile {
        uint id;
        bytes32 username;
    }
    // A count to keep track of the latest user iD that has been taken 
    uint public latestUserId = 0; 


    function createUser(bytes32 _username) external returns(uint) {
        // Increment the Latest User ID to ensure the user gets unique ID
        latestUserId++;
        /*
        create a new struct instance with the _username input value as a username 
        and the latestUserID incremented now as the id for the user
        */ 
        profiles[latestUserId] = Profile(latestUserId, _username);
        return latestUserId;

    }

}