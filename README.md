## some information

- vite
- eslint use https://github.com/antfu/eslint-config
- tailwindcss3
- File based routing
  - nested routing
    - more see https://github.com/hannoeru/vite-plugin-pages#nested-routes
- git-hooks to lint and commit-message check
- Path Aliasing
  - @/ is aliased to ./src/ folder.
- zustand

  - global state management
  - code is in @/store
  - use middlewares devtool to see state changes on redux devtool
  - use middleware persist to persist state to localStorage or other local storage
    - can also pick some state to persist, more see https://docs.pmnd.rs/zustand/integrations/persisting-store-data#partialize
  - can use immer to mutate state
    - more see https://docs.pmnd.rs/zustand/recipes/recipes#sick-of-reducers-and-changing-nested-state?-use-immer!

- ky
- react-query
- icon
  - iconify to add icon
  - vite-plugin-svgr to import svg as react component
