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



// configs:
export const [cssProps, cssDecls, cssVals, cssConfig] = createCssConfig(() => {
    return {
        fontSize       : 'inherit' as Prop.FontSize       | Cust.Expr,
        fontFamily     : 'inherit' as Prop.FontFamily[]   | Cust.Ref,
        fontWeight     : 'inherit' as Prop.FontWeight     | Cust.Expr,
        fontStyle      : 'inherit' as Prop.FontStyle      | Cust.Ref,
        textDecoration : 'inherit' as Prop.TextDecoration | Cust.Ref,
        lineHeight     : 'inherit' as Prop.LineHeight     | Cust.Expr,
    
        foreg          : 'inherit' as Prop.Color          | Cust.Ref,
        opacity        : 0.65      as Prop.Opacity        | Cust.Expr,
    };
}, { prefix: 'sec' });
export default cssProps;



// create a new styleSheet & attach:
createSheet(() => [
    globalDef([
        rule(['small', '.txt-sec'], {
            // customize:
            ...usesGeneralProps(cssProps),
        }),
    ]),
])
.attach();
