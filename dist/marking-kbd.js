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
// nodestrap utilities:
import colors from '@nodestrap/colors'; // configurable colors & theming defs
// nodestrap components:
import marks from './marking-mark';
import codes from './marking-code';
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: codes.fontSize,
        fontFamily: codes.fontFamily,
        fontWeight: codes.fontWeight,
        fontStyle: codes.fontStyle,
        textDecoration: codes.textDecoration,
        lineHeight: codes.lineHeight,
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
        rule(['kbd', '.kbd'], [
            layout({
                // layouts:
                display: 'inline',
                // customize:
                ...usesGeneralProps(cssProps),
            }),
        ]),
    ]),
])
    .attach();
