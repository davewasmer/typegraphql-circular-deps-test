import 'reflect-metadata';
import { Field } from 'type-graphql';

export default class Foo {

  @Field(_type => [ console.log('Type function - I should come last') ])
  bar: any[];

}

console.log('Bottom of the file - I should come first')