document.getElementById('deliveryForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Evita el envío por defecto

  const requiredFields = ['nombre', 'apellidos', 'codigoPostal', 'direccion', 'numeroExterior','numeroInterior', 'infoAdicional', 'distrito', 'provincia', 'departamento', 'servicio'];
  let valid = true;

  requiredFields.forEach(field => {
    const input = document.getElementById(field);
    if (!input.value.trim()) {
        valid = false;
        alert(`El campo "${input.placeholder}" es obligatorio.`);
    }
});


  if (valid) {
      alert('Formulario enviado con éxito');
  }
});
