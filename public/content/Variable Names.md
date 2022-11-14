---
Title: Variable Names
Description: Variable names are too short. Here's why they should be longer.
Author: HudsonGraeme
Date: 2022-11-13
Tags: React, Javascript, Minification
Image: variable_names.png
---

## Why long variable names are the way to go

## `Reason 1 - Developer Experience`

When working on a team of developers or picking up old code left behind many moons ago, it is immensely useful to have documentation to work with to help new devs understand the existing project. Unfortunately, a lot of times there is nobody coming to the rescue; no cohesive docs, scattered and illegible comments, mixed coding patterns, etc. My point here is that as a new developer, one has no idea what's going on; no idea which ropes to pick up and start pulling on in order to make progress towards a PR. Here's where variable naming steps in. When coming across a variable in code you've never seen before, would it be easier to understand `x` or would it be easier to understand `xValueOnChart`? How about a function named `fmtUser` versus `formatUsernameInCamelCase`? How about a component named `<Card/>` versus `<CardWithImageAndCTAButton/>`? Naming conventions are an underrated form of communication between developers because they are intrinsically built to describe the value they represent.

## `Reason 2 - Bigger name != Bigger memory`

There is no reason not to use huge variable names when working with code that will be minified when it ships. There are heated debates on platforms like StackOverflow on how much memory extra long variable names consume and why it's a bad idea to use them. Luckily, I am here to put all that to rest with two simple bullet points.

1. Frontend Javascript code is getting minified before it ships out. Regardless of how massive my variable names are, by the time they're on a user's machine they'll be nothing but a letter or two of the alphabet.
2. It is 2022. We do not have to scrounge under every nook and cranny to find an extra byte of memory since modern machines provide more than enough RAM to get us through the day. If the device can run Chrome, your excessive variable name length will not matter even without minification.

## `Reason 3 - Big names get noticed`

The maximum name length in Javascript is 254 characters which is plenty of room for personal stories, half of your blog post or really any other decent chunk of text. I regularly make use of long names just because I can - why not? It's more descriptive that's for sure, plus it can easily be found in the mountain of imports when needed. An unmistakeably large variable name is undoubtedly an advantage because it can be tracked down with haste during debugging (since it's obnoxiously massive) and if it's long enough to be noticeable than the name itself probably provides a pretty good description of the value it holds or the method it references.

## Examples

### `Good`

```js
const titleOfBlogPost = "";
const numberOfListItemsRendered = 0;
const formatTodoObjectForTodoListComponent = (todoObject) => {};
const 3DHouseWithCarInDriveway = () => (<></>)
```

### `Bad`

```js
const title = "";
const i = 0;
const fmtTodo = (x) => {};
const 3D = () => (<></>)
```
