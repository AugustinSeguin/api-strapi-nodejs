
## Récupérer les films de TMDb

GET https://api.themoviedb.org/3/trending/movie/day?language=en-US
Authorization: Bearer {{apiToken}}


## Insérer les films dans Strapi

POST http://localhost:1337/api/movies/

body :
{
	"data": {
		"title": "Harry Potter",
		"description" : "Harry Potter",
		"releaseDate": "2024-04-23",
		"director": "moi",
	}
}

## Récupérer les acteurs de TMDb

GET https://api.themoviedb.org/3/trending/person/day?language=en-US
Authorization: Bearer {{apiToken}}

## Insérer les acteurs dans Strapi

POST http://localhost:1337/api/actors

body:
{ 
  "data": {
    "firstname": "Luka",
		"lastname": "dog",
 		"movies": [9] 
  }
}

## Récupérer les films de Strapi qui commencent par un "H"

GET http://localhost:1337/api/movies?filters[title][$startsWith]=


## afficher les acteurs de chaques films

GET http://localhost:1337/api/movies?populate=actors



