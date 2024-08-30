# Happy-Travel ✈️

## Descripción del Proyecto 📖

Este proyecto es una aplicación web que permite a los usuarios compartir y explorar destinos de viaje. El proyecto esta desarrollado con Java para el back-end haciendo uso de la estructura MVC de 3 capas y la creación de una API con SpringBoot y por el front-end se conectara a una base de datos PostgreSQL con React.js

## Funcionalidades 📋

### Página de Inicio:

Los usuarios no autenticados pueden ver una lista de todos los destinos.
Los usuarios autenticados pueden ver todos los destinos y tendrán la opción de editar o eliminar los destinos que ellos mismos hayan creado.
Alertas de usuario para guiar a través de las acciones de CRUD, registro y acceso.

### Autenticación:

Formulario de registro que solicita nombre, e-mail y contraseña.
Formulario de acceso que solicita e-mail y contraseña.

### Buscador de Destinos y paginación:

Permite buscar destinos por ubicación o título, mostrando resultados en tiempo real a medida que se escribe.
La página principal muestra los primeros 8 destinos, con paginación estándar en vista de escritorio y scroll infinito en mobile.

## Tecnologías Utilizadas 🛠️

### Back-end:

- Java

- SpringBoot

- PostgreSQL

- JUnit

- Mokito

### Front-end:

- HTML

- Tailwind

- JavaScript

- React.js

### Otras Herramientas:

- Maven

## Cómo usar la aplicación 🔧

Clonar el repositorio

`git clone https://github.com/tuusuario/happy-travel.git`

### Back-end

Configuración del Back-end

- Crea una base de datos en PostgreSQL

- Modifica las propiedades de conexión en el archivo application.properties
```
spring.datasource.url=jdbc:postgresql://localhost:5432/nombre_de_tu_base_de_datos
spring.datasource.username=tu_usuario
spring.datasource.password=tu_contraseña
```

Construir y ejecutar el back-end:
```
cd happy-travel-backend
mvn clean install
mvn spring-boot:run
```
### Front-end

Configuración del Front-End

Instalar dependencias del Front-end
```
cd happy-travel-frontend
npm install
npm start
o npm run dev
```
## Contribución 🤝

Haz un fork al repositorio.

Crea una nueva rama: `git checkout -b feature/name.`

Haz tus cambios.

Haz push de tu rama: `git push origin feature/name.`

Crea un pull request.

## Autoras ✒️

Cristina Pérez- https://github.com.CrisZDE

Paola Perdomo - https://github.com/Paola077 

Mabel Zárate - https://github.com/MabelZar

Ekaterina Buinovskaia - https://github.com/BSN-Asumiko
