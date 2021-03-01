(() => ({
  name: 'CardHeader',
  icon: 'CardHeaderIcon',
  category: 'CARDS',
  structure: [
    {
      name: 'CardHeader',
      options: [
        {
          value: [],
          label: 'Avatar',
          key: 'avatar',
          type: 'VARIABLE',
        },
        {
          label: 'Avatar type',
          key: 'avatarType',
          value: 'text',
          type: 'CUSTOM',
          configuration: {
            as: 'BUTTONGROUP',
            dataType: 'string',
            allowedInput: [
              { name: 'Text', value: 'text' },
              { name: 'Image', value: 'image' },
            ],
            condition: {
              type: 'HIDE',
              option: 'avatar',
              comparator: 'EQ',
              value: '',
            },
          },
        },
        {
          value: ['Title'],
          label: 'Title',
          key: 'title',
          type: 'VARIABLE',
        },
        {
          value: [],
          label: 'Sub header',
          key: 'subheader',
          type: 'VARIABLE',
        },
        {
          type: 'TOGGLE',
          label: 'Advanced',
          key: 'advanced',
          value: false,
        },
        {
          type: 'VARIABLE',
          label: 'Testing',
          key: 'testing',
          value: [''],
          configuration: {
            condition: {
              type: 'SHOW',
              option: 'advanced',
              comparator: 'EQ',
              value: true,
            },
          },
        },
      ],
      descendants: [],
    },
  ],
}))();
