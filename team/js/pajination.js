$(document).ready(function () {

    setPaging();
    setRSSPaging();
    $(function () {
        var dir = $("#dir").val();
        var col = $("#col").val();
        var header = $("#paging_container1 table th > a[href*=' + col + ']");
        header.removeClass("asc").removeClass("desc");
        $("#paging_container1 td").css("background", "none");
        $("#paging_container1 td." + col).css("background", "#e5e5e5");
        if (dir === "Ascending") {
            header.addClass("asc");
        }
        else if (dir === "Descending") {
            header.addClass("desc");
        }
    });

		
});


function setPaging() {
    if ($("#paging_containerEvents").length) {
        $("#paging_containerEvents").pajinate({
            items_per_page: 15,
            nav_label_first: '<<',
            nav_label_last: '>>',
            nav_label_prev: '<',
            nav_label_next: '>'
        }, "show");
    }

}

function setRSSPaging() {
    $(".paging_containerRss").each(function () {
        if ($(this).find("#resultsPerPage").val() > 0) {
            $(this).pajinate({
                items_per_page: $(this).find("#resultsPerPage").val(),
                nav_label_first: '<<',
                nav_label_last: '>>',
                nav_label_prev: '<',
                nav_label_next: '>'
            }, "show");
        }
    });
}