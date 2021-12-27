const applicationSource = '{{APPLICATION_SOURCE}}';
const iframeContainer = document.createElement('div');
iframeContainer.style = `
  position: fixed;
  width: 296px;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background-color: rgb(255, 255, 255);
  border-style: none;
`;

iframeContainer.innerHTML = `
<iframe class="deep-insight-sidebar" src="${applicationSource}" style="width: 100%; height: 100%; border-style: none; border-width: 0px; padding-left: 0px; box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 50px 2px; position: relative; z-index: 1; background-color: rgb(255, 255, 255);"></iframe>
`

document.body.appendChild(iframeContainer);


