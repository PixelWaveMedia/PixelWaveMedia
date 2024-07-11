/*!
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Define metadata for each article
let articlesMetadata = {
    article1: {
        title: "Article 1 - Dynamic Article Swap",
        description: "This is the content of Article 1. Learn more about dynamic article swapping."
    },
    article2: {
        title: "Article 2 - Dynamic Article Swap",
        description: "This is the content of Article 2. Discover how to dynamically swap content in web pages."
    },
    article3: {
        title: "Article 3 - Dynamic Article Swap",
        description: "This is the content of Article 3. Explore the benefits of dynamic content swapping."
    }
};

function loadArticle(articleId) {
    const article = document.getElementById(articleId);
    
    if (article) {
        const articleData = JSON.parse(article.textContent.trim());
        
        // Update article content on post.html
        document.getElementById('article-title').textContent = articleData.title;
        document.getElementById('article-date').textContent = articleData.date;
        document.getElementById('article-author').textContent = articleData.author;
        document.getElementById('article-content').innerHTML = articleData.content;
        
        // Optionally, scroll to top of the page
        window.scrollTo(0, 0);
    } else {
        console.error(`Article with id '${articleId}' not found.`);
    }
}



// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


// Articles by Date
document.addEventListener('DOMContentLoaded', function() {
    const articleCards = Array.from(document.querySelectorAll('.article-card'));

    // Sort articles by date
    articleCards.sort((a, b) => {
        return new Date(b.getAttribute('data-date')) - new Date(a.getAttribute('data-date'));
    });

    // Clear current articles in sidebar
    const articleContainer = document.querySelector('.article-container') || document.createElement('div');
    articleContainer.className = 'article-container';
    const sidebar = document.querySelector('.sidebar');
    sidebar.insertBefore(articleContainer, sidebar.querySelector('.show-more'));

    // Append sorted articles
    articleContainer.innerHTML = '';
    articleCards.forEach(card => {
        articleContainer.appendChild(card);
    });

    // Show More button functionality
    const showMoreButton = document.querySelector('.show-more');
    showMoreButton.addEventListener('click', () => {
        alert('Load more articles...');
        // Here you can implement functionality to load more articles
    });
});
