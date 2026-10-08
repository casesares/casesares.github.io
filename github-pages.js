/* GitHub Pages version: client-side replacements for the old PHP functionality. */
(function () {
  function setDates() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0');
    var month = String(now.getMonth() + 1).padStart(2, '0');
    var year = now.getFullYear();
    document.querySelectorAll('.current-date').forEach(function (el) {
      el.textContent = day + '/' + month + '/' + year;
    });
  }

  window.handleContactForm = function (form) {
    var first = form.elements.first_name.value.trim();
    var last = form.elements.last_name.value.trim();
    var email = form.elements.email.value.trim();
    var telephone = form.elements.telephone.value.trim();
    var comments = form.elements.comments.value.trim();

    var errors = [];
    if (!first) errors.push('El nombre es obligatorio.');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push('La dirección de correo electrónico no es válida.');
    }
    if (comments.length < 5) errors.push('Debes introducir el comentario de tu solicitud.');

    if (errors.length) {
      alert(errors.join('\n'));
      return false;
    }

    var subject = 'Correu electronic per a Cases Ares';
    var body =
      'Nom: ' + first + '\n' +
      'Cognom: ' + last + '\n' +
      'Email: ' + email + '\n' +
      'Telefon: ' + telephone + '\n' +
      'Comentaris: ' + comments;

    window.location.href =
      'mailto:conchaares@hotmail.com?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    return false;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', setDates);
  } else {
    setDates();
  }
})();
