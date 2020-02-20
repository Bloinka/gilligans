const React = require("react");

exports.onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents(
    <script
      dangerouslySetInnerHTML={{
        __html: `

        
        document.addEventListener('sal:out', ({ detail }) => {
          console.log('exiting', detail.target);
        });


        document.addEventListener('sal:in', ({ detail }) => {
          console.log('entering', detail.target);
        });


          `
      }}
    />
  );
};
