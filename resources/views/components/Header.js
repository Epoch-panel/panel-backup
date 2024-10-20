module.exports = ({ title }) => `
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title || 'Default Title'}</title>
    <script src="/assets/js/app.js"></script>
  </head>
`;
