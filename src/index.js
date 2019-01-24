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
document.body.appendChild(compontent());