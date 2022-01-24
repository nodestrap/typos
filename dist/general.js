import { 
// styles:
createSheet, 
// compositions:
globalDef, 
// rules:
atRoot, } from '@cssfn/cssfn'; // cssfn core
import { createCssConfig, 
// utilities:
usesGeneralProps, } from '@cssfn/css-config'; // Stores & retrieves configuration using *css custom properties* (css variables)
// nodestrap utilities:
import colors from '@nodestrap/colors'; // configurable colors & theming defs
// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    const basics = {
        fontSizeNm: '1rem',
        fontFamilySansSerief: [
            'system-ui',
            '-apple-system',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            '"Noto Sans"',
            '"Liberation Sans"',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
            '"Noto Color Emoji"',
        ],
        fontFamilyMonospace: [
            'SFMono-Regular',
            'Menlo', 'Monaco',
            'Consolas',
            '"Liberation Mono"',
            '"Courier New"',
            'monospace',
        ],
        fontWeightLighter: 'lighter',
        fontWeightLight: 300,
        fontWeightNormal: 400,
        fontWeightBold: 700,
        fontWeightBolder: 'bolder',
        fontStyle: 'normal',
        textDecoration: 'none',
        lineHeightSm: 1.25,
        lineHeightNm: 1.50,
        lineHeightLg: 2.00,
        foreg: colors.foreg,
        /**
         * Defaults is color's backg.
         * It can be an image with the average color as color's backg.
         */
        backg: colors.backg,
    };
    return {
        ...basics,
        fontSize: basics.fontSizeNm,
        fontSizeXs: [['calc(', basics.fontSizeNm, '*', 0.50, ')']],
        fontSizeSm: [['calc(', basics.fontSizeNm, '*', 0.75, ')']],
        fontSizeMd: [['calc(', basics.fontSizeNm, '*', 1.25, ')']],
        fontSizeLg: [['calc(', basics.fontSizeNm, '*', 1.50, ')']],
        fontSizeXl: [['calc(', basics.fontSizeNm, '*', 1.75, ')']],
        fontSizeXxl: [['calc(', basics.fontSizeNm, '*', 2.00, ')']],
        fontSizeXxxl: [['calc(', basics.fontSizeNm, '*', 2.25, ')']],
        fontFamily: basics.fontFamilySansSerief,
        fontWeight: basics.fontWeightNormal,
        lineHeight: basics.lineHeightNm,
    };
}, { prefix: '' });
export default cssProps;
// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        atRoot({
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
    .attach();
