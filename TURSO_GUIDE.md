# Guía de Uso de Turso para Koop.com.ar

## Verificar la Conexión

Hemos creado una ruta de prueba para verificar que la aplicación puede conectarse a tu base de datos Turso.

1.  Asegúrate de que tu servidor de desarrollo esté corriendo: `npm run dev`
2.  Visita: [http://localhost:5173/test-db](http://localhost:5173/test-db)
3.  Deberías ver un mensaje de éxito ("Connection successful!") y los datos de la consulta de prueba.

## Gestión de la Base de Datos con Turso CLI

Para persistir los suscriptores del newsletter, necesitamos crear la tabla `newsletter_subscribers`.

### 1. Instalación y Login (si es necesario)

```bash
# Instalar CLI
curl -sSfL https://get.tur.so/install.sh | bash

# Login
turso auth login
```

### 2. Conectar a la Base de Datos

```bash
# Asumiendo que tu DB se llama 'koop' (verificar con `turso db list`)
turso db shell koop
```

### 3. Crear Tabla de Suscriptores

Ejecuta el siguiente comando SQL en la shell de Turso para crear la tabla necesaria para el formulario de suscripción:

```sql
CREATE TABLE newsletter_subscribers (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL UNIQUE,
  subscribed_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### 4. Verificar la Creación

```sql
.tables
-- Deberías ver 'newsletter_subscribers'
```

### 5. Consultar Suscriptores

Para ver quién se ha registrado:

```sql
SELECT * FROM newsletter_subscribers ORDER BY subscribed_at DESC;
```

## Uso en la Aplicación

El cliente de base de datos está configurado en `src/utils/turso.ts`.

La lógica de suscripción se encuentra en `src/routes/index.tsx` dentro de `useNewsletterAction`.
