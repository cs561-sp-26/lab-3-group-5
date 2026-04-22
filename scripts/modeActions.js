/*************************************************************************
 * File: modeActions.js
 * Desc: Contains the JavaScript functions to respond to interactions
 * with the UI elements in each mode.
*************************************************************************/

/*************************************************************************
 * @function Mode Floating Action Button CLICK handler
 * @Desc
 * When the user clicks on the action button in the current mode, we
 * present the corresponding action dialog box; disable the
 * navigation bar buttons; and hide the mode tabs. We use currentMode
 * to determine which action dialog box to display.
 * @global currentMode: index of current mode
 * @global modeTabsContainer: the <div> containing the mode tab buttons
 * @global modeTabPanels: array of tab panels for each mode
 * @global modeActionDialogs: array of dialog boxes for each mode
 * @global dialogActionButtons: array of default ("OK") buttons for
 * each mode's dialog box
 *************************************************************************/
 for (let i = 0; i < GlobalModeActionButtons.length; ++i) {
    GlobalModeActionButtons[i].addEventListener("click",function(e) {
        //Hide tab panel
        GlobalModeTabPanels[i].classList.add("hidden");
        //Hide and disable all UI elements
        GlobalMenuBtn.classList.add("disabled");
        GlobalSearchBtn.classList.add("disabled");
        GlobalProfileBtn.classList.add("disabled");
        GlobalSkipLink.classList.add("hidden");
        GlobalModeTabsContainer.classList.add("disabled");
        //Show dialog box
        GlobalModeActionDialogs[i].classList.remove("hidden");
        //Set focus to dialog box's action button
        GlobalDialogActionButtons[i].focus();
        if (GlobalHistoryLogging) {
            GlobalDialogClose = GlobalDialogCancelButtons[i];
            const historyObj = {
                page: "MODE_DIALOG",
                mode: i,
                path: GlobalModeDialogNumbersToRoutes.get(i)
            };
            history.pushState(historyObj, "", historyObj.path);
            console.log("Console: In GlobalModeActionButtons click handler; pushing state: ",
                         JSON.stringify(historyObj));
        }
    });
}