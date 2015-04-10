describe('triangulator', function() {
    it("returns an equilaterial triangle if all the 3 sides are equal", function() {
        expect(triangulator(3, 3, 3)).to.equal("Equilateral triangle");
    });
});
