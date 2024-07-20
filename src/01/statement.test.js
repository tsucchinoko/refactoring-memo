import { it } from "vitest";
import { htmlStatement, statement } from "./statement";

it("should return statement result", () => {
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

it("should return html statement result", () => {
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
    <h1>Statement for BigCo</h1>
    <table>
    <tr><th>play</th><th>seats</th><th>cost</th></tr><tr><td>Hamlet</td><td>55</td><td>$65,000.00</td></tr><tr><td>As You Like It</td><td>35</td><td>$58,000.00</td></tr><tr><td>Othello</td><td>40</td><td>$50,000.00</td></tr></table>
    <p>Amount owed is <em>$173,000.00</em></p>
    <p>You earned <em>47</em> credits</p>
    `;
  const result = htmlStatement(invoices, plays);
  console.log(result);

  // 正規表現を使用して空白を削除
  const cleanResult = result.replace(/\s/g, "");
  const cleanWant = want.replace(/\s/g, "");
  expect(cleanResult.trim()).toEqual(cleanWant);
});
