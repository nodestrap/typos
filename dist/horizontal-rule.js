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
        width: borders.hair,
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
            // sizes:
            blockSize: cssProps.width,
            // borders:
            border: 0,
            // backgrounds:
            backgroundColor: 'currentColor',
            // customize:
            ...usesGeneralProps(cssProps),
            // delete unnecessary props:
            width: undefined, // delete from cssProps. width means blockSize (the height of the <hr>)
        }),
    ]),
])
    .attach();
