function Dog (breed, size, age, color) {
                this.breed = breed;
                this.size  = size;
                this.age   = age;
                this.color = color;
                this.Eat = function() {
                    console.log(this.name + ' започна да яде.');
                };
                this.Sleep = function() {
                    console.log(this.name + ' заспа.');
                };
                this.Sit = function() {
                    console.log(this.name + ' седна!');
                };
                this.Run = function() {
                    console.log(this.name + ' се затича като вихър!');
                };

            };
console.log('----------------Упражнение 1----------------');
console.log(Dog);
var mastif = new Dog('Neapolitan Mastiff', 'Large', 5, 'Black'),
maltese    = new Dog('Maltese','Small', 2,'White'),
chowChow   = new Dog('Chow Chow', 'Medium', 3, 'Brown');

console.log('----------------Упражнение 2----------------');
console.log([mastif,maltese,chowChow]);

console.log('----------------Упражнение 3----------------');
var jeff = Object.assign({}, chowChow);
console.log(jeff);
jeff.age = 10;
jeff.color = 'Orange';
console.log('After change:');
console.log(jeff);

console.log('----------------Упражнение 4----------------');
jeff.name = {
  'name1': 'Jeffry',
  'name2': 'Jeff'
};
console.log('Name 1 is \"' + jeff.name.name1 + '\" and name 2 is \"' + jeff.name.name2 + '\".');
