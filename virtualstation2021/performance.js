import PerformanceItem from './performance-item.js';

const Performance = (data, $selector) => {
  const title = document.createElement('h2');
  title.innerText = data.title;
  const createList = (data) => {
    const ul = document.createElement('ul');
    data.list.forEach((item) => {
      ul.appendChild(PerformanceItem(item));
    });
    $selector.appendChild(title);
    $selector.appendChild(ul);
  };

  const render = () => {
    createList(data);
  };

  render();
};

export default Performance;
