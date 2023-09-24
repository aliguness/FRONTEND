let sinif = [
    "Ali",
    "Aysu",
    "Aminenur",
    "Gizem",
    "Orhun",
    "Osman",
    "Salih",
    "Yiğitcan",
  ];
  
  for (let index = 0; index < sinif.length; index++) {
    const element = sinif[index];
    // console.log(element);
  }
  
  let i = 0;
  for (; i < sinif.length; i++) {
    const element = sinif[i];
    // console.log(element);
  }
  
  i = 0;
  for (; i < sinif.length; ) {
    // while (condition) {}
    const element = sinif[i];
    console.log(element);
    i += 2;
  }
  
  // for (;;) {
  //   console.log("Hello chaos");
  // }
  
  const serkan = {
    name: "Serkan",
    surname: "Zorlu",
    date: 1991,
  };
  
  serkan.name;
  serkan["name"];
  
  for (const key in serkan) {
    const value = serkan[key];
    console.log(`${key}: ${value}`);
  }
  
  let total = 0;
  const ages = [32, 31, 25, 25, 29, 28, 28, 28, 26, 27, 31, 31, 27, 27];
  for (const age of ages) {
    total += age;
  }
  console.log("Toplam yaş:", total);
  console.log("Ortalama yaş:", total / ages.length);