import PerformanceItem from './performance-item.js';

const Performance = (data, $selector) => {
  const createList = (data) => {
    const ul = document.createElement('ul');
    data.list.forEach((item) => {
      ul.appendChild(PerformanceItem(item));
    });
    $selector.appendChild(ul);
  };

  const render = () => {
    createList(data);
  };

  render();
};

export default Performance;
