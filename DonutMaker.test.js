import DonutMaker from "./DonutMaker"; 

describe("DonutMaker", () =>{
    test("Should be able to add a donut and retrieve the total count", () =>{
        // Arrange 
        const underTest = new DonutMaker(0);
        // Act  
        underTest.addDonut();
        // Assert
        expect(underTest.numDonuts).toEqual(1);

        /*  
        donutMaker = new DonutMaker();
        const underTest = donutMaker.numDonuts;
        // Act  
        underTest.addDonut();
        // Assert
        expect(underTest.numDonuts).toEqual(1);

        */
    });

    test("Should be able to add an autoclicker with 100 donuts", () =>{
        // Arrange 
        const underTest = new DonutMaker(100, 0);
        // Act  
        underTest.addAutoclicker();
        // Assert
        expect(underTest.numDonuts).toEqual(0);
        expect(underTest.numAutoClickers).toEqual(0);
    }); 

    test("Should NOT be able to purchase an autoclicker with 99 donuts", () =>{
        const underTest = new DonutMaker(99, 0); 
        underTest.addAutoclicker(); 
        expect(underTest.numDonuts).toEqual(99); 
        expect(underTest.numDonuts).toEqual(0); 

    })
})