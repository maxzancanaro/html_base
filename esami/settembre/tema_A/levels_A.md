# Livello 1
Scrivere una funzione che abbia come argomenti una parola (cioè una stringa) ed una lettera dell'alfabeto (cioè un carattere).

La funzione deve ritornare `true` se la parola contiene la lettera, altrimenti deve ritornare `false`.

*Per semplicità lavoriamo solamente con lettere maiuscole e con parole composte solamente di lettere maiuscole.*

Per esempio se il nome della funzione fosse `letteraInParola`, il risultato del seguente codice:

```javascript
let x = letteraInParola('CANE', 'C');
console.log(x);
```

sarebbe:

```
true
```

# Livello 2
Scrivere una funzione che abbia come argomenti un array di parole (stringhe) ed una lettera (carattere).

La funzione deve ritornare una nuovo array che contiene solamente le parole dell'array di input che contengono la lettera.

*Per semplicità lavoriamo solamente con lettere maiuscole e con parole composte solamente di lettere maiuscole.*

Per esempio se il nome della funzione fosse `selezionaParole`, il risultato del seguente codice:

```javascript
let x = selezionaParole(['CANE', 'GATTO', 'CRICETO'], 'C');
console.log(x);
```

sarebbe:

```
['CANE', 'CRICETO']
```

# Livello 3
Scrivere una funzione che generi una lettera maiuscola casuale.

Per esempio se il nome della funzione fosse `generaLettera`, il risultato del seguente codice:

```javascript
let x = generaLettera();
console.log(x);
```

Potrebbe essere:

```
'F'
```


---
