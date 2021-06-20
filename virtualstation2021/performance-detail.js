const PerformanceDetail = (detailData, id, onClick) => {
  const detailPage = document.createElement('section');
  detailPage.setAttribute('class', 'detail');
  detailPage.setAttribute('id', `d${id}`);

  const article = document.createElement('article');
  article.innerHTML =
    `<h3>${detailData.artist}</h3>` +
    `<h3>${detailData.title}<h3>` +
    `<h3>${detailData.type}</h3>` +
    `<h3>${detailData.from}, ${detailData.genre}, ${detailData.minutes}분</h3>` +
    `<figure><img src="./static/${detailData.image}" alter=${detailData.imageAlterText}><figurecaption>${detailData.imageCaption}</figurecaption></figure>` +
    `<p>${detailData.description}</p>`;

  const closeButton = document.createElement('button');
  closeButton.innerText = 'X';
  closeButton.onclick = onClick;
  detailPage.appendChild(closeButton);
  detailPage.appendChild(article);
  return detailPage;
};

export default PerformanceDetail;
