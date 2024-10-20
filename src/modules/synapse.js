const fs = require('fs');
const path = require('path');

const requireUncached = (module) => {
    delete require.cache[require.resolve(module)];
    return require(module);
};

const renderPage = (pageName, context, req, res) => {
    let content;
    try {
        const pagePath = path.join(__dirname, '../../resources/views', `${pageName}.js`);
        const page = requireUncached(pagePath);
        content = page(context, req, res);
    } catch (error) {
        console.log(error);
        const errorPagePath = path.resolve(__dirname, `../../resources/views/500.js`);
        content = requireUncached(errorPagePath)(context, req, res);
    }
    const layoutPath = path.join(__dirname, '../../resources/views/layouts/main.js');
    const layout = requireUncached(layoutPath);
    return layout(content, context, req, res);
};

const renderViews = (app) => {
    fs.readdirSync(path.resolve(__dirname, '../../resources/views')).forEach(file => {
        const route = `/${file.replace('.js', '')}`;
        app.get(route, (req, res) => {
            try {
                const ctx = { title: file.replace('.js', ''), req, res };
                const content = renderPage(file.replace('.js', ''), ctx, req, res);
                if (content) {
                    res.end(content);
                } else {
                    res.status(404).end(renderPage('404', ctx, req, res));
                }
            } catch (err) {
                res.status(500).end(renderPage('500', { title: 'Error', req, res }, req, res));
            }
        });
    });

    app.get('/', (req, res) => {
        const ctx = { title: 'Index', req, res };
        res.end(renderPage('index', ctx, req, res));
    });
};

module.exports = { renderPage, renderViews };
