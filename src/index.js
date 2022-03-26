import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    return (
        <div style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
            <label htmlFor="nome" style={{display: 'block', marginBottom: 4}}>
                Nome:
            </label>
            <input id="nome" type="text" style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', width: '100%', boxSizing: 'border-box'}}></input>
            <button style={{marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'hidden', borderRadius: 8, width: '100%'}}>Enviar</button>
        </div>
    )
}


ReactDOM.render(
    <App/>,
    // document.getElementById("root")
    document.querySelector("#root")
)






























// eslint-disable-next-line no-lone-blocks
{/* <html>
        <head>

        </head>
        <body>
            <div id="root"></div>
        </body>
</html>
function App (){
    return <div>Oi</div>
}
document. */}

