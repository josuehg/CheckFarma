# CheckFarma: versión Firebase

App web instalable (PWA) para inspecciones de farmacia: plantillas, inspecciones con foto y firma, acciones correctivas automáticas, aprobaciones, agenda, panel e informes PDF. Funciona sin internet y sincroniza al volver la señal.

## Contenido

| Archivo | Para qué sirve |
|---|---|
| `public/index.html` | La app completa |
| `public/config.js` | Datos de su proyecto Firebase y correo del administrador |
| `public/sw.js`, `manifest.webmanifest`, íconos | Permiten instalarla y abrirla sin internet |
| `public/pdf-lib.min.js` | Generador de PDF (incluido para que funcione sin internet) |
| `firestore.rules` | Reglas de seguridad de la base de datos |
| `firebase.json`, `.firebaserc` | Configuración para subir la app a Firebase Hosting |

## Configuración

Ya viene lista para el proyecto `checkfarma-1e27a`. El usuario administrador es `admin`.

## Subirla a internet (una sola vez, desde su computadora)

Requiere Node.js LTS instalado (nodejs.org). Abra una terminal (en Windows: PowerShell) dentro de esta carpeta y ejecute:

```
npm install -g firebase-tools
firebase login
firebase deploy
```

Al terminar, la terminal muestra la dirección de su app, por ejemplo `https://inspecciones-farmacia.web.app`.

Para publicar cambios futuros basta con volver a ejecutar `firebase deploy`.

## Primer uso

1. **Apenas suba la app**, ábrala y toque **Crear cuenta** con el usuario **admin** y una contraseña segura. Esa cuenta queda como Administrador automáticamente, así que hágalo antes de compartir la dirección.
2. En **Ajustes**, escriba el nombre de su empresa, suba el logo y cree sus **sedes**.
3. En **Inicio** o **Plantillas**, toque **Cargar plantillas de farmacia**.
4. En **Agenda**, programe las inspecciones recurrentes de cada sede.
5. Comparta la dirección con su equipo. Cada persona toca **Crear cuenta** con su nombre, un usuario (ej.: `ana.torres`) y una contraseña; usted la activa en **Ajustes → Usuarios** eligiendo su rol (Operario o Supervisor).

## Instalar en el celular

- Android (Chrome): abra la dirección y toque **Instalar app** o menú ⋮ → **Agregar a pantalla principal**.
- iPhone (Safari): botón Compartir → **Agregar a inicio**.

La primera vez se necesita internet para ingresar. Después, la app abre y guarda inspecciones sin señal.

## Roles

| Rol | Qué puede hacer |
|---|---|
| Administrador | Todo: plantillas, sedes, usuarios, ajustes |
| Supervisor | Aprobar inspecciones, gestionar acciones y la agenda |
| Operario | Hacer inspecciones y atender sus acciones |
| Pendiente / Inactivo | No ve datos hasta que el administrador lo active |

## Notas

- **Contraseña olvidada:** como se entra con usuario (sin correo real), no hay enlace de recuperación. El administrador marca la cuenta como **Inactivo** en Ajustes → Usuarios y la persona crea un usuario nuevo (por ejemplo `ana.torres2`). Para borrar el usuario antiguo: consola de Firebase → Authentication → Usuarios.
- La pantalla de ingreso también acepta correos reales, por si alguien prefiere usar el suyo.

- Las fotos se guardan comprimidas dentro de Firestore para que funcionen sin internet; no hace falta activar Cloud Storage.
- El plan gratuito de Firebase (Spark) alcanza para empezar. Si crecen mucho las fotos o los usuarios, Firebase avisará antes de llegar al límite.
