 
 /*
1. Napisz funkcję, która jako parametr przyjmie dowolne słowo
Funkcja powinna zwrócic ciąg znaków złozonych
z znaków, znajdujących się na parzystym indeksie podanego jako parametr slowa
Zastosuj dowolna petle (for, while).
*/

/*

function () {
    
    const slowo = 'jabłko';

    for (let i=0; i < slowo.length ; i +=2 ){
    const litery = slowo [i];
    
    console.log(i, litery);
    }
};

*/

/*
2.Napisz pętlę for, która modyfikuje tablicę ze zwierzętami, sprawiając, że stają się niesamowite! Jeśli nasza początkowa tablica wygląda tak:

const zwierzęta = [
  "pantera",
  "pirania",
  "łasica"
];

...to po wykonaniu pętli powinna wyglądać tak:
[
  "Niesamowita pantera",
  "Niesamowita pirania",
  "Niesamowita łasica"
]
*/
/*
(funkcjon () {
    
    const zwierzęta = ["pantera","pirania","łasica"]; 
    const niesamowiteZwierzęta = [];
    for  (let i=0; i< zwierzęta.length; i += 1){
        niesamowiteZwierzęta[i]=["Niesamowita pantera","Niesamowita pirania","Niesamowita łasica"];
    };
    return niesamowiteZwierzęta;

})();
*/

/*
  3. Napisz funkcję, która jako parametr przyjmie liczbę naturalną wiekszą od 0.
  Funkcja powinna zwrócić losowo utworzony ciag znaków wybranych ze zbioru
  (const alfabet = "abcdefghijklmnopqrstuvwxyz";). Nowo utworzony ciąg znaków
  powinien mieć długosc określoną przez liczbę podaną jako argument wywołania tej funkcji - np.
  generuj(3); -> 'fws';
  generuj(5); -> 'ldqwa';
*/
  /*
function(n>0){
    const alfabet = "abcdefghijklmnopqrstuvwxyz";
    const random=Math.random()*alfabet.length;
    const randomIndex=Math.floor(random);
    const letter=alfabet[randomIndex];

    const liczbaZnakow= 3;

    function randomString (){
        if 
    }
}
*/


/*
  4. Mamy podany łańcuch znaków: 'JAVASCRIPT JEST SUPER'.
  Utwórz ciąg w postaci 'J4V42CR1PT J32T 2UP3R'.

  czyli w pierwszym łańcuchu zamieniamy litery wg. wzoru
  A = 4
  E = 3
  I = 1
  O = 0
  S = 2

  Sprobuj napisać funkcję która przyjmie jako parametr dowolny łańcuch znaków
  i zwróci łańcuch przerobiony wg powyszego wzorca
*/
 /*
function zamiana (){
  
    var s = prompt("JAVASCRIPT JEST SUPER" + String());
    s = s.replace(/A/gi, "4");
    s = s.replace(/E/gi, "3");
    s = s.replace(/I/gi, "1");
    s = s.replace(/O/gi, "0");
    s = s.replace(/S/gi, "2");
    document.write(s);
}
 }
*/


 /*
  Napisz funkcję, która przyjmie dowolne słowo.
  Funkcja powinna zwrócić liczbę wystąpienia kazdego znaku w podanym słowie
  np:

  enumerate_characters('koparka') -> k: 2, o: 1, p: 1, a: 2, r: 1
*/


function(){

 
 const liczbaZnakow ={};
const char = "koparka".split('');

for(let i=0, i< char.length; i++){
  const chars = char[i];

  if (liczbaZnakow.hasOwnProperty(chars)===false){
    liczbaZnakow[chars] = 0;
  }
liczbaZnakow[chars] =liczbaZnakow[chars] + 1;

}




}