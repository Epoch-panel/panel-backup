const fs = require('fs');
const path = require('path');

const renderPage = (pageName, context) => {
    let content;
    try {
        const page = require(path.join(__dirname, '../../resources/views', `${pageName}.jsx`));
        content = page(context);
    } catch (error) {
        console.log(error)
        console.log(pageName)
        content = require(path.resolve(__dirname, `../../resources/views/500.jsx`))
    }
    const layout = require(path.join(__dirname, '../../resources/views/layouts/main.jsx'));
    return layout(content, context);
};

const renderViews = (app) => {
    fs.readdirSync(path.resolve(__dirname, '../../resources/views')).forEach(file => {
        const route = `/${file.replace('.jsx', '')}`;
        app.get(route, (req, res) => {
            try {
                const ctx = { title: file.replace('.jsx', '') };
                const content = renderPage(file.replace('.jsx', ''), ctx);
                if (content) {
                    res.end(content);
                } else {
                    res.status(404).end(renderPage('404'));
                }
            } catch (err) {
                res.status(500).end(render500(err.message)); 
            }
        });
        app.get('/', (req, res) => {
            const ctx = { title: 'Index' };
            res.end(renderPage('index', ctx));
        });
    });
};

module.exports = { renderPage, renderViews };