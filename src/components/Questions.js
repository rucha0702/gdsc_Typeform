export const Questions = [
    {
      id : '1',
      question:  'Name',
      type: 'text',
      name: 'name',
      value: 'UserRegister.username',
      urlP: '#',
      urlN: '#Email'
    },
    {
      id : '2',
      question:  'Email',
      type: 'email',
      name: 'email',
      value: 'UserRegister.email',
      urlP: '#Name',
      urlN: '#About'
    },
    {
      id : '3',
      question:  'About',
      type: 'text',
      name: 'about',
      value: 'UserRegister.about',
      urlP: '#Email',
      urlN: '#Name'
    }
]