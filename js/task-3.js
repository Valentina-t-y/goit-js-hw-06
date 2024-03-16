class StringBuilder {
   #value;
   constructor(initiaValue) {
      this.#value = initiaValue;

   }

   getValue() {
      return this.#value;
   }

   padEnd(str) {
      return  this.getValue() + str;
     
   }

   padStart(str) {
      return str + this.padEnd(str);
   }

   padBoth(str) {
      return str + this.padStart(str) + str;
   }

}






const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="


