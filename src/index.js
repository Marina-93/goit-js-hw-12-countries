import './sass/main.scss';
import cardCountries from "./partials/cantru.hbs";
import countriesList from "./partials/countriList.hbs";
import fetchCountries from './partials/fetchCountries.js';
import debounce from "lodash.debounce";


const input = document.querySelector('#input');
const list = document.querySelector('#list');
let name;

input.addEventListener(
  "input",
    debounce(() => {
        name = input.value;
        if (name === '') {
    list.innerHTML = '';
    return;
        }
        fetchCountries(name)
            .then(countries => {

        if (countries.length === 1) {
        list.innerHTML = cardCountries(countries);
        return;
            }
                
        if (countries.length > 1 && countries.length <= 10) {
        list.innerHTML = countriesList(countries);
        return;
         }
        
        if (countries.length > 10) {
        return alert("Too much");
        }
            }).catch((err) => {
                alert("Not found");
  
      })
    }, 500))