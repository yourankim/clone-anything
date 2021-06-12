const Performance = (data, $selector) => {
  console.log(data);
  const list = data.list
    .map((d) => {
      return `<dt>${d.artist}</dt><dd>${d.title}</dd><dd>${d.type}</dd>`;
    })
    .join('');

  $selector.innerHTML = `<h3>${data.title}</h3><dl>${list}</dl>`;
  console.log(list);
};

export default Performance;
