import { 
// styles:
createSheet, 
// compositions:
globalDef, 
// layouts:
layout, 
// rules:
variants, rule, isFirstChild, isLastChild, } from '@cssfn/cssfn'; // cssfn core
import { createCssConfig, 
// utilities:
usesGeneralProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap components:
import gens from './general';
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize: gens.fontSizeMd,
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        fontStyle: 'inherit',
        textDecoration: 'inherit',
        lineHeight: 'inherit',
        foreg: 'inherit',
        marginBlockStart: '1em',
        marginBlockEnd: '1em',
        marginInlineStart: 0,
        marginInlineEnd: 0,
    };
}, { prefix: 'bq' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['blockquote', '.blockquote'], [
            layout({
                // layouts:
                display: 'block',
                // customize:
                ...usesGeneralProps(cssProps),
            }),
            variants([
                isFirstChild([
                    layout({
                        // spacings:
                        marginBlockStart: 0, // kill the first marginBlockStart for the first element
                    }),
                ]),
                isLastChild([
                    layout({
                        // spacings:
                        marginBlockEnd: 0, // kill the last marginBlockEnd for the last element
                    }),
                ]),
            ]),
        ]),
    ]),
])
    .attach();
