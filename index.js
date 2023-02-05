function getYachtCard(yacht) {
    return `
        <div class="card mb-3 col-sm-12 col-md-6 col-lg-4">
            <div class="row g-0">
                <div class="col-4">
                    <img src="${yacht.data.img.url}"
                         style="max-width: 100%;"
                         alt="${yacht.marine} ${yacht.model}"
                    >
                </div>
                <div class="col-8">
                    <div class="card-body">
                        <h5 class="card-title">${yacht.marine} ${yacht.model}</h5>
                        <button type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal-${yacht.id}"
                                class="btn btn-secondary btn-sm"
                        >Details</button>
                    </div>
                </div>
            </div>
        </div>
        `;
}

function getYachtModal(yacht) {
    return `
        <div id="exampleModal-${yacht.id}"
             tabindex="-1"
             aria-labelledby="exampleModalLabel-${yacht.id}"
             class="modal fade"
             style="display: none;" 
             aria-hidden="true"
        >
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${yacht.marine} ${yacht.model}</h5>
                        <button type="button"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                class="btn-close"
                        ></button>
                    </div>
                    <div class="modal-body">
                        <img src="${yacht.data.img.url}"
                             style="max-width: 100%;"
                             alt="${yacht.marine} ${yacht.model}"
                        >
                        <div>
                            <p style="text-align: right"; class="text-muted">Source: ${yacht.data.img.description}</p>
                            <h5>Description</h5>
                            <p>${yacht.data.text.description}</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button"
                                    data-bs-dismiss="modal"
                                    class="btn btn-secondary  btn-sm"
                            >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
}

function fetchYachts() {
    let data = "yachts_data.json";

    return fetch(data)
        .then(response => response.json())
        //.then(json => console.log(json))
}

function getYachtCards(yachts) {
    let arr = [];
    for (let i = 0; i < yachts.length; i++){
        let yacht = yachts[i];
        let card = getYachtCard(yacht);
        arr.push(card);
    }
    return arr;
}

function getYachtModals(yachts) {
    let arr = [];
    for (let i = 0; i < yachts.length; i++){
        let yacht = yachts[i];
        let modal = getYachtModal(yacht);
        arr.push(modal);
    }
    return arr;
}

