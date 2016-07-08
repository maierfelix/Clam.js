import {
  Token,
  Types as Type,
  TokenList as TT
} from "../../labels";

import Node from "../../nodes";

import {
  getNameByLabel
} from "../../utils";

/**
 * @return {Node}
 */
export function parseFunction() {

  let node = new Node.FunctionDeclaration();

  // Optional, so dont expect
  this.eat(TT.FUNCTION);

  node.name = this.parseLiteralHead();

  node.arguments = this.parseArguments();

  if (this.peek(TT.ARROW)) {
    node.type = this.parseStrictType();
  }

  // Functions dont explicit need a body
  if (this.eat(TT.LBRACE)) {
    node.body = this.parseBlock();
    this.expect(TT.RBRACE);
  }

  return (node);

}