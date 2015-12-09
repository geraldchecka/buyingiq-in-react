/* Containers */
import FacetPage from './containers/facet';
import FiltersPage from './containers/filters';
import MobilesPage from './containers/mobilespage';
import ResultsPage from './containers/results';
import SearchPage from './containers/search';
import SortPage from './containers/sort';

/* Dumb Components */
//import  from './dumb-components/';

const views = {
  FacetPage: FacetPage,
  FiltersPage: FiltersPage,
  MobilesPage: MobilesPage,
  ResultsPage: ResultsPage,
  SearchPage: SearchPage,
  SortPage: SortPage
};

module.exports = views;