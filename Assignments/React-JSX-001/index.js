let data ="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const heading = React.createElement("h1",{},'About Us');
const text1 = React.createElement("p",{}, "At Zappos.com, our purpose is simple: to live and deliver WOW.");
const text = React.createElement("p",{}, data);
const text2 = React.createElement("p",{}, "we hope that in the future people won't even realize we started selling shoes online,Instead, they'll know Zappos as a service company that just happens to sell________.");
const div = React.createElement('div', {}, [heading,text1, text, text2]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);