// TODO: replace setHTML for firefox
// import katex from 'katex';
import katex from 'https://cdn.jsdelivr.net/npm/katex@0.16.7/dist/katex.mjs';


// Function which takes three DOM nodes and sets up input listener

export function link_io_pair(iNode, oNode, errorlog) {
  iNode.addEventListener('input',
    input_event => {
      let exception = null;

      // Clear any previous errors
      errorlog.innerText='';
      try {
        // TODO: add error handler for when datalabel does not exist
        let label_mathml = katex.renderToString(oNode.attributes['datalabel'].value);
        let user_mathml = katex.renderToString(iNode.value);

        // oNode.setHTML(label_mathml + user_mathml);
        oNode.innerHTML = label_mathml + user_mathml;

      } catch (exception) {

        let {name, message} = exception;
        // We are expecting ParseErrors to show up pretty often, so
        // the following line is commented out until its corresponding
        // div is better styled.
        // errorlog.innerText = `${name}\n${message}`;
      }
    }
  );
};
