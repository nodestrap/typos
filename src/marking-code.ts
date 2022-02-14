// cssfn:
import type {
    Prop,
    Cust,
}                           from '@cssfn/css-types'   // ts defs support for cssfn
import {
    // styles:
    createSheet,
    
    
    
    // compositions:
    globalDef,
    
    
    
    // rules:
    rule,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    createCssConfig,
    
    
    
    // utilities:
    usesGeneralProps,
}                           from '@cssfn/css-config'  // Stores & retrieves configuration using *css custom properties* (css variables)

// nodestrap utilities:
import colors               from '@nodestrap/colors'      // configurable colors & theming defs

// nodestrap components:
import gens                 from './general.js'



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize          : [[
            'calc((', gens.fontSizeSm, '+', gens.fontSizeMd, ')/2)'
        ]]                                           as Prop.FontSize       | Cust.Expr,
        fontFamily        : gens.fontFamilyMonospace as Prop.FontFamily[]   | Cust.Ref,
        fontWeight        : gens.fontWeightNormal    as Prop.FontWeight     | Cust.Expr,
        fontStyle         : 'none'                   as Prop.FontStyle      | Cust.Ref,
        textDecoration    : 'none'                   as Prop.TextDecoration | Cust.Ref,
        lineHeight        : 'inherit'                as Prop.LineHeight     | Cust.Expr,
        overflowWrap      : 'inherit'                as Prop.OverflowWrap   | Cust.Expr,
        
        foreg             : colors.pink              as Prop.Color          | Cust.Ref,
        backg             : 'none'                   as Prop.Background     | Cust.Ref,
        
        //#region borders
        border            : 'none'                   as Prop.Border         | Cust.Expr,
        borderRadius      : 0                        as Prop.BorderRadius   | Cust.Expr,
        //#endregion borders
        
        //#region spacings
        paddingInline     : 0                        as Prop.PaddingInline  | Cust.Expr,
        paddingBlock      : 0                        as Prop.PaddingBlock   | Cust.Expr,
        //#endregion spacings
    };
}, { prefix: 'code' });
export default cssProps;



// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['code', '.code', 'var', '.var', 'samp', '.samp'], {
            // layouts:
            display : 'inline',
            
            
            
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
.attach();
