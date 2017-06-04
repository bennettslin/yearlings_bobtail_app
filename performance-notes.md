https://auth0.com/blog/optimizing-react/
https://facebook.github.io/react/docs/perf.html
https://marmelab.com/blog/2017/02/06/react-is-slow-react-is-fast.html
https://blog.vixlet.com/react-at-light-speed-78cd172a6411

Phase 1:
* Don't bind arguments. Instead call an instance method in a React component.
* Have React components have no knowledge of selected indices, only their own.

Phase 2:
* Be strategic about shouldComponentUpdate checks.
* Avoid shouldComponentUpdate if possible.

Phase 3:
* Avoid passing data objects if they can be fetched by indices.
