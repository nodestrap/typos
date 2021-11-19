import { 
// styles:
createSheet, 
// compositions:
globalDef, } from '@cssfn/cssfn'; // cssfn core
import { createCssConfig, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import gens from './general';
import { default as heads, usesLevelingRule, } from './heading';
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: 'unset',
        fontSize1: [['calc(', 5.0, '*', gens.fontSize, ')']],
        fontSize2: [['calc(', 4.5, '*', gens.fontSize, ')']],
        fontSize3: [['calc(', 4.0, '*', gens.fontSize, ')']],
        fontSize4: [['calc(', 3.5, '*', gens.fontSize, ')']],
        fontSize5: [['calc(', 3.0, '*', gens.fontSize, ')']],
        fontSize6: [['calc(', 2.5, '*', gens.fontSize, ')']],
        fontFamily: heads.fontFamily,
        fontWeight: 300,
        fontStyle: heads.fontStyle,
        textDecoration: heads.textDecoration,
        lineHeight: heads.lineHeight,
        foreg: heads.foreg,
        marginBlockStart: heads.marginBlockStart,
        marginBlockEnd: heads.marginBlockEnd,
        marginInlineStart: heads.marginInlineStart,
        marginInlineEnd: heads.marginInlineEnd,
        subOpacity: heads.subOpacity,
    };
}, { prefix: 'd' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        usesLevelingRule(cssProps, cssDecls, ['.display-']),
    ]),
])
    .attach();
