import Product from "./Function";

function ProductTab() {
    let styles={
            display:"flex",
            flexwrap:"wrap",
            justifyContent:"center",
            alignItems:"center",
    };
    return (
     <div style={styles}>
            <Product title="logitech suiii" idx={0}/>
            <Product title="apple macbook" idx={1}/>
            <Product title="zebronics z0" idx={2}/>
            <Product title="penosic ze" idx={3}/>
        </div>
    );
}

export default ProductTab;
