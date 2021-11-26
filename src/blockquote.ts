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
    
    
    
    // layouts:
    layout,
    
    
    
    // rules:
    variants,
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



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize          : gens.fontSizeMd as Prop.FontSize          | Cust.Expr,
        fontFamily        : 'inherit'       as Prop.FontFamily[]      | Cust.Ref,
        fontWeight        : 'inherit'       as Prop.FontWeight        | Cust.Expr,
        fontStyle         : 'inherit'       as Prop.FontStyle         | Cust.Ref,
        textDecoration    : 'inherit'       as Prop.TextDecoration    | Cust.Ref,
        lineHeight        : 'inherit'       as Prop.LineHeight        | Cust.Expr,
    
        foreg             : 'inherit'       as Prop.Color             | Cust.Ref,
        
        marginBlockStart  : '1em'           as Prop.MarginBlockStart  | Cust.Expr,
        marginBlockEnd    : '1em'           as Prop.MarginBlockEnd    | Cust.Expr,
        marginInlineStart : 0               as Prop.MarginInlineStart | Cust.Expr,
        marginInlineEnd   : 0               as Prop.MarginInlineEnd   | Cust.Expr,
    };
}, { prefix: 'bq' });
export default cssProps;



// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['blockquote', '.blockquote'], [
            layout({
                // layouts:
                display : 'block',



                // customize:
                ...usesGeneralProps(cssProps),
            }),
            variants([
                isFirstChild([
                    layout({
                        // spacings:
                        marginBlockStart : 0, // kill the first marginBlockStart for the first element
                    }),
                ]),
                isLastChild([
                    layout({
                        // spacings:
                        marginBlockEnd   : 0, // kill the last marginBlockEnd for the last element
                    }),
                ]),
            ]),
        ]),
    ]),
])
.attach();
