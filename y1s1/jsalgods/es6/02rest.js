function listPets(...names) {
  console.log('My pets are:');
  for(int i = 0; i < names.length; i++) {
    console.log(names[i]);
  }
}

listPets('Flopsy', 'Mopsy', 'Cottontail');
