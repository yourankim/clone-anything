const PerformanceItem = (data) => {
  const onToggleDetail = (summary, detail, isOpenDetail) => {
    summary.hidden = isOpenDetail;
    detail.hidden = !isOpenDetail;
  };

  const createSummary = (data) => {
    const el = document.createElement('button');
    el.setAttribute('class', 'item__button item--heading');
    el.innerHTML = `<p>${data.artist}</p><p>${data.title}</p><p>${data.type}</p>`;
    return el;
  };

  const createDetail = (data, summary, onClick) => {
    const detail = document.createElement('article');
    detail.setAttribute('class', 'detail');
    detail.innerHTML =
      `<h3>${data.artist}</h3>` +
      `<h3>${data.title}<h3>` +
      `<h3>${data.type}</h3>` +
      `<h3>${data.from}, ${data.genre}, ${data.minutes}분</h3>` +
      `<figure><img src="./static/${data.image}" alter="${data.imageAlterText}"><figurecaption>${data.imageCaption}</figurecaption></figure>` +
      `<p>${data.description}</p>`;

    const closeButton = document.createElement('button');
    closeButton.className = 'close';
    closeButton.innerHTML = '<div></div><div></div>';
    closeButton.addEventListener('click', (e) =>
      onClick(summary, detail, false)
    );
    detail.prepend(closeButton);
    detail.hidden = true;

    return detail;
  };

  const createItem = (data) => {
    const li = document.createElement('li');
    const summary = createSummary(data);
    const detail = createDetail(data, summary, onToggleDetail);
    summary.addEventListener('click', (e) =>
      onToggleDetail(summary, detail, true)
    );
    li.appendChild(summary);
    li.appendChild(detail);

    return li;
  };

  return createItem(data);
};

export default PerformanceItem;
