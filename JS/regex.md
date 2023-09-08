# Regex pour tester le mot de passe

```^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$```

Cette expression vérifie :

- qu'il y a au moins un caractère majuscule ```(?=.*[A-Z])```
- qu'il y a au moins un caractère minuscule ```(?=.*[a-z])```
- qu'il y a au moins un chiffre ```(?=.*\d)```
- qu'il y a au moins un caractère spécial ```(@$!%?&) (?=.[@$!%*?&])```
- qu'il y a au moins 8 caractères ```( {8,})```
