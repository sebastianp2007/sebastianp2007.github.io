const btn = document.getElementById('button');

        document.getElementById('form')
        .addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Enviando...';

        const serviceID = 'default_service';
        const templateID = 'template_iwpfvst';

    emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'ENVIAR';
      alert('Mensaje Enviado!');
      document.getElementById('form').reset();
    }, (err) => {
      btn.value = 'ENVIAR';
      alert(JSON.stringify(err));
    });
    });