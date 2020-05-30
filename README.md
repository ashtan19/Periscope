## Periscope

A react app that leverages the Unsplash API to find you the images that you are looking for!

## Example

![alt text](https://github.com/[ashtan19]/[Periscope]/blob/[master]/public/PeriscopeDemo.png?raw=true)

## How to Start

### `npm install`

### `npm start`

## API

Ensure that you have registered for an Unsplash API and include it in this format

```
import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 0xExample",
  },
});
```
