const heading = React.createElement("h1",{},"The Evolution of");
const heading1 =  React.createElement("h1",{},"Airbnb's Frontend ");
const text = React.createElement("h3",{}, "@spikbrehm");
const img = React.createElement('img',{src:"./airbnb.png", className:"image"} )
const text2 = React.createElement("p",{}, "airbnb");

const div = React.createElement('div', {className:"card"}, [heading,heading1, text, img, text2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);