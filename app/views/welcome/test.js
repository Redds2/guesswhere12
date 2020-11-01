function get() {
    Rails.ajax({
      url: "/books",
      type: "get",
      data: "",
      success: function(data) {},
      error: function(data) {}
    })
}
