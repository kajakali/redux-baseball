# Redux Baseball Pitchers

- Fork
- Clone
- `npm install`
- `npm start`

## Base Requirements

Our application is a hit! Baseball coaches around the world are using our application to track their list of pitchers and catchers. They love that clicking a name updates immediately and they can add new pitchers or catchers on the fly.

We're about to add a ton of new features to our application, but before we do, we should add redux to our application so that our `App.js` component doesn't get out of control.

### TotalPitchers Component

In `App.js` replace the line:

```JSX
<div>Total Pitchers: {this.state.pitcherList.length}</div>
```

with

```JSX
<TotalPitchers />
```

It shouldn't need props, because the `pitcherList` should be stored in Redux.

### TotalCatchers Component

In `App.js` replace the line:

```JSX
<div>Total Catchers: {this.state.catcherList.length}</div>
```

with

```JSX
<TotalCatchers />
```

## Stretch Goals


