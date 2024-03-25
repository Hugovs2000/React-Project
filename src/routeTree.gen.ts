/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SearchImport } from './routes/search'
import { Route as IndexImport } from './routes/index'
import { Route as ReadIndexImport } from './routes/read.index'
import { Route as DetailsIndexImport } from './routes/details.index'
import { Route as SeeMoreSectionImport } from './routes/see-more.$section'
import { Route as DetailsMangaImport } from './routes/details.$manga'
import { Route as ReadMangaIndexImport } from './routes/read.$manga.index'
import { Route as ReadMangaChapterImport } from './routes/read.$manga.$chapter'

// Create/Update Routes

const SearchRoute = SearchImport.update({
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ReadIndexRoute = ReadIndexImport.update({
  path: '/read/',
  getParentRoute: () => rootRoute,
} as any)

const DetailsIndexRoute = DetailsIndexImport.update({
  path: '/details/',
  getParentRoute: () => rootRoute,
} as any)

const SeeMoreSectionRoute = SeeMoreSectionImport.update({
  path: '/see-more/$section',
  getParentRoute: () => rootRoute,
} as any)

const DetailsMangaRoute = DetailsMangaImport.update({
  path: '/details/$manga',
  getParentRoute: () => rootRoute,
} as any)

const ReadMangaIndexRoute = ReadMangaIndexImport.update({
  path: '/read/$manga/',
  getParentRoute: () => rootRoute,
} as any)

const ReadMangaChapterRoute = ReadMangaChapterImport.update({
  path: '/read/$manga/$chapter',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/details/$manga': {
      preLoaderRoute: typeof DetailsMangaImport
      parentRoute: typeof rootRoute
    }
    '/see-more/$section': {
      preLoaderRoute: typeof SeeMoreSectionImport
      parentRoute: typeof rootRoute
    }
    '/details/': {
      preLoaderRoute: typeof DetailsIndexImport
      parentRoute: typeof rootRoute
    }
    '/read/': {
      preLoaderRoute: typeof ReadIndexImport
      parentRoute: typeof rootRoute
    }
    '/read/$manga/$chapter': {
      preLoaderRoute: typeof ReadMangaChapterImport
      parentRoute: typeof rootRoute
    }
    '/read/$manga/': {
      preLoaderRoute: typeof ReadMangaIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  SearchRoute,
  DetailsMangaRoute,
  SeeMoreSectionRoute,
  DetailsIndexRoute,
  ReadIndexRoute,
  ReadMangaChapterRoute,
  ReadMangaIndexRoute,
])

/* prettier-ignore-end */
