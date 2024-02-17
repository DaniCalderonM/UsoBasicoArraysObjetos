// El prestigioso centro médico dental de Ñuñoa, le ha encargado la tarea de obtener información
// estadística acerca de las consultas dentales que realizó durante el día de ayer. Para esto, se
// le entregará un listado de las consultas realizadas, el que contiene una tabla con las
// siguientes columnas: hora de atención, médico especialista, nombre del paciente, Rut del
// paciente y previsión (Fonasa o Isapre).
// La información debe ser desplegada en una página HTML que usted debe crear. Puede utilizar
// la función document.write() y desplegar la información solicitada entre párrafos, o como
// usted estime conveniente, lo importante es que la información que se le solicite se muestre
// en dicha página que creará.
//ejemplo: document.write('<p>Estadisticas centro medico ñuñoa</p>');
// Requerimientos
// 1. Crear la estructura de datos mediante arreglos y objetos. Debe crear 1 arreglo por cada
// listado (Radiología, Traumatología y Dental) y 1 objeto por cada fila de información
// que contengan los listados, considerando las propiedades establecidas en la
// descripción (5 Puntos).
// 2. Mostrar por pantalla la primera y última atención de cada listado, desplegando el
// nombre del paciente junto con la previsión, separados por un guión (utilizar índices de
// arreglos para esto) (3 Puntos).
//  Ej: Primera atención: Juan Pérez - Fonasa | Última atención: Ana Gálvez - Isapre.
// 3. Recorrer el arreglo y mostrar su contenido en una tabla (2 Puntos). 

//Arreglo de Objetos Radiologia
let radiologia = [
{hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
{hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
{hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
{hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'}, 
{hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},];
//Arreglo de Objetos Traumatologia
let traumatologia = [ 
{hora: '8:00', especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ', rut: '15554774-5', prevision: 'FONASA'},
{hora: '10:00', especialista: 'RAUL ARAYA', paciente: 'ANGÉLICA NAVAS', rut: '15444147-9', prevision: 'ISAPRE'},
{hora: '10:30', especialista: 'MARIA ARRIAGADA', paciente: 'ANA KLAPP', rut: '17879423-9', prevision: 'ISAPRE'},
{hora: '11:00', especialista: 'ALEJANDRO BADILLA', paciente: 'FELIPE MARDONES', rut: '1547423-6', prevision: 'ISAPRE'}, 
{hora: '11:30', especialista: 'CECILIA BUDNIK', paciente: 'DIEGO MARRE', rut: '16554741-K', prevision: 'FONASA'},
{hora: '12:00', especialista: 'ARTURO CAVAGNARO', paciente: 'CECILIA MENDEZ', rut: '9747535-8', prevision: 'ISAPRE'},
{hora: '12:30', especialista: 'ANDRES KANACRI', paciente: 'MARCIAL SUAZO', rut: '11254785-5', prevision: 'ISAPRE'}, ];
//Arreglo de Objetos Dental
let dental = [
{hora: '8:30', especialista: 'ANDREA ZUÑIGA', paciente: 'MARCELA RETAMAL', rut: '11123425-6', prevision: 'ISAPRE'},
{hora: '11:00', especialista: 'MARIA PIA ZAÑARTU', paciente: 'ANGEL MUÑOZ', rut: '9878789-2', prevision: 'ISAPRE'},
{hora: '11:30', especialista: 'SCARLETT WITTING', paciente: 'MARIO KAST', rut: '7998789-5', prevision: 'FONASA'},
{hora: '13:00', especialista: 'FRANCISCO VON TEUBER', paciente: 'KARIN FERNANDEZ', rut: '18887662-K', prevision: 'FONASA'}, 
{hora: '13:30', especialista: 'EDUARDO VIÑUELA', paciente: 'HUGO SANCHEZ', rut: '17665461-4', prevision: 'FONASA'},
{hora: '14:00', especialista: 'RAQUEL VILLASECA', paciente: 'ANA SEPULVEDA', rut: '14441281-0', prevision: 'ISAPRE'},];

//Logica para calcular el ultimo valor de los arreglos.
const ultimaPosicionR = radiologia.length -1;
const ultimaPosicionT = traumatologia.length -1;
const ultimaPosicionD = dental.length -1;
//Variables para completar nuestro html
let texto1 = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
let texto2 = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
let texto3 = "<tr><th>HORA</th><th>ESPECIALISTA</th><th>PACIENTE</th><th>RUT</th><th>PREVISION</th></tr>";
let parrafo1 = (`Primera atención Radiología: ${radiologia[0].paciente} - ${radiologia[0].prevision} | 
Última atención Radiología: ${radiologia[ultimaPosicionR].paciente} - ${radiologia[ultimaPosicionR].prevision }`);
let parrafo2 = (`Primera atención Traumatología: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | 
Última atención Traumatología: ${traumatologia[ultimaPosicionT].paciente} - ${traumatologia[ultimaPosicionT].prevision }`);
let parrafo3 = (`Primera atención Dental: ${dental[0].paciente} - ${dental[0].prevision} | 
Última atención Dental: ${dental[ultimaPosicionD].paciente} - ${dental[ultimaPosicionD].prevision }`);

//For In para recorrer el array y sus objetos en Radiologia.
for (let i in radiologia) {
    texto1 += `<tr>
    <td>${radiologia[i].hora}</td>
    <td>${radiologia[i].especialista}</td>
    <td>${radiologia[i].paciente}</td>
    <td>${radiologia[i].rut}</td>
    <td>${radiologia[i].prevision}</td>
    </tr>`;
}
//For In para recorrer el array y sus objetos en Traumatologia.
for (let i in traumatologia) {
    texto2 += `<tr>
    <td>${traumatologia[i].hora}</td>
    <td>${traumatologia[i].especialista}</td>
    <td>${traumatologia[i].paciente}</td>
    <td>${traumatologia[i].rut}</td>
    <td>${traumatologia[i].prevision}</td>
    </tr>`;
}
//For In para recorrer el array y sus objetos en Dental.
for (let i in dental) {
    texto3 += `<tr>
    <td>${dental[i].hora}</td>
    <td>${dental[i].especialista}</td>
    <td>${dental[i].paciente}</td>
    <td>${dental[i].rut}</td>
    <td>${dental[i].prevision}</td>
    </tr>`;
}

//Enviando la informacion al html para ser vista en el navegador
//Apartado Radiologia
document.getElementById("tabla-radiologia").innerHTML = texto1;
document.getElementById("p-radiologia").innerHTML= parrafo1;
//Apartado Traumatologia
document.getElementById("tabla-traumatologia").innerHTML = texto2;
document.getElementById("p-traumatologia").innerHTML= parrafo2;
//Apartado Dental
document.getElementById("tabla-dental").innerHTML = texto3;
document.getElementById("p-dental").innerHTML= parrafo3;

//Queda como tarea crear funciones para disminuir la cantidad de codigo.