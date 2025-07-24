let equations = [
	"foo = 1",
	"bar = foo + 1",
	"baz = bar + foo + 3",
	"faz = baz + 4"
]

function evaluateEquations(equations) {
    const output = {};
    for (const eq of equations) {
        const [left, right] = eq.split('=');
        const varName = left.trim();
        let expr = right.trim();
        // Replace variable names in the expression with their values from output
        expr = expr.replace(/\b[a-zA-Z_][a-zA-Z0-9_]*\b/g, (name) => {
            if (output.hasOwnProperty(name)) {
                return output[name];
            }
            return name;
        });
        output[varName] = eval(expr);
    }
    return output;
}

const output = evaluateEquations(equations);
console.log(output);

