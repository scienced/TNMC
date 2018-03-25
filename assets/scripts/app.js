var search = instantsearch({
  // Replace with your own values
  appId: '8Z5NYEO0FO',
  apiKey: '9af270f11b9614ba085728f5b140c2e5', // search only API key, no ADMIN key
  indexName: 'dev_demo',
  urlSync: true,
  searchParameters: {
    hitsPerPage: 12
  }
});




search.addWidget(
  instantsearch.widgets.menuSelect({
    container: '#brand-menuSelect',
    attributeName: 'brand',
    limit: 20,
     cssClasses: {
      select: ['select-dropdown__select', 'select-dropdown'],
      root: ['filters__filter-group', 'filters__filter-group--region'],
    },
    templates: {
      seeAllOption: 'Which Brands?'
    }
  })
);

search.addWidget(
  instantsearch.widgets.menuSelect({
    container: '#type-menuSelect',
    attributeName: 'type',
    limit: 20,
    cssClasses: {
      select: ['select-dropdown__select', 'select-dropdown'],
      root: ['filters__filter-group', 'filters__filter-group--region'],
    },
    templates: {
      seeAllOption: 'Which Types?'
    }
  })
);


  // initialize clearAll
  search.addWidget(
    instantsearch.widgets.clearAll({
      container: '#clear-all',

      templates: {
        link: '<i class="icon-times filters__clear-button-icon" aria-hidden="true"></i> Reset everything'
      },
      cssClasses: {
      body: 'filters__clear-button'
    },
    autoHideContainer: true
    })
  );




search.addWidget(
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: document.getElementById('hit-template').innerHTML,
      empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
    }
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: '#pagination'
  })
);




search.start();