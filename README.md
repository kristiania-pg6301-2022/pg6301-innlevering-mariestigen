[![Coverage Status](https://coveralls.io/repos/github/kristiania-pg6301-2022/pg6301-innlevering-mariestigen/badge.svg?branch=main)](https://coveralls.io/github/kristiania-pg6301-2022/pg6301-innlevering-mariestigen?branch=main)
[![Run tests](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-mariestigen/actions/workflows/test.yml/badge.svg)](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-mariestigen/actions/workflows/test.yml)

# pg6301-innlevering-mariestigen
pg6301-innlevering-mariestigen created by GitHub Classroom

_Denne innleveringen er anbefalt, men ikke påkrevd for å ta eksamen (PG6301 har ingen obligatoriske øvelser)_

_Dersom du gjør innleveringen vil du få verdifull input og kontroll opp mot eksamen. Innleveringen skal gjøres parvis. Det er tillatt og anbefalt at man samarbeider med andre par for å hjelpe hverandre._

_Målet med innleveringen er at man skal kjøre en webapplikasjon på skytjenesten Heroku. Applikasjonen skal være en quiz der brukeren får et quiz-spørsmål og skal velge riktig svar._

_Applikasjonen skal vise at dere behersker:_

- Parcel
- React
- React Router
- Jest
- Github Actions
- Coveralls
- Express
- Heroku

**Oppsummert:**

- Få en Parcel til å bygge en React applikasjon
- Få React Router til å navigere rundt i applikasjonen
- Få React til å hente og lagre informasjon til et API
- Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls
- Få Heroku til å publisere websidene
- Express-serveren skal ha følgende API:

**GET /api/question** - returnerer et tilfeldig spørsmål med { id, category, question, answers }

**POST /api/question** - tar inn { id, answer } og returnerer "true" eller "false"
Dere kan ta utgangspunkt i følgende eksempel på spørsmål, men dere må endre på formatet som returneres til klienten slik at klienten ikke vet hvilket alternativ som er riktig: https://quizapi.io/ (Lenker til en ekstern side.)

_For å få vurdert innleveringen dere løse den med følgende GitHub classroom og alle gruppedeltagerne skal levere link i Canvas: https://classroom.github.com/a/lCmgaF2I_

- [x] Sette opp et React-prosjekt
- [x] Legge til Parcel, React, React-router, React-router-dom
  - [ ] Lage en hovedside
  - [ ] Lage en underside som viser spm
    - [ ] Routes videre til right/wrong basert på svar
    - [ ] Lagre informasjon om hvor mange rett/galt man har svart
    - [ ] Lage nytt spm

- [x] Legge til Babel /m React-support 
- [x] Legge til Jest
   - [ ] Lage tester
- [ ] Sette opp Github Actions mot repoet (+ Jest)
- [ ] Sette opp Coveralls mot github-repoet
- [x] Sette opp Express-server
- [x] Sette opp Heroku mot github-repoet 


###
notes
[ ] Husky doesn't need with coverage to run