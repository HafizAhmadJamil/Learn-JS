const accountId = 12345;
let accountEmail = "imtiaz@google.com";
var accountPassword = "12345678";
accountCity = "Riyadh";
let accountState;
// accountId = 2; // variable defined with const can't be reassigned
accountEmail = "ia@ia.com";
accountPassword = "21212121";
accountCity = "Jeddah";

console.log(accountId);

/*
Prefer using const for variables that won't change, and let for variables that will. avoid using var.
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
