describe('triangulator', function() {
    it("will return the sum when 3 side lengths are inputted", function() {
        expect(triangulator(3, 3, 3)).to.equal(9);
    });
});
