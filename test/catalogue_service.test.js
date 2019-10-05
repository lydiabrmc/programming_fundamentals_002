const catalogueService = require("../app/catalogue_service");

describe("catalogueService", () => {
    describe("catalogueService.checkBook", () => {
        test("returns true when a book is found by title", () => {
            expect(catalogueService.checkBook("Great Expectations")).toBe(true);
        });

        test("returns false when a book cannot be found by title", () => {
            expect(catalogueService.checkBook("Gone With The Wind")).toBe(false);
        });

        test("returns true when a partial match is found", () => {
            expect(catalogueService.checkBook("Expectations")).toBe(true);
        });

        test("returns false when not even a partial match is found", () => {
            expect(catalogueService.checkBook("The Wind")).toBe(false);
        });
        test("returns false when case does not match", () => {
            expect(catalogueService.checkBook("great expectations")).toBe(true);
        });
        test("returns (Number) of book matches when given keyword", () => {
            expect(catalogueService.countBooksByKeyword("assassin")).toBe(3);
        });

        test("returns (Number) of book matches when given keyword", () => {
            expect(catalogueService.countBooksByKeyword("pineapple")).toBe(0);
        });
        test("returns book title of author searched for", () => {
            expect(catalogueService.getBooksByAuthor("Charles Dickens")).toEqual("A Tale of Two Cities", "Oliver Twist", "Great Expectations");
        });
    });
});