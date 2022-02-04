const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara')
];

function mostrarPersonas(){
    console.log('mostrar persoas...');

    let texto = '';
    for (let persona of personas){
        console.log(persona);

        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }

    document.getElementById('personas').innerHTML = texto;
}


function agregarPersona(){
    const formulario = document.forms['formulario'];
    const nombre = formulario['nombre'];
    const apellido = formulario['apellido'];

    if (nombre.value != '' && apellido != ''){
        
        const persona = new Persona (nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();

    } else {

       alert(' Los Campos estan vacios');
    }

}