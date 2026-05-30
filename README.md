# proyecto-vue
proyecto vue
Vue 3 + Supabase Authentication System

Proyecto de autenticación de usuarios desarrollado con Vue 3, Vite y Supabase. Implementa registro, inicio de sesión, confirmación por correo, gestión de perfiles y protección de rutas.

Tecnologías utilizadas
Vue 3 (Composition API)
Vite
Vue Router
Supabase (Auth y base de datos)
JavaScript (ES Modules)
CSS personalizado
Funcionalidades implementadas
Autenticación
Registro de usuarios con correo electrónico y contraseña
Confirmación de correo electrónico obligatoria
Inicio de sesión con Supabase Auth
Manejo de sesión activa
Cierre de sesión
Base de datos (Supabase)
Uso de tabla profiles para información adicional del usuario
Inserción automática de perfil al registrarse
Uso de upsert para evitar duplicados
Estructura preparada para roles de usuario
Gestión de usuarios
Usuarios registrados en Supabase Auth
Perfiles extendidos en tabla profiles
Campo role preparado para control de acceso (user / admin)
Seguridad
Row Level Security (RLS) configurado en Supabase
Control de acceso a datos por usuario autenticado
Prevención de duplicados en perfiles
Base lista para políticas de seguridad más avanzadas
Rutas y navegación
Vue Router configurado
Ruta protegida: /dashboard
Redirección automática según estado de autenticación
Rutas públicas para login y registro
Página 404 implementada
Estructura del proyecto
src/
 ├─ composables/
 │   └─ useAuth.js
 ├─ router/
 │   └─ index.js
 ├─ services/
 │   └─ supabase.js
 ├─ views/
 │   ├─ HomeView.vue
 │   ├─ LoginView.vue
 │   ├─ RegisterView.vue
 │   ├─ DashboardView.vue
 │   └─ NotFoundView.vue
Configuración del proyecto
Instalación
npm install
npm run dev
Variables de entorno

Crear archivo .env en la raíz del proyecto:

VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key
Configuración en Supabase
Autenticación
Email y contraseña habilitados
Confirmación de correo activada
Tabla profiles

Campos recomendados:

id (uuid, primary key)
email (text)
name (text)
role (text)
Notas importantes
El usuario debe confirmar su correo antes de iniciar sesión
Supabase Auth gestiona credenciales, profiles guarda información adicional
El sistema puede limitar solicitudes si hay demasiados intentos seguidos
upsert evita errores por duplicación en perfiles
Estado del proyecto
Registro de usuarios funcional
Inicio de sesión funcional
Confirmación por correo implementada
Inserción en tabla profiles
Protección de rutas con Vue Router
Base preparada para roles de usuario y administrador
Pendiente: recuperación de contraseña
Pendiente: dashboard administrativo
Pendiente: despliegue en Vercel
