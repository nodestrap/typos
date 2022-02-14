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
import marks from './marking-mark.js';
import codes from './marking-code.js';
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: codes.fontSize,
        fontFamily: codes.fontFamily,
        fontWeight: codes.fontWeight,
        fontStyle: codes.fontStyle,
        textDecoration: codes.textDecoration,
        lineHeight: codes.lineHeight,
        overflowWrap: codes.overflowWrap,
        foreg: colors.white,
        backg: colors.grayDark,
        //#region borders
        border: marks.border,
        borderRadius: marks.borderRadius,
        //#endregion borders
        //#region spacings
        paddingInline: '0.4em',
        paddingBlock: '0.2em',
        //#endregion spacings
    };
}, { prefix: 'kbd' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['kbd', '.kbd'], {
            // layouts:
            display: 'inline',
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
    .attach();
