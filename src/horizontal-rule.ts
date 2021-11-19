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
    rule,
}                           from '@cssfn/cssfn'       // cssfn core
import {
    createCssConfig,
    
    
    
    // utilities:
    usesGeneralProps,
}                           from '@cssfn/css-config'  // Stores & retrieves configuration using *css custom properties* (css variables)

// nodestrap utilities:
import borders              from '@nodestrap/borders'     // configurable borders & border radiuses defs
import spacers              from '@nodestrap/spacers'     // configurable spaces defs



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        foreg             : 'inherit'       as Prop.Color             | Cust.Ref,
        opacity           : 0.25            as Prop.Opacity           | Cust.Ref,

        width             : borders.hair    as Prop.Width             | Cust.Ref,
        
        marginBlockStart  : spacers.default as Prop.MarginBlockStart  | Cust.Expr,
        marginBlockEnd    : spacers.default as Prop.MarginBlockEnd    | Cust.Expr,
        marginInlineStart : 0               as Prop.MarginInlineStart | Cust.Expr,
        marginInlineEnd   : 0               as Prop.MarginInlineEnd   | Cust.Expr,
    };
}, { prefix: 'hr' });
export default cssProps;



// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['hr'], [
            layout({
                // layouts:
                display         : 'block',



                // sizes:
                blockSize       : cssProps.width,



                // borders:
                border          : 0,


                
                // backgrounds:
                backgroundColor : 'currentColor',



                // customize:
                ...usesGeneralProps(cssProps),

                // delete unnecessary props:
                width : undefined as unknown as null, // delete from cssProps. width means blockSize (the height of the <hr>)
            }),
        ]),
    ]),
])
.attach();
