# scraper-project

**Scraper Project** es una herramienta de scraping web desarrollada en Node.js, diseñada específicamente para extraer información clave de artículos de sitios web.

## Funcionalidades

Este proyecto está configurado para obtener:

- **Imagen principal** del artículo.
- **Título** del artículo.
- **URL** del artículo.
- **Meta descripción** del artículo.

La información extraída es ideal para su uso en vistas dinámicas, como tarjetas informativas en páginas web.

## Tecnologías Utilizadas

- **[Puppeteer](https://pptr.dev/)**: Automatización de navegadores para renderizar y extraer datos dinámicos.
- **[Axios](https://axios-http.com/)**: Realización de solicitudes HTTP eficientes.
- **[Cheerio](https://cheerio.js.org/)**: Análisis y manipulación de contenido HTML.

## Requisitos Previos

- **Node.js**: v18 o superior.
- **npm**: v7 o superior.

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/scraper-project.git
   cd scraper-project
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Uso

Ejecuta el proyecto con el siguiente comando:

```bash
node index.js
```

Asegúrate de personalizar la URL y otros parámetros dentro del script según las necesidades de tu caso de uso.

## Licencia

Este proyecto está bajo la licencia **ISC**. Consulta el archivo `LICENSE` para más detalles.

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar esta herramienta, no dudes en abrir un issue o enviar un pull request.
