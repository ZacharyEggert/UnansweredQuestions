const searchFrom = docuent.querySelector('.search');
const inputNews = document.querySelector('.input');
const newsList = document.querySelector('news-list');

searchForm.addEventListener('submit', retrieve)

function retrieve(e){
    e.preventDeafualt()

    const apiNewsKey = '7ffc95833bda4c648b3687eaf6a8e567'

    let url= 'https://newsapi.org/v2/everything?q=${topic}&apiNewsKey=${apiKey}'

    fetch(url).then((res)=> {
        return res.json()
    }).then((data)=>{
        let li = document.createElement('li');
        let a= document.createElement('a');
        a.setAttribute('href', article.url );
        a.setAttribute('target', '_blank');
        a.textContent = article.title;
        li.appendChild(a);
        newsList.appendChild(li);
    });


};