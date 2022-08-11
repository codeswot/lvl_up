function init() { }

function log(error: any) {
    console.error(error);
}
function logRequest(req: any) {
    console.log(req);
}
export default {
    init,
    log,
    logRequest
};