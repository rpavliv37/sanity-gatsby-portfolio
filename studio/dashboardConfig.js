export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '5ef31a087a5fcd5d1199b501',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-u4w2ejus',
                  apiId: '69f4a92f-e7e0-43ce-b5fb-c81afbcaf9e9'
                },
                {
                  buildHookId: '5ef31a0868d87b76458932bc',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-4srdnj8u',
                  apiId: 'debe7eb2-a834-4fb3-8e1c-8b73c3c0caa1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rpavliv37/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-4srdnj8u.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
