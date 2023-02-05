async function start() {
    let yachtCardBox = document.querySelector('#yacht-card-box');
    let yachtModalBox = document.querySelector('#yacht-modal-box');
    let yachts = await fetchYachts();

    yachtCardBox.innerHTML = getYachtCards(yachts).join('');
    yachtModalBox.innerHTML = getYachtModals(yachts).join('');
}
