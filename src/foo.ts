import 'reflect-metadata';
import { Field } from 'type-graphql';

console.log('Start of ./foo.ts');

export default class Foo {

  @Field(_type => {
    let bar = require('./bar').default
    if (!bar) {
      console.error('Ruh-roh: Foo tried to require Bar lazily, but got undefined')
    } else {
      console.log('Woohoo! Foo successful got a copy of Bar');
    }
    return [bar];
  })
  bar: any[];

}

console.log('Bottom of ./foo.ts - you should see me before any requires')