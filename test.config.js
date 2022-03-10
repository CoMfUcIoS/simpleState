/* eslint  import/no-extraneous-dependencies:0 */
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import chai from "chai";
import { configure } from "enzyme";
import { JSDOM } from "jsdom";
import sinonChai from "sinon-chai";

chai.use(sinonChai);

const jsdom = new JSDOM(
  `
  <!doctype html>
  <html>
    <body>
      <div id="root"></div>
      <script src="/bundle.js"></script>
    </body>
  </html>
`,
  { url: "http://localhost/" },
);

const { window } = jsdom;

/**
 * Copies properties from one object to another
 *
 * @param {object} src Object to get the properties from
 * @param {object} target Object to copy the properties to
 */
function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: "node.js",
  language: "en",
};
global.requestAnimationFrame = callback => setTimeout(callback, 0);
global.cancelAnimationFrame = id => {
  clearTimeout(id);
};

copyProps(window, global);

configure({
  adapter: new Adapter(),
});
