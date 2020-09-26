describe("Todo MVC", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Todo 입력하기", () => {
    // testid가 todoInput인 엘리먼트에 "Cypress 실습"을 입력
    cy.get("[data-testid='todoInput']").type("Cypress 실습");

    // testid가 todoButton인 엘리먼트 클릭
    cy.get("[data-testid='todoButton']").click();

    // testid가 todoInput인 엘리먼트의 value가 빈 문자열이어야 한다.
    cy.get("[data-testid='todoInput']").should("have.value", "");

    // testid가 todoList인 엘리먼트의 첫번째 자식 li는 "Cypress 실습" 이라는 텍스트를 포함한다.
    cy.get("[data-testid='todoList'] li")
      .eq(0)
      .should("contain", "Cypress 실습");

    //추가된 첫번째 투두 삭제 클릭
    cy.get("[data-testid='todoList'] li").eq(0).get("span").click();

    //투두리스트에 존재하는 투두가 없어야한다.
    cy.get("[data-testid='todoList'] li").should("not.exist");
  });
});
