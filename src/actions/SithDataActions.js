import alt from '../alt';

import SithData from '../sources/SithData';

DARTH_SIDIUS_ID = 3616;

class SithDataActions {
    
    fetchDataForDarthSidius() {
        return this.fetchDataForSithWithId(DARTH_SIDIUS_ID);
    }

    fetchDataForSithWithId(sithId) {
        let activeRequest = SithData.startRequestForSith(
            sithId,
            onResponse(error, response) {
                if (response.ok) {
                    // Finish this action, with the sith data received
                    let sithData = response.body;
                    this.dispatch(sithData);
                }
                return;
            });
        // Provide another action for stores to handle the request in progress
        // This lets us abort active requests if they're no longer needed.
        this.requestStarted(activeRequest);
    }

    requestStarted(activeRequest) {
        this.dispatch(activeRequest);
    }
}

export default alt.createActions(SithDataActions);
