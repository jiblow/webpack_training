import _ from 'lodash';
import './style.css';

function compontent(){
    let element  =  document.createElement('div');
    element.innerHTML = _.join(['Hello ', ' webpack'], '');
    element.classList.add('hello');

    return element;
}
document.body.appendChild(compontent());