import 'reflect-metadata';
import { Field } from 'type-graphql';

console.log('Start of ./bar.ts');

export default class Bar {

  @Field(_type => {
    let foo = require('./foo').default
    if (!foo) {
      console.error('Ruh-roh: Bar tried to require Foo lazily, but got undefined')
    } else {
      console.log('Woohoo! Bar successful got a copy of Foo');
    }
    return [foo];
  })
  foo: any[];

}

console.log('End of ./bar.ts - you should see me before any requires');