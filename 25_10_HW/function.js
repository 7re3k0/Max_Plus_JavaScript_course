
//1. Направете функция конструктор Dog със свойствата(променливи) и методите(функции) описани на картинката от лекцията.
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

//2. Създайте различни обекти от тази функция (минимум три, както е на картинката).
var mastif = new Dog('Neapolitan Mastiff', 'Large', 5, 'Black'),
maltese    = new Dog('Maltese','Small', 2,'White'),
chowChow   = new Dog('Chow Chow', 'Medium', 3, 'Brown');

console.log('----------------Упражнение 2----------------');
console.log([mastif,maltese,chowChow]);

//3. Копирайте един от обектите и променете неговите години и цвят (промените да важат само за новия обект, използвайте Object.assign)
var jeff = Object.assign({}, chowChow);
console.log('----------------Упражнение 3----------------');
function jeffChange() {
  console.log(chowChow);
  console.log(jeff);
  jeff.age   = 10;
  jeff.color = 'Orange';
  console.log('After change:');
  console.log(chowChow);
  console.log(jeff);
}
jeffChange();

//4. Направете така, че едно куче да отговаря на различни имена (различни променливи да сочат към едно и също куче)
jeff.name = {
  'name1': 'Jeffry',
  'name2': 'Jeff'
};
console.log('----------------Упражнение 4----------------');
console.log('Name 1 is \"' + jeff.name.name1 + '\" and name 2 is \"' + jeff.name.name2 + '\".');

// 5. Използвайте всичките методи поне на един от обектите.
chowChow.name = 'Chewy'
console.log('----------------Упражнение 5----------------');
chowChow.Eat();
chowChow.Sleep();
chowChow.Sit();
chowChow.Run();
