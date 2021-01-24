describe('monthly payment function', function(){
  it('should calculate the monthly rate correctly', function () {
    const values1 = {amount: 120000, years: 12, rate: 0.02};
    const values2 = {amount: 12000, years: 12, rate: 0.12};
  
    expect(calculateMonthlyPayment(values1)).toEqual('$834.34');
    expect(calculateMonthlyPayment(values2)).toEqual('$83.94');
  });
  
  it("should return a result with 2 decimal places", function() {
    const values1 = {amount: 120000, years: 12, rate: 0.02};
    const values2 = {amount: 12000, years: 12, rate: 0.12};
  
    expect(calculateMonthlyPayment(values1)).toEqual('$834.34');
    expect(calculateMonthlyPayment(values2)).toEqual('$83.94');
  });
  
  it("should handle terribly high interest rates", function() {
    const values = {
      amount: 1000,
      years: 40,
      rate: 99
    };
    expect(calculateMonthlyPayment(values)).toEqual('$82.50');
  });
})

