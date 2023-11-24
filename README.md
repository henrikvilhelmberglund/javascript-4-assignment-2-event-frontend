# CthulhuCon

Henrik Berglund FEND22

Enkel(?) SPA med React+Vite+Generouted!

Jag provade Jotai för att se hur det fungerade men använde inte jättemånga fancy features. Det verkade lättare att förstå än Redux iallafall!

Jag använder också React Routers `Loader` och `Action`-funktioner för att fetcha och skicka formdata till API. Känns trevligare än useEffect!

## Kommandon

`npm run dev` - devserver

`npm run test` - unit/integrationtest

`npm run test:playwright` - end to end-test

`npm run build` - bygga med Vite

`npm run preview` - preview av byggt projekt


## Routes

`/` - index (har layout _app som sparar resultatet av en fetch till tickets i en context)

`/areas` - visar alla areas aka intresseområden med länkar till detaljsidor

`/details/:id` - visar detaljerad info för en area, kan hovera mitt i sidan för att se en lång text

`/tickets` - man kan skriva in data och köpa en biljett vars info sparar i Express-APIt via JSON server

`/my-tickets` - visas i navbar när man har biljetter, visar en liten ruta med infon man skrev i, man kan även ta bort biljetten