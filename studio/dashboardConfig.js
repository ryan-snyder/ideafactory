export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60289e72f649917b743a10ae',
                  title: 'Sanity Studio',
                  name: 'ideafactory-studio',
                  apiId: 'ad2f82fa-2127-4bff-8dc8-fe5059a4be83'
                },
                {
                  buildHookId: '60289e72d15e4588045c5049',
                  title: 'Blog Website',
                  name: 'ideafactory',
                  apiId: 'fc754aab-6f3f-4525-80e2-637ea3faf28a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ryan-snyder/ideafactory',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://ideafactory.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
