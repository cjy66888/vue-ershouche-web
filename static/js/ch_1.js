(function get_h1_data() {
    $.ajax({
        url: "/h1",
        success: function(data) {
            $(".no-hd ul li").eq(0).text(data.zhi);
        },
        error: function() {
            return 'false'
        }
    });
    setInterval(get_h1_data, 60000);
})();

(function get_h2_data() {
    $.ajax({
        url: "/h2",
        success: function(data) {
            $(".no-hd ul li").eq(1).text(data.zhi);
        },
        error: function() {
            return 'false'
        }
    });
    setInterval(get_h2_data, 60000);
})();