# UI Sandbox

![Material Buttons](img/uisandboxbuttons.png?raw=true "Material Buttons")

![Bootstrap Tables](img/uisandboxtables.png?raw=true "Bootstrap Tables")

Try out all of the UI sets your front-end heart desires. 
Built with React.

Install dependencies and then run.

```
npm install

npm start
```

Build with

```
npm run build
```

**This is a work in progress.** 
#### To Do

* [x] Add SemanticUI, Materialize, Foundation, Material-UI, Reactstrap, React-MD, React-Toolbox, MUICSS.
  * [x] Install dependencies 
  * [x] Create folders
  * [x] Edit _nav.js and route.js
* [ ] **See Note 1:** Customize stylesheets
* [ ] Organize directory structure
* [ ] Build dashboards for each UI set with information from each.
* [ ] Add all components
* [ ] Make theme editable
* [ ] Add user registration/login to save customizations.


**Note 1:** Because CRA bundles the styles globally, importing any others messes with it. For example, as of right now, you can import the foundation stylesheet via cdn and it will work and the components will be properly styled, but it messes with the layout of the page slightly. Probably easiest to go through the stylesheet and ctrl+f to extract necessary pieces.

#### References:

##### Components

[Material-UI](https://material-ui.com/demos/cards)

[React Foundation](http://aruberto.github.io/react-foundation-components/#/containers/accordion?_k=4hrtv6)

[Reactstrap](https://reactstrap.github.io/components/alerts/)

[SemanticUI](https://react.semantic-ui.com/usage)

[React-MD](https://react-md.mlaursen.com/components/cards)

[React-Toolbox](http://react-toolbox.io/#/components/card)

[MUICSS](https://www.muicss.com/docs/v1/react/buttons)

[Materialize](https://react-materialize.github.io/#/)
