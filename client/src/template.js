// https://medium.freecodecamp.org/demystifying-reacts-server-side-render-de335d408fe4
// https://medium.com/styled-components/the-simple-guide-to-server-side-rendering-react-with-styled-components-d31c6b2b8fbf
// client side - https://learn.co/lessons/react-introduction-to-react-router

const Html = ({ body, title, address }) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
    </head>
    <body style="margin:0">
    <div>
    ${address}
    </div>
      <div id="app">${body}</div>
    </body>
  </html>
`;

module.exports = Html;