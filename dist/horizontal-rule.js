import { 
// styles:
createSheet, 
// compositions:
globalDef, 
// rules:
rule, } from '@cssfn/cssfn'; // cssfn core
import { createCssConfig, 
// utilities:
usesGeneralProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import borders from '@nodestrap/borders'; // configurable borders & border radiuses defs
import spacers from '@nodestrap/spacers'; // configurable spaces defs
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        foreg: 'inherit',
        opacity: 0.25,
        marginBlockStart: spacers.default,
        marginBlockEnd: spacers.default,
        marginInlineStart: 0,
        marginInlineEnd: 0,
    };
}, { prefix: 'hr' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule('hr', {
            // layouts:
            display: 'block',
            // borders:
            border: 0,
            borderBlockStart: borders.default,
            borderBlockStartColor: 'currentcolor',
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
    .attach();
