# TPVirtualDreams

1)
Un servidor HTTP (Hypertext Transfer Protocol) es un software que forma parte del servidor que se encarga de resolver las peticiones que vienen por parte del cliente. Su devolución va a ser en forma de pagina web, documentos, entre otros.

2)
Los verbos HTTP son mensajes que se envían por parte del cliente con el fin de realizar una acción especifica.
Entre los mas conocidos nos encontramos con:
POST: Que se encarga de añadir información al servidor, como un producto o enviar un formulario.
GET: Se utiliza para recoger información de un servidor, como ver el contenido de una pagina HTML
PUT: Reemplaza información en el servidor, como cambiar el contenido de una pagina.
DELETE: Elimina totalmente la información del servidor.

3)
Un request es una petición por parte del cliente hacia un URL especifico para recibir una respuesta del servidor. Los datos que se envían depende del método de dicha petición.
Un response es el mensaje que el servidor envía al cliente, ésta puede variar dependiendo de la petición. 
Los headers transmiten información acerca del navegador del cliente, de la pagina solicitada, del servidor, etc. Entre otras cosas, especifica como ser debe hacer la petición.

4)
Permite añadir informacion extra mediante la URL. Por ejemplo el orden en el que quiero que se devuelvan los datos.  Para enviarlos se añade un ‘?’ al final de la URL.

5)
Un responseCode es un código que especifica si se ha completado satisfactoriamente una petición HTTP o no. Entre los valores devueltos podemos encontrarnos con:
200: OK.
201: Created.
400:Bad request.
404: Not Found.
500: Internal server error.
Entre otros.

6)
Con el método GET, los datos que se envían al servidor se escriben en la misma dirección URL, es decir, se transmite abiertamente. Una desventaja de esto es la nula protección de los datos que se envían.
El método POST introduce los parámetros a enviar en la solicitud HTTP para el servidor, de forma que no son visibles para el usuario.

7)
El verbo HTTP utilizado por el navegador es el que especifica el cliente. Si el servidor aprueba la solicitud, enviara al cliente el código 200, y los archivos serán enviados al navegador.

8)
La estructura de datos JSON es una forma de representar datos utilizando la estructura de objetos de JavaScript.
Un ejemplo de esta estructura es la siguiente:

{
“nombre”: ”nombre”,
“telefono”: 323423
}
La estructura de datos XML es un formato basado en texto que permite representar cierta información de manera estructurada, como por ejemplo objetos o datos. Es muy parecida a la sintaxis HTML.

Un ejemplo de esta estructura es la siguiente:
<empleado>
     <nombre> nombre </nombre>
     <telefono> 323423 </telefono>
</empleado>

9)
El estándar SOAP esta basado en XML y se utiliza para definir como será la comunicación entre dos objetos de distintos procesos. Define el contenido del mensaje, como procesarlo, entre otras cosas.

10)
El estándar REST se utiliza para la creación de APIs. Es una interfaz entre sistemas donde se utiliza HTTP para obtener y enviar datos entre el cliente y el servidor. Para ello, se emplean las peticiones, o requests, donde el cliente especifica que es lo que quiere hacer, para luego, obtener una respuesta, o response, por parte del servidor.

11)
Los headers en una request es la información del cliente que envia la petición. O bien, la información acerca del contenido que quiere obtenerse. Como por ejemplo, la descripción acerca del tipo de dato que quiere obtenerse.
El Content-Type especifica que tipo de contenido será enviado, en caso de una request, por parte del cliente y en caso de una response, por parte del servidor.
