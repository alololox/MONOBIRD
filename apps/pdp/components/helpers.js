import fetch from "isomorphic-unfetch";

export async function fetchOrCatchFromAPI(url) {
  return await fetch(url)
    .then(resp => resp.json())
    .catch(e => {
      console.error("Error retrieving data from API");
      console.error(e.message);
      return null;
    });
}

export async function getProductData(productName) {
  const requestUrl = `${process.env.PDP_API ||
    "http://localhost:5002/values"}/${productName}`;
  return fetchOrCatchFromAPI(requestUrl);
}

export const PageNotFound = `
  <div>
    <style>
      body {
        background-color: #000;
        font-family: Avenir, Helvetica, Arial, sans-serif;
        text-align: center;
        width: 80%;
        padding: 0;
        margin: 10% auto;
      }
      h1, h2, h3, p {
        font-weight: normal;
        padding: 0;
        margin: 0;
      }
      h1 a {
        display: block;
        background-size: 100%;
        text-indent: -9999px;
        width: 106px;
        height: 67px;
        margin: auto;
        margin-bottom: 60px;
      }
      h2 {
        background-size: 110%;
        font-size: 10vw;
        font-weight: bold;
        color: #fff;
        line-height: 12vw;
        margin-bottom: 40px;
      }
      h3 {
        /*medium*/
        font-size: 18px;
        color: #fff;
        text-transform: uppercase;
        margin-bottom: 30px;
      }
      p a {
        /*roman*/
        display: inline-block;
        font-size: 14px;
        line-height: 15px;
        color: #fff;
        text-decoration: none;
        width: 90px;
        padding: 10px;
        border: 1px solid #fff;
        margin: 0 10px 20px;
      }
      p a:hover {
        background: #111;
        text-decoration: underline;
      }
      h1 a {
        background-image: url('data:image/jpg;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAAoAAD/4QN8aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6NmVmYzAwZTQtNTg5My00ZjE5LWI2YTQtZjgzMzI3NDA2ODNhIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjkwODY0NEY0RDU1MjExRTM5M0I0RDg5RUI5OTNDNDg4IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjkwODY0NEYzRDU1MjExRTM5M0I0RDg5RUI5OTNDNDg4IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjZlZmMwMGU0LTU4OTMtNGYxOS1iNmE0LWY4MzMyNzQwNjgzYSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2ZWZjMDBlNC01ODkzLTRmMTktYjZhNC1mODMzMjc0MDY4M2EiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwv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');
      }
    </style>
    <h1><a href="/">ARC'TERYX</a></h1>
    <h2>404</h2>
    <h3>Oops... we can't find the page you're looking for.</h3>
    <p>
      <a href="/">Visit Our Home Page</a>
      <a href="/help/contact">Need Help? Contact Us</a>
    </p>
  </div>
`;
