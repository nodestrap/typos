import { 
// styles:
createSheet, 
// compositions:
globalDef, 
// layouts:
layout, 
// rules:
rule, } from '@cssfn/cssfn'; // cssfn core
import { createCssConfig, 
// utilities:
usesGeneralProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontStyle: 'inherit',
        textDecoration: 'inherit',
        lineHeight: 'inherit',
        foreg: 'inherit',
        opacity: 0.65,
    };
}, { prefix: 'sec' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['small', '.txt-sec'], [
            layout({
                // customize:
                ...usesGeneralProps(cssProps),
            }),
        ]),
    ]),
])
    .attach();
