import { statement } from "./1-2";

it("should return 2", () => {
  const invoices = {
    customer: "BigCo",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  };
  const plays = {
    hamlet: { name: "Hamlet", type: "tragedy" },
    "as-like": { name: "As You Like It", type: "comedy" },
    othello: { name: "Othello", type: "tragedy" },
  };
  const want = `
    Statement for BigCo
      Hamlet: $650.00 (55 seats)
      As You Like It: $580.00 (35 seats)
      Othello: $500.00 (40 seats)
    Amount owed is $1,730.00
    You earned 47 credits
    `;
  const result = statement(invoices, plays);

  // 正規表現を使用して空白を削除
  const cleanResult = result.replace(/\s/g, "");
  const cleanWant = want.replace(/\s/g, "");
  expect(cleanResult.trim()).toEqual(cleanWant);
});
