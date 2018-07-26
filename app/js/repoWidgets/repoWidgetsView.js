const jQuery = require('jquery');

function createRepoWidgets(repoData) {
    let componentId = "";
    if (repoData && repoData.id) {
        componentId = repoData.id;
    } else {
        componentId = generateRandomId();
    }
    jQuery('#widgetSection').prepend(`
        <div class="p-3 my-3 mx-auto border border-info rounded openWidget" id="repoWidget-${componentId}">
            <h3 class="text-center mt-2 mb-4 text-danger"> Create Repository </h3>
            <form method="post" action="#" class="w-100 text-center">
                <div class="form-group row">
                    <label for="${componentId}-name" class="col-sm-5 col-form-label">Repo Name</label>
                    <div class="col-sm-7">
                        <input type="text" id="${componentId}-name" class="form-control" placeholder="Enter your repo name" value="${repoData.repoName}" data-name="name">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="${componentId}-Desc" class="col-sm-5 col-form-label">Repo Description</label>
                    <div class="col-sm-7">
                        <input type="text" class="form-control" id="${componentId}-Desc" placeholder="Description" data-name="description">
                    </div>
                </div>
                <div>
                    <button type="button" class="btn btn-primary createRepo">Create Repo</button>
                    <button type="button" class="btn btn-danger cancelWidget">Cancel</button>
                </div>
            </form>
        </div>`);
}


export default createRepoWidgets;
