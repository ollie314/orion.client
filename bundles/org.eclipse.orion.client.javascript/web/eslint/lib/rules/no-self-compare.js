/*eslint-env amd */
define([
	'i18n!javascript/nls/problems',
	'module'
], function(ProblemMessages, module) {
	/**
	 * @fileoverview Rule to flag comparison where left part is the same as the right
	 * part.
	 * @author Ilya Volodin
	 */

	"use strict";

	//------------------------------------------------------------------------------
	// Rule Definition
	//------------------------------------------------------------------------------

	module.exports = function(context) {

		return {

			"BinaryExpression": function(node) {
				var operators = ["===", "==", "!==", "!=", ">", "<", ">=", "<="];
				if (operators.indexOf(node.operator) > -1 &&
					(node.left.type === "Identifier" && node.right.type === "Identifier" && node.left.name === node.right.name ||
						node.left.type === "Literal" && node.right.type === "Literal" && node.left.value === node.right.value)) {
					context.report(node, ProblemMessages.noSelfCompare);
				}
			}
		};

	};

	module.exports.schema = [];

	return module.exports;
});