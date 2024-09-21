## Estructura de archivos
```bash
src\
----\types #guarda el Data que va a ser la estructura del dato que ingresa a la Pipeline
----\filters #guarda el archivo en que se definen los filtros
----\pipeline #guarda el curpo del algoritmo de la clase Pipeline y la QueueFactory encargada de crear las Queues Bull o Rabbit, además de guardar el PipeLineFactory
----\queues-providers #guarda los Adaptadores de Bull y Rabbit ademas de la IQueue que es la interface que van a implementar dichos adaptadores
----\routes #guarda las rutas de la app
----\services #contiene la lógica
```

# Como correr el proyecto

## Instalar modulos

```bash
npm i
```

## Levantar docker compose

```bash
docker-compose up -d
```

## Asignar las variables de entorno del proyecto

```bash
EXPRESS_PORT 
QUEUE_TYPE 
```
## Iniciar el proyecto

```bash
npm run dev
```

# Probar el proyecto

- Levantar Postman y pegarle con post en el puerto en el cual esté levantado el sv por ejemplo:
 http://localhost:3000/data
- Se necesita un body válido, el mismo podría ser:
 ```bash
{
    "word": "palabra",
    "count": 10,
    "test": "TEST1"
}
```
