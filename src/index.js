import './index.css';
const result = document.querySelector('.result');
const inpParty = document.querySelector('#party'),
  name_short = document.getElementById('name_short'),
  name_full = document.getElementById('name_full'),
  inn_kpp = document.getElementById('inn_kpp'),
  address = document.getElementById('address'),
  show_list = document.querySelector('.show_list'),
  li = document.querySelectorAll('li'),
  span = document.querySelectorAll('.span'),
  p = document.querySelector('#type'),
  actionsP = document.querySelector('#action');

const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party';
const token = 'a96d79dffeeb431d6669017ec478fe6a7c88ac61';

const arrList = [];
let index;

li.forEach((el, i) => {
  el.addEventListener('click', () => {
    index = i;
    const item = arrList[arrList.length - 1][index];
    name_short.value = item.value;
    name_full.value = item.data.name.full_with_opf;
    inn_kpp.value = `${item.data.inn} / ${item.data.kpp}`;
    address.value = `${item.data.address.data.postal_code}, ${item.data.address.value}`;
    inpParty.value = '';
    show_list.style.display = 'none';
  });
});

inpParty.addEventListener('input', (e) => {
  !e.target.value ? (show_list.style.display = 'none') : (show_list.style.display = 'block');
  request(e.target.value).catch((error) => console.log('error', error));
});

async function request(query) {
  const options = {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Token ' + token,
    },
    body: JSON.stringify({ query }),
  };
  const response = await fetch(url, options);
  const data = await response.json();

  if (data.suggestions.length) {
    data.suggestions.slice(0, 5).forEach((item, i) => {
      [...show_list.children].forEach((item) => (item.style.display = 'block'));

      actionsP.innerHTML = 'Выберите вариант или продолжите ввод';
      li[i].innerHTML = item.value;
      span[i].innerHTML = `${item.data.address.data.postal_code}, ${item.data.address.value}`;
      p.innerHTML = `Организация (${item.data.type})`;
      result.prepend(p);
    });
    arrList.push(await data.suggestions);
  } else {
    [...show_list.children].forEach((item) => (item.style.display = 'none'));
    actionsP.innerHTML = 'Неизвестная организация';
    actionsP.style.display = 'block';
    show_list.prepend(actionsP);
  }

  return await data.suggestions;
}
