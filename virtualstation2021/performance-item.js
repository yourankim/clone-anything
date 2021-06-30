const PerformanceItem = (data) => {
  const onToggleDetail = (summary, detail, isOpenDetail) => {
    summary.hidden = isOpenDetail;
    detail.hidden = !isOpenDetail;
  };

  const createSummary = (data) => {
    const el = document.createElement('button');
    el.setAttribute('class', 'clickable');
    el.innerHTML = `<div class='summary'><p class="clickable">${data.artist}</p><p class="clickable">${data.title}</p><p>${data.type}</p></div>`;
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
      `<pre>${data.description}</pre>`;

    const closeButton = document.createElement('button');
    closeButton.innerText = 'X';
    closeButton.addEventListener('click', (e) =>
      onClick(summary, detail, false)
    );
    detail.appendChild(closeButton);
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
