## Periscope

A react app that leverages Unsplash's API to find you images that you are looking for!

## Example

![Periscope Demo](https://github.com/ashtan19/Periscope/blob/master/public/PeriscopeDemo.png)

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
