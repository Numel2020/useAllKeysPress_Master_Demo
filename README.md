# useAllKeysPress Master Demo
This file is the configuration guide in creating the `useAllKeysPress` demos, these examples are:

 ### 1. [Single key ](https://codesandbox.io/s/single-key-usage-bmfxi)
 ### 2. [Key on focused element](https://codesandbox.io/s/key-on-focused-element-c1gpb)
 ### 3. [Multiple keys](https://codesandbox.io/s/multiple-keys-jhfdn)
 ### 4. [Multiple keys in order ](https://codesandbox.io/s/multiple-keys-in-order-vpovi)

#### NOTE: The below code samples are purely for reference. You can use whatever letters you wish.
---
# 1. Single key

<div align="center">
 <img width="50%" src="https://github.com/Numel2020/useAllKeysPress/blob/8b472c795f1c92b8f6ed304d45376300c2dd30d5/demos/screenshots/SK.gif" />
</div>



### Keys setup

```js
  const avoPress = useAllKeysPress({ userKeys: "a" });
  const waterPress = useAllKeysPress({ userKeys: "w" });
  const duckPress = useAllKeysPress({ userKeys: "d" });
  const foxPress = useAllKeysPress({ userKeys: "f" });
```

### Inputs

```js
  const inputs = [
    { input: avoPress, key: "a", symbol: "🥑" },
    { input: waterPress, key: "w", symbol: "🤽" },
    { input: duckPress, key: "d", symbol: "🦆" },
    { input: foxPress, key: "f", symbol: "🦊" }
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Single key usage"} 
   subtext={"Press the key and see."}
 />
```
## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
 />
```
## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
 ></Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs} 
  />
```
---

# 2. Key on focused element

<div align="center">
  <img width="50%" src="https://github.com/Numel2020/useAllKeysPress/blob/2fa699d92c6a47118dab63806b74e1d49413a85f/demos/screenshots/KOFE.gif" />
 </div>

### Keys setup

```js
  // create a ref to attach to the element that will have focus.
  const input = useRef(null)
  
  const upPress = useAllKeysPress({ userKeys: "ArrowUp", ref: input });
  const downPress = useAllKeysPress({ userKeys: "ArrowDown", ref: input });
```

### Inputs

```js
  const inputs = [
    { input: upPress, key: "ArrowUp", symbol: "🤗" },
    { input: downPress, key: "ArrowDown", symbol: "🤮" }
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Key on Focused Element"} 
   subtext={"Press the key and see."}
 />
```
## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
 />
```
## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
 >
   // element to be referenced on focus.
   <UseAllInput ref={input} />
 </Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs} 
  />
```
---
# 3. Multiple keys


<div align="center">
  <img width="50%" src="https://github.com/Numel2020/useAllKeysPress/blob/abbeac6096d2b7a6cd7f7084ac11a01645300889/demos/screenshots/MK.gif" />
 </div>



### Keys setup

```js
  const avoPress = useAllKeysPress({ userKeys: "a" });
  const waterPress = useAllKeysPress({ userKeys: "w" });
  const duckPress = useAllKeysPress({ userKeys: "d" });
  const foxPress = useAllKeysPress({ userKeys: "f" });
  
  // this variable represents will when all are pressed
  const combinePress = useAllKeysPress({ userKeys: ["a", "w", "d", "f"] });
```

### Inputs

```js
  const inputs = [
    { input: avoPress, key: "a", symbol: "🥑" },
    { input: waterPress, key: "w", symbol: "🤽" },
    { input: duckPress, key: "d", symbol: "🦆" },
    { input: foxPress, key: "f", symbol: "🦊" }
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Multiple keys"} 
   subtext={"Press the keys and see."}
 />
```

## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
  type={"multi"}
 />
```

## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
 ></Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs}
  combine={combinePress}
  />
```
---
# 4. Multiple keys in order
<div align="center">
  <img width="50%" src="https://github.com/Numel2020/useAllKeysPress/blob/a6074a87d695f4b9c2e51c4a1d7ea1b869f71d7c/demos/screenshots/MKIO.gif" />
 </div>


### Keys setup

```js
  const akeyPress = useAllKeysPress({ userKeys: "a" });
  const bkeyPress = useAllKeysPress({ userKeys: "b" });
  const ckeyPress = useAllKeysPress({ userKeys: "c" });
  
  // this variable represents will when all are pressed in order
  const combinePress = useAllKeysPress({ userKeys: ["a", "b", "c"], order: true });
```

### Inputs

```js
 const inputs = [
    { input: akeyPress, key: "a"},
    { input: bkeyPress, key: "b"},
    { input: ckeyPress, key: "c"},
  ];
```

### status

```js
// Aids in the detection of the first key pressed in.
 const anyKeyPressed = inputs.some((item) => item.input === true);
```

## Title component
```jsx
 <Title
   heading={"Multiple keys in order"} 
   subtext={"Press the keys and see."}
 />
```

## UseAllKeypad component
```jsx
 <UseAllKeypad 
  inputs={inputs} 
  type={"multi"}
 />
```

## Screen component
```jsx
 <Screen
  activate={anyKeyPressed}
  input={inputs}
  combine={combinePress}
  type={"jackson"}
  message={"All you gotto do is repeat after me!!"}
 ></Screen>
```

## UserOutput component
```jsx
  <UserOutput 
  items={inputs}
  combine={combinePress}
  />
```

