(function () {
  var form = document.getElementById('jumpForm');
  var input = document.getElementById('jumpInput');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = input.value.trim();
    if (value) window.location.href = '/?ip=' + encodeURIComponent(value);
  });
})();
