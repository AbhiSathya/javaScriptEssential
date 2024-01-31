let userRole = "admin";
let accessLevel;
if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

//practice problem

function determineAccess(person) {
    switch (person.role) {
        case 'Employee':
            return 'You are authorized to access Dietary Services.';
        case 'Enrolled Member':
            return 'You are authorized to access Dietary Services and have one-on-one interaction with a dietician.';
        case 'Subscriber':
            return 'You are authorized to have partial access to facilitate Dietary Services only.';
        case 'Non-Subscriber':
            return 'You need to enroll or at least subscribe first to avail this facility.';
        default:
            return 'Invalid role. Please provide a valid role.';
    }
}

const employee = { role: 'Employee' };
const enrolledMember = { role: 'Enrolled Member' };
const subscriber = { role: 'Subscriber' };
const nonSubscriber = { role: 'Non-Subscriber' };

console.log(determineAccess(employee));
console.log(determineAccess(enrolledMember));
console.log(determineAccess(subscriber));
console.log(determineAccess(nonSubscriber));
