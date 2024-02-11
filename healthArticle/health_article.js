var xhr = new XMLHttpRequest();
const url = './health_article.json';

xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300) {
        var articles = xhr.response.articles;
        var articlesDiv = document.getElementById("articles");
        articles.forEach((article) => {
            var articleDiv = document.createElement('div');
            articleDiv.classList.add('article');

            var title = document.createElement('h2');
            title.textContent = article.title;

            var description = document.createElement('p');
            description.textContent = article.description;

            var wayHeaders = document.createElement('h3');
            wayHeaders.textContent = "ways to achieve:";

            var waysList = document.createElement('ul');
            article.ways_to_achieve.forEach((way) => {
                var listItem = document.createElement('li');
                listItem.textContent = way;
                waysList.appendChild(listItem);
            });

            var benefitsHeader = document.createElement('h3');
            benefitsHeader.textContent = "Benefits: ";

            var benefitsList = document.createElement('ol');
            article.benefits.forEach((benefit) => {
                var listItem = document.createElement('li');
                listItem.textContent = benefit;
                benefitsList.appendChild(listItem);
            });

            articleDiv.appendChild(title);
            articleDiv.appendChild(description);
            articleDiv.appendChild(wayHeaders);
            articleDiv.appendChild(waysList);
            articleDiv.appendChild(benefitsHeader);
            articleDiv.appendChild(benefitsList);

            articlesDiv.appendChild(articleDiv);
        });
    }
    else {
        console.log("failed to load articles: " + xhr.statusText);
    }
};

xhr.onerror = () => {
    console.log("Request Failed");
};

xhr.send();
