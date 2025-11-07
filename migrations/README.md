# Database Migrations

Tento adresár obsahuje SQL migračné súbory pre databázu.

## Formát názvu súborov

`YYYYMMDD_HHMMSS_description.sql`

## Príklad

`20240101_120000_create_products_table.sql`

## Spustenie migrácie

```bash
npm run migrate <migration-file>
```

