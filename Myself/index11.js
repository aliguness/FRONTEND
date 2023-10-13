// XHR ile "https://jsonplaceholder.typicode.com/" URL'ini kullanarak users adresine birer adet get, post, patch, put ve delete isteği gönderin.

// callbackFn= hata durumunda içine 2 parametre alacak. birinci hata aldığında ne yapacak. 2.si hata almadığında ne yapacak.

const jsonplaceholderURL = "https://jsonplaceholder.typicode.com/";

const getRequest = (callbackFn, endpoint) => {
  //newleyerek bi istek nesnesi oluşturduk diyebiliriz.
  const request = new XMLHttpRequest(); //istek atma sayfamısın ismi.bu sayfaüzerinden nesnemizi oluşturuyoruz.
  // request'i burada önce aç dedik. İçine strşng olarak method ister(GET'i girdik, sonra string bir url istiyor)
  request.open("GET", endpoint);
  //burada bir dinleyici eklememizi istiyor(readystatechange buradaki değişimleri dinle takip et diyor bir nevi.)
  // attığımız isteğin durumlarını dinlyen. isteğin durumunu kontrol eden kısmı.
  //burada request içinde addeventlistener methodumuzu çağırdık. onunn gereği arrow function açtık.
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status == 200) {
      //statimizin 4 olması ve statusumuzun 200 olması durumu koşuluna baktık.
      const data = JSON.parse(request.responseText);
      //request.response
      //burada data değişkeni yarattık işlemleri ona atayacağız ve isteğimizin bize responseText olarak olarak dönecek veya getircek. Bunu JSON'a parse etmemizin sebebi kod okunurlulugunu guzellestirmek amacli  JSON'ları parse ettik.
      //JSON.parse dışardan aldığımız JSON formatlı verileri JS formatına çevirebiliyoruz.

      // error, response
      callbackFn(data, null);
    } else if (request.readyState === 4) {
      //error
      callbackFn(
        null,
        `${request.readyState} - ${request.status} == işlem yapılmadı.`
      );
    }
  });
  request.send();
};
const callBackFuctionAysu = (response, error) => {
  if (error) {
    //hata varsa console log ile hataları gösterelim.
    console.log("Error:", error);
  } else {
    console.log("Response : ", response);
  }
};
getRequest(callBackFuctionAysu, jsonplaceholderURL + "users");
