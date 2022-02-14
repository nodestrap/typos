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
import borders, * as border from '@nodestrap/borders'; // configurable borders & border radiuses defs
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontStyle: 'inherit',
        textDecoration: 'inherit',
        lineHeight: 'inherit',
        overflowWrap: 'inherit',
        foreg: 'inherit',
        backg: colors.warningThin,
        //#region borders
        border: borders.default,
        borderRadius: border.radiuses.sm,
        //#endregion borders
        //#region spacings
        paddingInline: '0.2em',
        paddingBlock: '0em',
        //#endregion spacings
    };
}, { prefix: 'mrk' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['mark', '.mark'], {
            // layouts:
            display: 'inline',
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
    .attach();
