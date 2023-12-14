javascript
const blogPosts = [
    { title: 'Post Title 1', date: 'January 1, 2023', content: 'This is the content of the first blog post.' },
    { title: 'Post Title 2', date: 'February 15, 2023', content: 'This is the content of the second blog post.' }
    ];
function appendBlogPosts() {
    const blogList = document.getElementById('blog-list');

    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <h2>${post.title}</h2>
            <p class="date">Published on ${post.date}</p>
            <p>${post.content}</p>
        `;
        blogList.appendChild(article);
    });
}