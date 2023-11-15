const accountId = 151412
let accountEmail = "sandesh@m.in"
var accountPassword = "123456"
accountCity = "Pune"
let accountState;
console.log(accountId);
// accountId = 1    //not allowed

/*
 Prefer not to use var
 because of issue in block scope and functional scope. 
 */
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

if (accountState == undefined) {
    console.log("State is undefined");
} else {
    console.log("State is available");
}