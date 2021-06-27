const PerformanceItem = (data) => {
  const onToggleDetail = (summary, detail, isOpenDetail) => {
    summary.hidden = isOpenDetail;
    detail.hidden = !isOpenDetail;
  };

  const createSummary = (data) => {
    const el = document.createElement('button');
    el.setAttribute('class', 'summary');
    el.dataset.id = data.id;
    el.innerText = 'summary';
    return el;
  };

  const createDetail = (data, summary, onClick) => {
    const detail = document.createElement('section');
    detail.setAttribute('class', 'detail');

    const article = document.createElement('article');
    article.innerHTML =
      `<h3>${data.artist}</h3>` +
      `<h3>${data.title}<h3>` +
      `<h3>${data.type}</h3>` +
      `<h3>${data.from}, ${data.genre}, ${data.minutes}분</h3>` +
      `<figure><img src="./static/${data.image}" alter="${data.imageAlterText}"><figurecaption>${data.imageCaption}</figurecaption></figure>` +
      `<pre>${data.description}</pre>`;

    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', (e) =>
      onClick(summary, detail, false)
    );
    detail.appendChild(closeButton);
    detail.appendChild(article);
    detail.hidden = true;

    return detail;
  };

  const createItem = (data) => {
    const li = document.createElement('li');
    const summary = createSummary(data);
    const detail = createDetail(data, summary, onToggleDetail);
    summary.addEventListener('click', (e) =>
      onToggleDetail(e.target, detail, true)
    );
    li.appendChild(summary);
    li.appendChild(detail);

    return li;
  };

  return createItem(data);
};

export default PerformanceItem;
