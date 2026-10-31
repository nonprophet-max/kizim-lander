import ts from 'typescript';
import fs from 'node:fs';
import assert from 'node:assert/strict';
const files = ['components/Hero.tsx','components/ProblemSection.tsx','components/ProblemStatement.tsx','pages/Solution.tsx','components/MVPCombined.tsx','components/TeamSection.tsx'];
const normalize = (value: string) => value.replace(/\s+/g, ' ').trim();
function inspect(source: string) {
  const file = ts.createSourceFile('content.tsx', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  const copy: Record<string,string> = {};
  const literals: string[] = [];
  function content(node: ts.Node): string {
    if (ts.isJsxText(node)) return node.text;
    if (ts.isJsxExpression(node)) return node.expression && ts.isStringLiteral(node.expression) ? node.expression.text : '';
    if (ts.isJsxSelfClosingElement(node)) return node.tagName.getText(file) === 'br' ? ' ' : '';
    if (ts.isJsxElement(node)) return node.children.map(content).join(' ');
    return '';
  }
  function visit(node: ts.Node) {
    if ((ts.isStringLiteral(node) || ts.isNoSubstitutionTemplateLiteral(node)) && !ts.isJsxAttribute(node.parent)) literals.push(normalize(node.text));
    if (ts.isJsxElement(node)) {
      const id = node.openingElement.attributes.properties.find(p => ts.isJsxAttribute(p) && p.name.getText(file) === 'data-testid');
      if (id && ts.isJsxAttribute(id) && id.initializer && ts.isStringLiteral(id.initializer)) {
        const text = normalize(content(node));
        if (text && /^(text-|card-)/.test(id.initializer.text)) copy[id.initializer.text] = text;
      }
    }
    ts.forEachChild(node, visit);
  }
  visit(file); return { copy, literals };
}
const baseline = JSON.parse(fs.readFileSync(new URL('./content-baseline.json', import.meta.url), 'utf8')) as Record<string, ReturnType<typeof inspect>>;
let count = 0;
for (const relative of files) {
  const path = `client/src/${relative}`;
  const original = baseline[relative];
  const current = inspect(fs.readFileSync(path,'utf8'));
  for (const [id, text] of Object.entries(original.copy)) {
    // Navigation tabs are controls; the editorial copy below them is checked separately.
    if (id === 'tab-navigation') continue;
    assert.equal(current.copy[id], text, `${path}: existing copy changed or missing at ${id}`); count++;
  }
  if (relative.includes('TeamSection') || relative.includes('MVPCombined')) {
    for (const text of original.literals.filter(x => x.length > 40 || ['NRC','FTD','Deposits','Net Deposits','Withdrawls','NGR','GGR','Turnover','Margin','Hold','ADPU','ARPU','Account Balance','Bonus Balance','Bonus Money','Free Spins','Wager Requirements',"Bonus' Converted",'Cashback','Cash Drop','Wager Factor','Vertical','KYC/ SOW/ SOF','+','Luke Skyrme','Miheer Walavalkar','Max Rabinovitch'].includes(x))) {
      assert(current.literals.includes(text), `${path}: existing data/biography missing: ${text}`); count++;
    }
  }
}
console.log(`Content preserved: ${count} original text blocks, biographies and data labels.`);
