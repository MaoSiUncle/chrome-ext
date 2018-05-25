/**
 * Created by admin on 18/5/23.
 */

window.onload = function () {
  var dropdown = document.getElementById('dropdown');
  dropdown.addEventListener('change', function (value) {
    console.log(dropdown.value);
    chrome.storage.local.set({os: dropdown.value}, function() {
      console.log('已设置os:' + dropdown.value+" 请刷新当前页面");
    });
  })
}
