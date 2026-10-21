// Copy-to-clipboard for the email button. No analytics, no cookies, no storage.
document.querySelectorAll('[data-copy]').forEach(function (b) {
  var label = b.textContent;
  b.addEventListener('click', function () {
    function done(m) { b.textContent = m; var s = document.getElementById('copy-status'); if (s) s.textContent = m; setTimeout(function () { b.textContent = label; if (s) s.textContent = ''; }, 1800); }
    try { navigator.clipboard.writeText(b.dataset.copy).then(function () { done('Copied'); }, function () { done('Select the address to copy'); }); }
    catch (e) { done('Select the address to copy'); }
  });
});
