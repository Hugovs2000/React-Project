/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as DetailsIndexImport } from './routes/details.index'
import { Route as DetailsMangaImport } from './routes/details.$manga'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const DetailsIndexRoute = DetailsIndexImport.update({
  path: '/details/',
  getParentRoute: () => rootRoute,
} as any)

const DetailsMangaRoute = DetailsMangaImport.update({
  path: '/details/$manga',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/details/$manga': {
      preLoaderRoute: typeof DetailsMangaImport
      parentRoute: typeof rootRoute
    }
    '/details/': {
      preLoaderRoute: typeof DetailsIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  DetailsMangaRoute,
  DetailsIndexRoute,
])

/* prettier-ignore-end */
