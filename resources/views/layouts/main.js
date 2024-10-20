module.exports = function layout(content, context) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://cdn.tailwindcss.com"></script>
    </head>
    <body class="bg-zinc-950 relative h-full w-screen overflow-y-auto">
        ${content}
    </body>
    </html>
    `;
};
