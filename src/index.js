import _ from 'lodash';
import printMe from './print';
import './style.css';
import Icon from './icon.png';
import Data from './data.xml';

function compontent(){
    let element  =  document.createElement('div');
    const btn  = document.createElement('button');
    element.innerHTML = _.join(['Hello ', ' webpack'], '');
    element.classList.add('hello');
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    //Add the image to our existing div.
    var myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);
    console.log(Data);

    element.appendChild(btn);
    return element;
}
//document.body.appendChild(compontent());
let element = component(); //Store the element to re-render on print.js changes
document.body.appendChild(element);

if (module.hot){
    module.hot.accept('./print.js', function(){
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element.component(); //Re-render the "component to update the click handler"
        document.body.appendChild(element);
    })
}