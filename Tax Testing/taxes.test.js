//unit testing vs integration testing
//test every function in at least one way
//think about "edge" cases = empty list, non-integer number, file can't be found, internet gone
//write code that is easier to test
//modular

describe('calculateTaxes tests', function(){
    it('should calculate the high tax bracket', function(){
        expect(calculateTaxes(50000)).toEqual(12500);
        expect(calculateTaxes(100000)).toEqual(25000);
    })
    
    it('should calculate the low tax bracket', function(){
        expect(calculateTaxes(10000)).toEqual(1500);
        expect(calculateTaxes(1000)).toEqual(150);
        expect(calculateTaxes(0)).toEqual(0); 
    })

    it('should reject invalid incomes', function(){
        expect(() => calculateTaxes('asdfaskdjf')).toThrowError();
        expect(() => calculateTaxes([])).toThrowError();
        expect(() => calculateTaxes(true)).toThrowError();
    })

})

describe('remove tests', function(){
    it('should remove duplicates from an array', function(){
        expect(removeDupes([1,1,2,2,3,4])).toEqual([1,2,3,4]);
        expect(removeDupes([1,2,3])).toEqual([1,2,3]);
    })
    
    it('should remove duplicates from a string', function(){
        expect(removeDupes("hello")).toBe("helo");
        expect(removeDupes("hello")).toBeInstanceOf(String);
        
    })
    
    it('should remove value from array', function(){
        expect(remove([1,2,3,4,5,6],6)).not.toContain(6); 
    })
    

})

describe('submitForm() tests', () =>{
    it('saves input val to usernames array', () => {
        input.value = 'chickenGal';
        submitForm();
        expect(usernames.length).toBe(1);
        expect(usernames).toContain('chickenGal');
    })
})

afterEach(function(){
    input.value = ''; //cleanup code
    usernames = [];
})

beforeEach(() => {
    console.log("BEFORE!");
})

beforeAll(() => {
    console.log("BEFORE ALL!")
}) //hook

afterAll(() => {
    console.log("AFTER ALL!")
}) //hook

//.toEqual does not care about references but values
//.toBe is basically === 
//.toBeInstanceOf - to be a type of ()
//.toContain - if it is contained in an array or object
//.not. - connectors for other methods
//afterEach is done for after each IT method
//beforeEach