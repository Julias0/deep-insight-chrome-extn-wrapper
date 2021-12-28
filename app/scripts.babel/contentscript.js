const applicationSource = '{{APPLICATION_SOURCE}}';

function createEmptyDivElement() {
  return document.createElement('div');
}

function createEmptyButtonElement(content, style) {
  const element =  document.createElement('button');
  element.textContent = content;
  element.style = style;

  return element;
}

const iframeContainer = createEmptyDivElement();
iframeContainer.style = `
  position: fixed;
  display: none;
  height: 100%;
  top: 0px;
  right: 0px;
  z-index: 10000;
  background-color: rgb(255, 255, 255);
  border-style: none;
`;

const closeIframeContainerBtn = createEmptyButtonElement('X', `
  display: none;
  position: fixed;
  top: 8px;
  right: 12px;
  z-index: 10;
  font-weight: 600;
  font-size: 18px;
`);

iframeContainer.innerHTML = `
<iframe class="deep-insight-sidebar" src="${applicationSource}/index.html" style="width: 100%; height: 100%; border-style: none; border-width: 0px; padding-left: 0px; box-shadow: rgba(0, 0, 0, 0.1) 0px 25px 50px 2px; position: relative; z-index: 1; background-color: rgb(255, 255, 255);"></iframe>
`;

iframeContainer.appendChild(closeIframeContainerBtn);

document.body.appendChild(iframeContainer);


const fabBtn = createEmptyButtonElement('Deep Insight', `
  position: fixed;
  bottom: 50%;
  right: 0px;
  width: 140px;
  height: 30px;
  z-index: 10000;
  background-color: rgb(255, 255, 255);
  border-style: none;
  border-radius: 8px 0 0 8px;
  font-weight: 500;
  background-color: rgb(99 102 241);
  color: rgb(17 24 39);
`);

document.body.appendChild(fabBtn);

fabBtn.addEventListener('click', function () {
  fabBtn.style.display = 'none';
  iframeContainer.style.display = 'block';
  closeIframeContainerBtn.style.display = 'block';
});

closeIframeContainerBtn.addEventListener('click', function () {
  fabBtn.style.display = 'block';
  iframeContainer.style.display = 'none';
  closeIframeContainerBtn.style.display = 'none';
})