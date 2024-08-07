/// <reference types="cypress" />

describe('JSON Object', () => {
    it('Json Object Example', () => {
        const exampleObject = {"key1": "Linda", "key2": "Herky"} //Json Object
        const exampleArrayOfValues = ["Reyhan", "Febi", "Abiel"] //Array Values
        const exampleArrayOfObject = [{"key3": "Linda"}, {"key4": "Nur"}, {"key5": "26 yo"}] //Array Object

        const users = {
            "firstName": "John", //Values
            "lastName": "Blogs", //Values
            "age": 27,
            "students": [ //Array
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sarah",
                    "lastName": "Parker",
                }
            ]
        }

        // To extract data from JSON object
        cy.log(exampleObject.key1) //Linda
        cy.log(exampleObject.key2) //Herky

        cy.log(exampleArrayOfValues[0]) //Reyhan
        cy.log(exampleArrayOfValues[1]) //Febi
        cy.log(exampleArrayOfValues[2]) //Abiel

        cy.log(users.lastName) //Blogs
        cy.log(users.students[0].lastName) //Blogs2

        cy.log(exampleArrayOfObject[0].key3)
        cy.log(exampleArrayOfObject[1].key4)
        cy.log(exampleArrayOfObject[2].key5)
    })
})