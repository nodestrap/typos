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
import colors from '@nodestrap/colors'; // configurable colors & theming defs
// nodestrap components:
import gens from './general.js';
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: [[
                'calc((', gens.fontSizeSm, '+', gens.fontSizeMd, ')/2)'
            ]],
        fontFamily: gens.fontFamilyMonospace,
        fontWeight: gens.fontWeightNormal,
        fontStyle: 'none',
        textDecoration: 'none',
        lineHeight: 'inherit',
        overflowWrap: 'inherit',
        foreg: colors.pink,
        backg: 'none',
        //#region borders
        border: 'none',
        borderRadius: 0,
        //#endregion borders
        //#region spacings
        paddingInline: 0,
        paddingBlock: 0,
        //#endregion spacings
    };
}, { prefix: 'code' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['code', '.code', 'var', '.var', 'samp', '.samp'], {
            // layouts:
            display: 'inline',
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
    .attach();
