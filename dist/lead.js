import { 
// styles:
createSheet, 
// compositions:
globalDef, 
// rules:
rule, isFirstChild, isLastChild, } from '@cssfn/cssfn'; // cssfn core
import { createCssConfig, 
// utilities:
usesGeneralProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import gens from './general.js';
import pars from './paragraph.js';
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: gens.fontSizeMd,
        fontFamily: pars.fontFamily,
        fontWeight: gens.fontWeightLight,
        fontStyle: pars.fontStyle,
        textDecoration: pars.textDecoration,
        lineHeight: pars.lineHeight,
        foreg: pars.foreg,
        marginBlockStart: pars.marginBlockStart,
        marginBlockEnd: pars.marginBlockEnd,
        marginInlineStart: pars.marginInlineStart,
        marginInlineEnd: pars.marginInlineEnd,
    };
}, { prefix: 'lead' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule('.lead', {
            // layouts:
            display: 'block',
            // spacings:
            ...isFirstChild({
                marginBlockStart: 0, // kill the first marginBlockStart for the first element
            }),
            ...isLastChild({
                marginBlockEnd: 0, // kill the last marginBlockEnd for the last element
            }),
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
    .attach();
