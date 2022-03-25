document
  .getElementById("btnInSoNguyenTo")
  .addEventListener("click", function () {
    var numb = document.getElementById("txt_number").value;
    var listSoNguyenTo = [];

    for (var i = 0; i < numb; i++) {
      var count = 0;
      for (var j = 1; j < numb; j++) {
        if (i % j == 0) {
          count++;
        }
      }
      if (count == 2) {
        listSoNguyenTo.push(i);
      }
    }

    // Kiểm tra mảng có tồn tại số nguyên tố không
    if (listSoNguyenTo.length == 0) {
      var content =
        "<div class='alert alert-success'>Không có số nào nhỏ hơn số bạn nhập là số nguyên tố</div>";
    } else {
      var content =
        "<div class='alert alert-success'>" +
        listSoNguyenTo.join(" ") +
        "</div>";
    }

    document.getElementById("footerInSoNguyenTo").innerHTML = content;
  });
