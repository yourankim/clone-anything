import PerformanceDetail from './performance-detail.js';

const Performance = (data, $selector) => {
  const list = data.list
    .map((d, index) => {
      return `<button class="show-detail" id=${index}><dt>${d.artist}</dt><dd>${d.title}</dd></a><dd>${d.type}</dd></button>`;
    })
    .join('');

  $selector.innerHTML = `<h3>${data.title}</h3><dl>${list}</dl>`;

  const closeDetailPage = () => {
    alert('close!');
  };

  const details = document.querySelectorAll('.show-detail');
  details.forEach((element) => {
    element.addEventListener('click', (e) => {
      const detailPage = PerformanceDetail(
        data.list[element.id],
        element.id,
        closeDetailPage
      );

      element.parentElement.appendChild(detailPage);
      element.hidden = true;
    });
  });
};

export default Performance;
