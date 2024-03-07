var emptyObject = {};                                                                   
var personObject = {
    firstName: "John",
    lastName: "Smith",
};

personObject.age = 25;
personObject["date of birth"] = "01/01/1990";
personObject["salary"] = 100000;


for (var member in personObject)
{
    if (personObject.hasOwnProperty(member))
    {
        console.log("personObject[" + member + "] = " + personObject[member]);
    }
}