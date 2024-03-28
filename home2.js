let FIO = {     
    fNmame:'Валентин',
    lName: 'Кираковский',
    mName: 'Валерьевич',
    birthYear : 1990,
    currentYear : new Date().getFullYear(),
    age: 0,
    study: false,
    work: true,   
  };
  FIO.age=FIO.currentYear - FIO.birthYear

  console.table(FIO)