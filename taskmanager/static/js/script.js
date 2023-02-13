document.addEventListener("DOMContentLoaded", function() {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // datepicker initialisation
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select intialisation
    let selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);

    // collapsible initialisation
    let collapsible = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapsible);
});