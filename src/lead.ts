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
    isFirstChild,
    isLastChild,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    createCssConfig,
    
    
    
    // utilities:
    usesGeneralProps,
}                           from '@cssfn/css-config'  // Stores & retrieves configuration using *css custom properties* (css variables)

// nodestrap components:
import gens                 from './general.js'
import pars                 from './paragraph.js'



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize          : gens.fontSizeMd        as Prop.FontSize          | Cust.Expr,
        fontFamily        : pars.fontFamily        as Prop.FontFamily[]      | Cust.Ref,
        fontWeight        : gens.fontWeightLight   as Prop.FontWeight        | Cust.Expr,
        fontStyle         : pars.fontStyle         as Prop.FontStyle         | Cust.Ref,
        textDecoration    : pars.textDecoration    as Prop.TextDecoration    | Cust.Ref,
        lineHeight        : pars.lineHeight        as Prop.LineHeight        | Cust.Expr,
        
        foreg             : pars.foreg             as Prop.Color             | Cust.Ref,
        
        marginBlockStart  : pars.marginBlockStart  as Prop.MarginBlockStart  | Cust.Expr,
        marginBlockEnd    : pars.marginBlockEnd    as Prop.MarginBlockEnd    | Cust.Expr,
        marginInlineStart : pars.marginInlineStart as Prop.MarginInlineStart | Cust.Expr,
        marginInlineEnd   : pars.marginInlineEnd   as Prop.MarginInlineEnd   | Cust.Expr,
    };
}, { prefix: 'lead' });
export default cssProps;



// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule('.lead', {
            // layouts:
            display : 'block',
            
            
            
            // spacings:
            ...isFirstChild({
                marginBlockStart : 0, // kill the first marginBlockStart for the first element
            }),
            ...isLastChild({
                marginBlockEnd   : 0, // kill the last marginBlockEnd for the last element
            }),
            
            
            
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
.attach();
